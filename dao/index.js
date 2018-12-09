/**
 * Created by Administrator on 2017/9/22 0022.
 *
 *
 *
 */

const mongodb = require('./../tools/mongodb');

const DB_Rate       = 'Intercept.Rate';
const DB_Intercept  = 'Intercept.List';
const DB_User       = 'Intercept.User';

function Index() {}

const action = Index.prototype;

/*
*
*
* */
action.login = async function(query, page, pageSize) {

  //let db = await mongodb.createDB();

  return await mongodb.search( DB_User, query, page, pageSize);
};

/*
*
*
* */
action.findRate = async function(query, page, pageSize) {

  //let db = await mongodb.createDB();

  return await mongodb.search(DB_Rate, query, page, pageSize);
};

/*
*
*
* */
action.addRate = async function(businesser) {

 // let db = await mongodb.createDB();

  return await mongodb.add(DB_Rate, businesser);
};

/*
*
*
* */
action.updateRate = async function(query, obj) {

  //let db = await mongodb.createDB();

  return await mongodb.update(DB_Rate, query, obj);
};

/*
 *
 *
 * */
action.insertList = async function(obj) {

  //let db = await mongodb.createDB();

  return await mongodb.add(DB_Intercept, obj);
};

/*
 *
 *
 * */
action.searchList = async function(query, page, pageSize) {

  //let db = await mongodb.createDB();

  return await mongodb.search(DB_Intercept, query, page, pageSize);
};

/*
 *
 *
 * */
action.searchAll = async function(query) {

  //let db = await mongodb.createDB();

  return await mongodb.searchAll(DB_Intercept, query);
};

/*
 *
 * 聚合
 * */
action.complexSearch = async function(query) {

  //let db = await mongodb.createDB();

  return await mongodb.composite(DB_Intercept, query);
};

/*
 *
 * 总条数
 * */
action.searchCount = async function(query) {

  //let db = await mongodb.createDB();

  return await mongodb.getCount(DB_Intercept, query);
};

module.exports = new Index();