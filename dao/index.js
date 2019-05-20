/**
 * Created by Administrator on 2017/9/22 0022.
 *
 *
 *
 */

const Mongo        = require('./../tools/mongodb');
const DB_Rate      = 'Intercept.Rate';
const DB_Intercept = 'Intercept.List';
const DB_User      = 'Intercept.User';
const mongodb      = new Mongo();

function Index() {}

const action = Index.prototype;

/**
 *
 * @param query
 * @param page
 * @param pageSize
 * @returns {Promise<*>}
 */
action.login = async function(query, page, pageSize) {
  return await mongodb.search(DB_User, query, page, pageSize);
};

/**
 *
 * @param query
 * @param page
 * @param pageSize
 * @returns {Promise<*>}
 */
action.findRate = async function(query, page, pageSize) {
  return await mongodb.search(DB_Rate, query, page, pageSize);
};

/**
 *
 * @param businesser
 * @returns {Promise<*>}
 */
action.addRate = async function(businesser) {
  return await mongodb.add(DB_Rate, businesser);
};

/**
 *
 * @param query
 * @param obj
 * @returns {Promise<*>}
 */
action.updateRate = async function(query, obj) {
  return await mongodb.update(DB_Rate, query, obj);
};

/**
 *
 * @param obj
 * @returns {Promise<*>}
 */
action.insertList = async function(obj) {
  return await mongodb.add(DB_Intercept, obj);
};

/**
 *
 * @param query
 * @param page
 * @param pageSize
 * @returns {Promise<*>}
 */
action.searchList = async function(query, page, pageSize) {

  return await mongodb.search(DB_Intercept, query, page, pageSize);
};

/**
 *
 * @param query
 * @returns {Promise<*>}
 */
action.searchAll = async function(query) {
  return await mongodb.searchAll(DB_Intercept, query);
};

/**
 *
 * @param query
 * @returns {Promise<*>}
 */
action.complexSearch = async function(query) {
  return await mongodb.composite(DB_Intercept, query);
};

/**
 *
 * @param query
 * @returns {Promise<*>}
 */
action.searchCount = async function(query) {
  return await mongodb.getCount(DB_Intercept, query);
};

module.exports = new Index();