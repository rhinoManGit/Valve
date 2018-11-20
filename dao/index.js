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

  let db = await mongodb.createDB();

  return await mongodb.search(db, DB_User, query, page, pageSize);
};

/*
*
*
* */
action.findRate = async function(query, page, pageSize) {

  let db = await mongodb.createDB();

  return await mongodb.search(db, DB_Rate, query, page, pageSize);
};

/*
*
*
* */
action.addRate = async function(businesser) {

  let db = await mongodb.createDB();

  return await mongodb.add(db, DB_Rate, businesser);
};

/*
*
*
* */
action.updateRate = async function(query, obj) {

  let db = await mongodb.createDB();

  return await mongodb.update(db, DB_Rate, query, obj);
};

/*
 *
 *
 * */
action.insertList = async function(obj) {

  let db = await mongodb.createDB();

  return await mongodb.add(db, DB_Intercept, obj);
};

/*
 *
 *
 * */
action.searchList = async function(query, page, pageSize) {

  let db = await mongodb.createDB();

  return await mongodb.search(db, DB_Intercept, query, page, pageSize);
};

/*
 *
 *
 * */
action.searchAll = async function(query) {

  let db = await mongodb.createDB();

  return await mongodb.searchAll(db, DB_Intercept, query);
};

/*
 *
 * 聚合
 * */
action.complexSearch = async function(query) {

  let db = await mongodb.createDB();

  return await mongodb.composite(db, DB_Intercept, query);
};

/*
 *
 * 总条数
 * */
action.searchCount = async function(query) {

  let db = await mongodb.createDB();

  return await mongodb.getCount(db, DB_Intercept, query);
};
/*
 * add businesser
 *
 * */
/*action.addBusiness = async function(businesser) {

  let db = await mongodb.createDB();

  return await mongodb.add(db, DB_Business, businesser);
};

/!*
 * add art
 *
 * *!/
action.addArt = async function(art) {

  let db = await mongodb.createDB();

  return await mongodb.add(db, DB_Art, art);
};

/!*
 *
 *
 * *!/
action.artSearch = async function(query, page, pageSize) {

  let db = await mongodb.createDB();

  return await mongodb.search(db, DB_Art, query, page, pageSize);
};

/!*
 *
 *
 * *!/
action.find = async function(query, page, pageSize) {

  let db = await mongodb.createDB();

  return await mongodb.search(db, DB_Business, query, page, pageSize);
};

/!*
 *
 *
 * *!/
action.updateBusiness = async function(query, obj) {

  let db = await mongodb.createDB();

  return await mongodb.update(db, DB_Business, query, obj);
};

action.updateArt = async function(query, obj) {

  let db = await mongodb.createDB();

  return await mongodb.update(db, DB_Art, query, obj);
};

action.deleteBusiness = async function(query, obj) {

  let db = await mongodb.createDB();

  return await mongodb.remove(db, DB_Business, query, obj);
};

action.deleteArt = async function(query, obj) {

  let db = await mongodb.createDB();

  return await mongodb.remove(db, DB_Art, query, obj);
};*/

module.exports = new Index();