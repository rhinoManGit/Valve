/**
 * Created by Administrator on 2017/9/22 0022.
 *
 */

const Mongo        = require('./../tools/mongodb');
const DB_Rate      = 'Intercept.Rate';
const DB_Intercept = 'Intercept.List';
const DB_User      = 'Intercept.User';
const mongodb      = new Mongo();

class Dao {

  /**
   *
   * @param query
   * @param page
   * @param pageSize
   * @returns {Promise<*>}
   */
  async login(query, page, pageSize) {
    return await mongodb.search(DB_User, query, page, pageSize);
  }

  /**
   *
   * @param query
   * @param page
   * @param pageSize
   * @returns {Promise<*>}
   */
  async findRate(query, page, pageSize) {
    return await mongodb.search(DB_Rate, query, page, pageSize);
  }

  /**
   *
   * @param businesser
   * @returns {Promise<*>}
   */
  async addRate(businesser) {
    return await mongodb.add(DB_Rate, businesser);
  }

  /**
   *
   * @param query
   * @param obj
   * @returns {Promise<*>}
   */
  async updateRate(query, obj) {
    return await mongodb.update(DB_Rate, query, obj);
  }

  /**
   *
   * @param obj
   * @returns {Promise<*>}
   */
  async insertList(obj) {
    return await mongodb.add(DB_Intercept, obj);
  }

  /**
   *
   * @param query
   * @param page
   * @param pageSize
   * @returns {Promise<*>}
   */
  async searchList(query, page, pageSize) {

    return await mongodb.search(DB_Intercept, query, page, pageSize);
  }

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async searchAll(query) {
    return await mongodb.searchAll(DB_Intercept, query);
  }

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async complexSearch(query) {
    return await mongodb.composite(DB_Intercept, query);
  }

  /**
   *
   * @param query
   * @returns {Promise<*>}
   */
  async searchCount(query) {
    return await mongodb.getCount(DB_Intercept, query);
  }
}

module.exports = new Dao();