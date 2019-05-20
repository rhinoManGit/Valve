const Redis  = require('ioredis');
const config = require('./../../config').config();

class Index {
  constructor() {
    this.redis = new Redis(config['redis_port'], config['redis_ip']);
  }

  /**
   *
   * @param key
   * @param value
   * @param expire
   * @returns {Promise<void>}
   */
  async set(key, value, expire) {

    if (expire)
      this.redis.set(key, value, 'EX', expire);
    else
      this.redis.set(key, value);

  }

  /**
   *
   * @param key
   * @returns {Promise<any>}
   */
  async get(key) {

    let that = this;

    return new Promise(function(resolve, reject) {

      that.redis.get(key, function(err, result) {
        resolve(result);
      });
    });
  }
}

module.exports = new Index();
