/**
 * Created by Administrator on 2017/9/18 0018.
 */
const dao = require('./../dao');

function Index() {}

const Action = Index.prototype;

Action.index = function(req, res, next) {

  res.render('index', {});
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
Action.login = function(req, res, next) {
  res.render('logining', {});
};

/**
 * 打印小票
 */
Action.ticket = function(req, res, next) {

  if(!req.session.user){
    res.writeHead(302, {
      'Location': '/index/login'
    });
    res.end();
    return;
  }

  res.render('ticket', {user: JSON.parse(req.session.user)});
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
Action.conf = function(req, res, next) {

  if(!req.session.user){
    res.writeHead(302, {
      'Location': '/index/login'
    });
    res.end();
    return;
  }

  res.render('conf', {user: JSON.parse(req.session.user)});
};

/**
 *
 * @param req
 * @param res
 * @param next
 */
Action.report = function(req, res, next) {

  if(!req.session.user){
    res.writeHead(302, {
      'Location': '/index/login'
    });
    res.end();
    return;
  }
  res.render('report', {user: JSON.parse(req.session.user)});

};

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
Action.signin = async function(req, res, next) {

  var userName = req.body.username;
  var password = req.body.password;

  if(!userName || !password){
    res.json({err:'illegal parameter', list: [], msg: '用户名和密码为必填参数.'});
    return;
  }

  let _query = {
    UserName: userName,
    Password: password
  }
  let result = await dao.login(_query, req.query.page);

  if(!result.length){
    res.json({err:'illegal user', list: [], msg: '用户不存在.'});
    return;
  }

  req.session.user = JSON.stringify(result[0]);

  res.json({err:'', list: result, msg: ''});
};

module.exports = new Index();