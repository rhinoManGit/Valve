/**
 * Created by Administrator on 2017/9/25 0025.
 */
var dao      = require('./../dao/');
var sendEmail = require('./sendEmail');
var logger    = require('./logger');
var config    = require('./../config').config();
var Excel     = require('exceljs');
var sName     = '数据统计：';
var schedule  = require('node-schedule');

var sendHandle = async function () {

    try{
        var data = {
            total: 102229,
            goodsQuantity: 1233,
            interceptQuantity: 1200,
            noInterceptQuantity:33,
            interceptAmount: 100000,
            noInterceptAmount: 2229
        }//await server.getExamList();

        /*if(!data.length){
            return;
        }*/

        var preDate = (new Date(+new Date - 24 * 60 * 60 * 1000)),
            sDate   = `[${preDate.getFullYear()}-${(preDate.getMonth() - (-1))}-${preDate.getDate()}]`;

        /*
         * 写入Excel
         * */
        /*var workbook = new Excel.stream.xlsx.WorkbookWriter({
            filename: './cache/examlist.xlsx'
        });

        var worksheet = workbook.addWorksheet('Sheet');

        worksheet.columns = [
            { header: '姓名',         key: 'name' },
            { header: '电话号码',     key: 'phone' },
            { header: '所教学科',     key: 'subjectName' },
            { header: '是否有极课号', key: 'jikeNo' }
            ];

        for(let i in data){

            data[i]['jikeNo'] = data[i]['jikeNo'] - 0 ===1? '是':'否'  

            worksheet.addRow(data[i]).commit();   
        }

        workbook.commit();*/
      let iStyle = 'color: #e20606;' +
          '    font-style: normal;' +
          '    padding: 0 6px;' +
          '    border-bottom: 1px dashed #e20606;';

      let emStyle = 'color: #666;' +
          '    font-style: normal;' +
          '    display: inline-block;' +
          '    width: 119px;';

      let tmp = `Dear Boss：<br\> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +
          `下面是${sDate}期间拦截数据汇总:<br\>` +
          `<p><em style="${emStyle}">总流水：</em>` +
          `<i style="${iStyle}">${data.total}元</i></p>` +

          `<p><em style="${emStyle}">总商品数量：</em>` +
          `<i style="${iStyle}">${data.goodsQuantity}件</i></p>` +

          `<p><em style="${emStyle}">拦截商品数量：</em>` +
          `<i style="${iStyle}">${data.interceptQuantity}件</i></p>` +

          `<p><em style="${emStyle}">非拦截商品数量：</em>` +
          `<i style="${iStyle}">${data.noInterceptQuantity}件</i></p>` +

          `<p><em style="${emStyle}">拦截金额：</em>` +
          `<i style="${iStyle}">${data.interceptAmount}元</i></p>` +

          `<p><em style="${emStyle}">非拦截金额：</em>` +
          `<i style="${iStyle}">${data.noInterceptAmount}元</i></p>`;

        /*
         * 发送邮件
         * */
        var aToAddresses = ['765974196@qq.com'];
        // 抄送
        var aCcAddresses = ['765974196@qq.com'/*'lihaiyang@fclassroom.com','wanglichuan@fclassroom.com',*/];

        var account = {
            user   : config.Email_Authorization_user,
            pass   : config.Email_Authorization_code,
            from   : '<' + config.Email_Authorization_user + '>',  
            to     : aToAddresses,
            cc     : aCcAddresses,
            subject: `${sDate} 数据拦截汇总`,
            text   : '',
            html   : tmp,
            /*attachments:
                [
                    {
                        filename: sDate + '.xlsx',
                        path: './cache/examlist.xlsx' // stream this file
                    }
                ]*/
        }

        // 发邮件
        sendEmail(account, function(err, info){

            if(err) throw (err);

            logger.log(`${sDate} 9:30:00 send Email ${JSON.stringify(info)}`)
        });
    }catch(e){
        logger.error(e);
    }
}

module .exports = function() {

  schedule.scheduleJob('30 09 * * *', function(){
    console.log('定时发送邮件:' + new Date());
    sendHandle();
  });
};