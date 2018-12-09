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

function DB() {}

const action = DB.prototype;

/*
 *
 *
 * */
action.createDB = function() {

  return new Promise(function(resolve, reject) {

    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {

      assert.equal(null, err);

      //let db = client.db(dbName);
      resolve(client);
    });
  });
};

/*
 *
 *
 * */
action.orderList = async function(coll, query, page = 1, pageSize = 10) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).sort({_id: 1}).skip((page - 1
    ) * pageSize).limit(pageSize).toArray(function(err, docs) {
      assert.equal(err, null);

      resolve(docs);
      client.close();
    });
  });
};

/*
 *
 *
 * */
action.orderDetail = async function(coll, query) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).sort({_id: 1}).limit(10).toArray(
        function(err, docs) {
          assert.equal(err, null);

          resolve(docs);
          client.close();
        });
  });
};

/*
 *
 *
 * */
action.findDocuments = async function(coll, query) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).toArray(function(err, docs) {
      assert.equal(err, null);

      resolve(docs);
      client.close();
    });
  });

};

/*
 *
 *
 * */
action.search = async function(coll, query, page = 1, pageSize = 10) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).sort({CreateDate: 1}).skip((page - 1
    ) * pageSize).limit(pageSize - 0).toArray(function(err, docs) {
      assert.equal(err, null);

      resolve(docs);
      client.close();
    });
  });
};

/**
 *
 * @param db
 * @param coll
 * @param query
 * @param page
 * @param pageSize
 * @returns {Promise}
 */
action.searchAll = async function(coll, query) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.find(query).sort({CreateDate: 1}).limit(500).toArray(function(err, docs) {
      assert.equal(err, null);

      resolve(docs);
      client.close();
    });
  });
};

/*
 *
 *
 * */
action.searchCount = async function(coll, query) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    resolve(collection.find(query).sort({CreateDate: 1}).count());
    client.close();
  });
};

/*
 *聚合
 *
 * */
action.composite = async function(coll, query) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.aggregate(query).toArray(function(err, docs) {
      assert.equal(err, null);

      resolve(docs);
      client.close();
    });


  });
};

/*
 *
 *
 * */
action.updateDocument = async function(coll, query, obj) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    collection.updateOne(query, obj,
        function(err, result) {
          assert.equal(err, null);
          assert.equal(1, result.result.n);

          resolve(result.result);
          client.close();
        },
    );
  });

};

/*
 * add user
 *
 * */
action.add = async function(coll, data) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    // Find some documents
    collection.insert(data, function(err, docs) {
      assert.equal(err, null);

      resolve(docs.result);
      client.close();
    });
  });
};

/*
 * update user
 *
 * */
action.update = async function(coll, query, obj) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    collection.updateOne(query, {$set: obj}, function(err, result) {
      assert.equal(err, null);
      //assert.equal(1, result.result.n);
      console.log('Updated the document with the field a equal to 2');
      resolve(result);
      client.close();
    });
  });
};

/*
 * delete
 *
 * */
action.remove = async function(coll, query, obj) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    collection.remove(query, function(err, result) {
      assert.equal(err, null);

      console.log('Updated the document with the field a equal to 2');
      resolve(result);
      client.close();
    });
  });
};

/*
 * count
 *
 * */
action.getCount = async function(coll, query, obj) {

  let client = await this.createDB();
  let db     = client.db(dbName);

  return new Promise(function(resolve, reject) {

    // Get the documents collection
    let collection = db.collection(coll);

    resolve(collection.find(query).count());
    client.close();
  });
};

module.exports = new DB();


