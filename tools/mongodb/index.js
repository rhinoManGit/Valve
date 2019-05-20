/*
 *
 *
 * */
const MongoClient = require('mongodb').MongoClient;
const assert      = require('assert');
const config      = require('./../../config').config();

// Connection URL
const url = 'mongodb://' + config['db_host'] + ':'
            + config['db_port'];

// Database Name
const dbName = config['db_DB'];

const client = global['client'];

function DB() {
}

const action = DB.prototype;

/**
 *
 * @param cb
 */
action.createDB = function(cb) {

  MongoClient.connect(url, function(err, client) {

    assert.equal(null, err);
    cb(client);
  });
};

/**
 *
 * @param coll
 * @param query
 * @param page
 * @param pageSize
 * @returns {Promise<any>}
 */
action.orderList = async function(coll, query, page = 1, pageSize = 10) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).
               sort({_id: 1}).
               skip((page - 1
                    ) * pageSize).
               limit(pageSize).
               toArray(function(err, docs) {
                 assert.equal(err, null);

                 resolve(docs);
               });
  });
};

/**
 *
 * @param coll
 * @param query
 * @returns {Promise<any>}
 */
action.orderDetail = async function(coll, query) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).sort({_id: 1}).limit(10).toArray(
        function(err, docs) {
          assert.equal(err, null);

          resolve(docs);
        });
  });
};

/**
 *
 * @param coll
 * @param query
 * @returns {Promise<any>}
 */
action.findDocuments = async function(coll, query) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).toArray(function(err, docs) {
      assert.equal(err, null);

      resolve(docs);
    });
  });

};

/**
 *
 * @param coll
 * @param query
 * @param page
 * @param pageSize
 * @returns {Promise<any>}
 */
action.search = async function(coll, query, page = 1, pageSize = 10) {

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
                 assert.equal(err, null);

                 resolve(docs);
               });
  });
};

/**
 *
 * @param coll
 * @param query
 * @returns {Promise<any>}
 */
action.searchAll = async function(coll, query) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).
               sort({CreateDate: 1}).
               limit(500).
               toArray(function(err, docs) {

                 if(err){
                   console.log(`[ error ] ${err.message}, ${err.stack}.`);
                 }

                 resolve(docs);
               });
  });
};

/**
 *
 * @param coll
 * @param query
 * @returns {Promise<any>}
 */
action.searchCount = async function(coll, query) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    resolve(collection.find(query).sort({CreateDate: 1}).count());
  });
};

/**
 *
 * @param coll
 * @param query
 * @returns {Promise<any>}
 */
action.composite = async function(coll, query) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.aggregate(query).toArray(function(err, docs) {

      if(err){
        console.log(`[ error ] ${err.message}, ${err.stack}.`);
      }

      resolve(docs);
    });

  });
};

/**
 *
 * @param coll
 * @param query
 * @param obj
 * @returns {Promise<any>}
 */
action.updateDocument = async function(coll, query, obj) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    collection.updateOne(query, obj,
        function(err, result) {

          if(err){
            console.log(`[ error ] ${err.message}, ${err.stack}.`);
          }

          resolve(result.result);
        },
    );
  });

};

/**
 *
 * @param coll
 * @param data
 * @returns {Promise<any>}
 */
action.add = async function(coll, data) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.insert(data, function(err, docs) {

      if(err){
        console.log(`[ error ] ${err.message}, ${err.stack}.`);
      }

      resolve(docs.result);
    });
  });
};

/**
 *
 * @param coll
 * @param query
 * @param obj
 * @returns {Promise<any>}
 */
action.update = async function(coll, query, obj) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    collection.updateOne(query, {$set: obj}, function(err, result) {
      if(err){
        console.log(`[ error ] ${err.message}, ${err.stack}.`);
      }

      resolve(result);
    });
  });
};

/**
 *
 * @param coll
 * @param query
 * @param obj
 * @returns {Promise<any>}
 */
action.remove = async function(coll, query, obj) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    collection.remove(query, function(err, result) {

      if(err){
        console.log(`[ error ] ${err.message}, ${err.stack}.`);
      }

      resolve(result);
    });
  });
};

/**
 *
 * @param coll
 * @param query
 * @param obj
 * @returns {Promise<any>}
 */
action.getCount = async function(coll, query, obj) {

  let db = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    resolve(collection.find(query).count());
  });
};

module.exports = DB;


