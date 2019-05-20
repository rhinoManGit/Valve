/*
 *
 *
 * */
const MongoClient = require('mongodb').MongoClient;
const config      = require('./../../config').config();

// Connection URL
const url = 'mongodb://' + config['db_host'] + ':'
            + config['db_port'];

// Database Name
const dbName = config['db_DB'];

const client = global['client'];

class DB {

  /**
   *
   * @param cb
   */
  createDB(cb) {

    MongoClient.connect(url, function(err, client) {

      if (err) {
        console.log(`[ error ] ${err.message}, ${err.stack}.`);
      }

      cb(client);
    });
  }

  /**
   *
   * @param coll
   * @param query
   * @param page
   * @param pageSize
   * @returns {Promise<any>}
   */
  async search(coll, query, page = 1, pageSize = 10) {

    let db = client.db(dbName);

    return new Promise(function(resolve, reject) {

      // Get the documents collection
      let collection = db.collection(coll);

      // Find some documents
      collection.find(query).
                 sort({CreateDate: 1}).
                 skip((page - 1
                      ) * pageSize).
                 limit(pageSize - 0).
                 toArray(function(err, docs) {
                   if (err) {
                     console.log(`[ error ] ${err.message}, ${err.stack}.`);
                   }
                   resolve(docs);
                 });
    });
  }

  /**
   *
   * @param coll
   * @param query
   * @returns {Promise<any>}
   */
  async searchAll(coll, query) {

    let db = client.db(dbName);

    return new Promise(function(resolve, reject) {

      // Get the documents collection
      let collection = db.collection(coll);

      // Find some documents
      collection.find(query).
                 sort({CreateDate: 1}).
                 limit(500).
                 toArray(function(err, docs) {

                   if (err) {
                     console.log(`[ error ] ${err.message}, ${err.stack}.`);
                   }

                   resolve(docs);
                 });
    });
  }

  /**
   *
   * @param coll
   * @param query
   * @returns {Promise<any>}
   */
  async searchCount(coll, query) {

    let db = client.db(dbName);

    return new Promise(function(resolve, reject) {

      // Get the documents collection
      let collection = db.collection(coll);

      // Find some documents
      resolve(collection.find(query).sort({CreateDate: 1}).count());
    });
  }

  /**
   *
   * @param coll
   * @param query
   * @returns {Promise<any>}
   */
  async composite(coll, query) {

    let db = client.db(dbName);

    return new Promise(function(resolve, reject) {

      // Get the documents collection
      let collection = db.collection(coll);

      // Find some documents
      collection.aggregate(query).toArray(function(err, docs) {

        if (err) {
          console.log(`[ error ] ${err.message}, ${err.stack}.`);
        }

        resolve(docs);
      });

    });
  }

  /**
   *
   * @param coll
   * @param query
   * @param obj
   * @returns {Promise<any>}
   */
  async update(coll, query, obj) {

    let db = client.db(dbName);

    return new Promise(function(resolve, reject) {

      // Get the documents collection
      let collection = db.collection(coll);

      collection.updateOne(query, {$set: obj}, function(err, result) {
        if (err) {
          console.log(`[ error ] ${err.message}, ${err.stack}.`);
        }

        resolve(result);
      });
    });
  }

  /**
   *
   * @param coll
   * @param query
   * @param obj
   * @returns {Promise<any>}
   */
  async getCount(coll, query, obj) {

    let db = client.db(dbName);

    return new Promise(function(resolve, reject) {

      // Get the documents collection
      let collection = db.collection(coll);

      resolve(collection.find(query).count());
    });
  }
}

module.exports = DB;


