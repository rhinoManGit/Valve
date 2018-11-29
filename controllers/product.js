/**
 * Created by Administrator on 2017/9/18 0018.
 */
const fs            = require('fs');
const config        = require('./../config').config();
const dao           = require('./../dao');
const request       = require('request');
const crypto        = require('crypto');
const moment = require('moment');
const Product       = require('./../model/Product');
// const redis         = require('./../tools/redis');
// const BusinessModel = require('./../model/Business');
const _ID = 'intercept_321_20180910';

function Business() {}

const Action = Business.prototype;

Action.index = function(req, res, next) {};

/*
*
* */
Action.fetchrate = async function (req, res, next) {

  let result = await dao.findRate({_id: _ID});

  if(!result.length){
    res.json({status: '200', err: '查找不到配置！', result: result, msg: '查找不到配置！'});
  }else{
    res.json({status: '200', err: '', result: result, msg: '查找配置成功。'});
  }

}
/*
 *
 * 更新比例
 *
 *
 * */
Action.updaterate = async function(req, res, next, rate) {

  try {

    let result = await dao.findRate({_id: _ID});
    let msg    = '拦截比例更新成功。';

    if(!result.length){

      result = await dao.addRate({
                                  _id  : _ID,
                                  Date : new Date,
                                  Value: rate,
                                });
      msg    = '拦截比例设置成功。'
    }else{
      result = await dao.updateRate({_id: _ID}, {Value: rate});
    }

    if(result['ok'] - 0 === 1 || (result['result'] && result['result']['ok'] - 0 === 1)){
      res.json({status: '200', err: '', result: rate, msg: msg});
    }else{
      res.json({status: '200', err: '更新失败！', result: '', msg: '更新失败！'});
    }

  }
  catch (e) {
    return next(e);
  }

};

/*
* 查询列表
* status: 1 拦截，2， 未拦截
* */
Action.list = async function(req, res, next) {

  try {
    let end   = req.query.endTime || '';
    let start = req.query.startTime || '';

    if(!start || !end){
      res.json({err:'illegal parameter', total:0, list: [], msg: '参数时间为必填参数'});
      return;
    }

    if(/\D+/.test(start - 0) || /\D+/.test(end - 0)){
      res.json({err:'illegal parameter', total:0, list: [], msg: '参数时间格式不合法'});
      return;
    }

    let kw  = req.query.keyword;
    let _query = {
      'orderTime': {
        '$gte' : new Date(start - 0)
        , '$lt': new Date(end - 0),
      }
    };

    /*
    * 模糊查询支持，名称，价格，描述
    * todo, 这里的正则是字符串的执行，如果价格是数字需要将kw转为数字执行
    * */
    if (kw) {
      let reg = new RegExp(req.query.keyword);

      _query['$or'] = [
        {'ChangeContent.REMARK': {$regex: reg}},
        {'ChangeContent.SALE_PRICE': {$regex: reg}}
      ];
    }

    //聚合数量和金额
    var aGroup = [
      {
        $match: _query
      },
      {
        $group: {
          _id        : '$Status',
          amount     : {$sum: '$ChangeContent.SALE_TOTAL_PRICE'},
          quantity   : {$sum: '$ChangeContent.SALE_NUM'},
        },
      },
    ];

    let result    = await dao.searchList(_query, req.query.page);
    let totalList = await dao.complexSearch(aGroup);
    let count     = await dao.searchCount(_query);


    // 非拦截商品数量
    // 总金额
    // 拦截金额
    // 非拦截金额
    let iTotal = 0;
    totalList.forEach(function(o) {
      iTotal+= o.quantity;
    })

    let arr = [];

    result.forEach(function(item) {
      let o = new Product(item);

      arr.push(o);
    })

    res.json({err:'', count: count, total:iTotal, totalInfo: totalList, list: arr, msg:''});
  }
  catch (e) {
    return next(e);
  }
};

/**
 *
 * @type {Business}
 */
Action.ticketlist = async function (req, res, next) {
  try {
    let end   = req.query.endTime || '';
    let start = req.query.startTime || '';

    if(!start || !end){
      res.json({err:'illegal parameter', total:0, list: [], msg: '参数时间为必填参数'});
      return;
    }

    if(/\D+/.test(start - 0) || /\D+/.test(end - 0)){
      res.json({err:'illegal parameter', total:0, list: [], msg: '参数时间格式不合法'});
      return;
    }

    let _query = {
      'orderTime': {
        '$gte' : new Date(start - 0)
        , '$lt': new Date(end - 0),
      },
      'Status': '1'
    };

    let day1 = moment(start - 0).format('YYYY-MM-DD HH:mm:ss');
    let day2 = moment(end - 0).format('YYYY-MM-DD HH:mm:ss');

    let result    = await dao.searchAll(_query);
    let str = [];
    //let str2 = [];
    let temp1 = [];
    //let temp2 = [];

    result.forEach(function(i) {
      if(temp1.indexOf(i['ChangeContent']['FLOW_NO']) ===-1){
        str.push(`\'${i['ChangeContent']['FLOW_NO']}'`)
        temp1.push(i['ChangeContent']['FLOW_NO'])
      }
      /*if(temp2.indexOf(i['ChangeContent']['FLOW_NO']) ===-1){
        str2.push(`\'${i['ChangeContent']['FLOW_NO']}'`)
        temp2.push(i['ChangeContent']['FLOW_NO'])
      }*/
    })

    let sql =`delete from  MY_POS_SALEFLOW where OPER_TIME`+
        ` between '${day1}' and '${day2}' AND  FLOW_NO in (${str.join(',')})`;

    let sql2 =`delete from  MY_POS_PAYFLOW where OPER_TIME`+
        ` between '${day1}' and '${day2}' AND  FLOW_NO in (${str.join(',')})`;

    if(!result.length){
      sql = sql2 = '';
    }

    res.json({err:'', list: sql, list1: sql2,msg:''});
  }
  catch (e) {
    return next(e);
  }
}

module.exports = new Business();