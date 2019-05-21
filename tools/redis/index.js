const Redis  = require('ioredis');
const config = require('./../../config').config();

class Index {

  constructor() {
    this.connection();
  }

  async connection() {

    global['redis'] = new Redis(config['redis_port'], config['redis_ip']);
    console.log(` [ redis ] connection is success.`);

    return global['redis'];
  }

  /**
   *
   * @param key
   * @param value
   * @param expire
   * @returns {Promise<void>}
   */
  async set(key, value, expire) {

    if(!global['redis']){
      await this.connection();
    }

    if (expire)
      global['redis'].set(key, value, 'EX', expire);
    else
      global['redis'].set(key, value);

  }

  /**
   *
   * @param key
   * @returns {Promise<any>}
   */
  async get(key) {

    if(!global['redis']){
      await this.connection();
    }

    return new Promise(function(resolve, reject) {

      global['redis'].get(key, function(err, result) {
        resolve(result);
      });
    });
  }
}

module.exports = new Index();
