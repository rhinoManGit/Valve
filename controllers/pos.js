/*
 *
 * 这个是每打开一个窗口的调用
 ** //Api/GetGoodsZT.ashx
 * 地址
 http://58.213.118.119:888//Api/GetGoodsZT.ashx?content=T7vwmaOtkwBt2LdAcP8TtkbbJgzxAGKjiIiD350oTW6KyU7/keo42JVMY2Vlk2WYPjea4zaHVdpzIkSNTzRqUB4pqj8JoZc7Go4LLtpRbPIvkHcJY6p0XL6BWvvvmADSNtoQGBsypiJqhb/sCjUvRDeX6JeRjBrtbmGtpmFnZtN6hyP4bs6fZW+8MhsgBDdJI+JKnvAMBOpKAyOAZBInyw==
 *
 * 参数
 {
 "SELLER_ID":"6f813d9a-621e-4b6f-847e-174918077049",
 "GoodsSN":"100160",
 "SHState":0,
 "SHSJ":"/Date(1533375760850+0800)/",
 "ISTC":1,
 "SHResult":""
 }
 上传数据
 content=IL47S3VHuxhEKdrZ5iA5NIvRMMzfYXa23gQnrMz+2amOR59k33ggeWKnVNIkQl1ntDBb8vI9a3vMUrPKuVZwflnyTS8YU7q2utF1XsxhAl6vvMpR+Dgjvpllqd9FG4tBH/NRX/vUaIVl2jB03V6nIudJiUyvm89yIrOcUsgrOfwbL4UQeLkAcY94PYzTf+F0Y2LIiY6+aTCM9M7vugAW/+E7cUvTD4hNgpUGK4Is6A2mTZZGKDQIOEXpcVcakbkAMZ6mqCUR9gYy47KxjJaUaXt7mDHh3VGtZAaB2K+NTkFqzQkeeotY/zovO0lJBAFbidFbHoCY5kColCtVq0EwUMgowHzrV34bWqIU9TMQqdrzqY4Q7sYvG2lSauOzVdhFnxAsTMVgbaTorGTIFLE1ptmMa3CbKoQT+XRAtkBrm0PL5LF59KSYh5RwbGDh2psYaLHlXaXc2470v6ORf6eukPhbw2zxa0BMOMo1nyBZesccZcbHJZVXaQ4shOvgcFZ1G6DH8qod+NN9bj6L+yy0xy8TGb1WoIug8YxzGRKlt4suQDREe89wHNlXYX5b+luKle0T3jk+eWrxpbgxHa9vS0w3Zd0VbiYcqCTYRthqzbpvpcAfdr1Lscs6HoKxtUgxZPDBVBjxK4UjPUq2lVJXKy50RHto60Sv3VMHDIN4xG0mdJw+sx1WubLIw8SiTeEHPIe2qQ5iq5smvA2E8PiDmD2KQ4+hDth8UXvwSk0rAi0gqvjvuYkl8bTRujpGO3ISyzHdeSgSvXm/jbfNU6kgUrfssQiq80XhDrdcMMZ+aJWyfuDxuFEUOAJFAKN3+qzFhXcRAjFyG2Yu6hmD76dga7k9RPSmNGvEyQlFrofiVtaoUujH/vk0VmPKYSgAKlWnL3+yPtP6TqE+s/Tx2dyUvh2MPbKgNwlTd/eyhvhG3RJmEoNzkFj2Fwne1oHaLE1JIF74KeyYq5wt+PpQsZAPAw==

 content=IL47S3VHuxhEKdrZ5iA5NIvRMMzfYXa23gQnrMz+2amOR59k33ggeWKnVNIkQl1ntDBb8vI9a3vMUrPKuVZwflnyTS8YU7q2utF1XsxhAl6vvMpR+Dgjvpllqd9FG4tBH/NRX/vUaIVl2jB03V6nIudJiUyvm89yIrOcUsgrOfwbL4UQeLkAcY94PYzTf+F0Y2LIiY6+aTCM9M7vugAW/+E7cUvTD4hNgpUGK4Is6A2mTZZGKDQIOEXpcVcakbkAMZ6mqCUR9gYy47KxjJaUaXt7mDHh3VGtZAaB2K+NTkFqzQkeeotY/zovO0lJBAFbidFbHoCY5kColCtVq0EwUMgowHzrV34bWqIU9TMQqdrzqY4Q7sYvG2lSauOzVdhFnxAsTMVgbaTorGTIFLE1ptmMa3CbKoQT+XRAtkBrm0PL5LF59KSYh5RwbGDh2psYaLHlXaXc2470v6ORf6eukPhbw2zxa0BMOMo1nyBZesccZcbHJZVXaQ4shOvgcFZ1G6DH8qod+NN9bj6L+yy0xy8TGb1WoIug8YxzGRKlt4suQDREe89wHNlXYX5b+luKle0T3jk+eWrxpbgxHa9vS0w3Zd0VbiYcqCTYRthqzbpvpcAfdr1Lscs6HoKxtUgxZPDBVBjxK4UjPUq2lVJXKy50RHto60Sv3VMHDIN4xG0mdJw+sx1WubLIw8SiTeEHPIe2qQ5iq5smvA2E8PiDmD2KQ4+hDth8UXvwSk0rAi0gqvjvuYkl8bTRujpGO3ISyzHdeSgSvXm/jbfNU6kgUrfssQiq80XhDrdcMMZ+aJWyfuDxuFEUOAJFAKN3+qzFhXcRAjFyG2Yu6hmD76dga7k9RPSmNGvEyQlFrofiVtaoUujH/vk0VmPKYSgAKlWnL3+yPtP6TqE+s/Tx2dyUvh2MPbKgNwlTd/eyhvhG3RJmEoNzkFj2Fwne1oHaLE1JIF74KeyYq5wt+PpQsZAPAw==

 **参数
 {
 "LocalIP":"00:E0:B4:50:DC:4E",
 "SELLER_ID":"6f813d9a-621e-4b6f-847e-174918077049",
 "SELLER_NAME":"世纪华联",
 "CREATE_TIME":"/Date(1539077258959+0800)/",
 "OperType":"add",
 "ChangeContent":"{"FLOWID":"044b7e65-2580-4c87-9e60-35ff1761fac4","LINE_NO":1,"FLOW_NO":"00120181009172650","STOCK_NO":"01","POS_NO":"001","GOODS_NO":"09002 ","SOURCE_PRICE":20.00,"SALE_PRICE":20.00,"SALE_NUM":1.00,"SALE_TOTAL_PRICE":20.00,"SALE_WAY":"销售","OPER_NO":"1992","OPER_ID":"d547a205-62f0-4aef-8bc0-7adf42d1a24a","OPER_FULLNAME":"收银员","OPER_TIME":"2018-10-09 17:27:03","SALE_MANCODE":"","SALE_MAN":"","REMARK":"槟榔","AUTOID":148093}",
 "TableName":"POS_SALEFLOW"
 }
 ***res:
 SUCC
 * */
const express       = require('express');
const request       = require('request');
const crypto        = require('crypto');
const child_process = require('child_process');

const config = require('./../config').config();
const dao    = require('./../dao');
const redis  = require('./../tools/redis');

const _ID       = 'intercept_321_20180910';
const KEY_REDIS = 'intercept_rate_stack';

let key = [
  78,
  82,
  67,
  99,
  52,
  42,
  104,
  103,
  55,
  33,
  38,
  35,
  101,
  114,
  71,
  106,
  107,
  35,
  74,
  71,
  70,
  58,
  77,
  40,
  76,
  71,
  68,
  83,
  63,
  64,
  80,
  56,
];
let iv  = [
  106,
  104,
  87,
  107,
  55,
  40,
  42,
  40,
  117,
  37,
  69,
  52,
  103,
  104,
  106,
  40,
];

var decrypt = function(key, iv, crypted) {
  crypted      = new Buffer(crypted, 'base64').toString('binary');
  var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  var decoded  = decipher.update(crypted, 'binary', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
};

/**
 * 通过流水ID来查询是否已拦截，通过流水号来控制拦截与否，删除数据也是通过流水号
 * @param req
 * @param res
 * @param next
 * @returns {Promise.<void>}
 */
module.exports = async function(req, res, next) {

  let fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  /*
   *
   * method: GET, 不做处理
   *
   * */
  if (req.method.toLocaleLowerCase() === 'get') {
    req.pipe(request(fullUrl)).pipe(res);
    return;
  }

  /*
   * 非上传数据不做处理
   *
   * */
  if (!/Api\/DataUp\.ashx/.test(req.originalUrl) &&
      !/Api\/DataUp_New\.ashx/.test(req.originalUrl)) {
    req.pipe(request.post(fullUrl)).pipe(res);
    return;
  }

  /*
   *  先获取比例：
   *  第一步判断这个_id: SELLER_ID，这个数据在数据库中是否已经存在，不存在就做处理，存在直接拦截返回succ
   *  如果库里面不存在，
   *  判断redis中的拦截比例，进行更新
   *  然后写入数据库
   * */

  try {
    let rate   = 0,
        status = '1';

    // 获取比例
    let result = await dao.findRate({_id: _ID});

    if (result.length) {
      rate = result[0].Value / 10;
    }

    // 解密
    let param   = '';
    let content = req.query.content;
    /*'IL47S3VHuxhEKdrZ5iA5NIvRMMzfYXa23gQnrMz+2amOR59k33ggeWKnVNIkQl1ntDBb8vI9a3vMUrPKuVZwflnyTS8YU7q2utF1XsxhAl6vvMpR+Dgjvpllqd9FG4tBH/NRX/vUaIVl2jB03V6nIudJiUyvm89yIrOcUsgrOfyVpW3eVKQZEv44corsX4GTzfG0TzW79kkKMeqrlRdHPKSG7vmCbGj0D/tF302hKe/h3PZVv5jPkFk8kYr7hQv6oy/RUwJNXWMW3L5ZO0ufJphrnN126sPdQaC65dXJ93CUuIHszTphOjMJXC4o2e8iaazdZSYx9WZ9RReX1MKMlYVwQmcUi1scE/NZU9h76e5zz8Ns6FLBKZ4nS4YvHyk2sMl+oHQ8FQFlwcgzNpfsiSMylZwlI57O4krcXcTwoUJ6KA/wxpvXPaLJDNvX+JUzDNy6KaRDIXwvxVLXvvWN7kPFftIBmdY1UOw/A1vDjxmCGb1OXynWNenTm3VaG9a9xcNXI0GamMXkxpSlkjWHH0vo81L38aD1cCJ8XMZWuCeRKYXg923N022f9M/4iYMJ431iauHDs/VSoOO0EnsZsoW+Kp//9rcSo+6bCo350KkG61lWR3ru5qCelFBV6n3KD7XUtm2eLVsYztZO/WHtTefr9A85E0HDTd7JJ19gz9DPaTGp8ChCYyMdftkpMTxioqq74XcYsT2XINZD9OwMrE87E71MofTr5ND6wl+p2hskaE4mI3B/YdjYmiYVg1KDg8k7rivLlJNm4YiJ2V+KnpVb3D5AUlP/ap5iYVD36NkFQKDHD2f4JKPvDd1HLkdZdZOZhPqMfzgBbot1qviKPt1v73a8aWktPSmIR7rMuMjV3Jgm7HylYdcJIbBThQkmV7vl8xfz1gqxkL0VI4GR6XbK66zHAkTnGmbcstjPzsL88wwnnsgvz6qOZe28Kv1YwleEjjhWKY2DUevPk3l56S4+WlxArY2TH0L+Y7w8HBo='*/
    /* || 'IL47S3VHuxhEKdrZ5iA5NIvRMMzfYXa23gQnrMz+2amOR59k33ggeWKnVNIkQl1ntDBb8vI9a3vMUrPKuVZwflnyTS8YU7q2utF1XsxhAl6vvMpR+Dgjvpllqd9FG4tBH/NRX/vUaIVl2jB03V6nIudJiUyvm89yIrOcUsgrOfx4qPci3oq2ePeCoMltKp0VA8j0hThoR5rB/1DGuClCEgUMBIyX/JYIk+M2krkcbBzZbVsOSJHWbb4IuFI9Ag1gf6TpS2/bhGmA3px/G6xCUmVQzQ8bnQCHlWXVngz6RihQolHtFlDeHOjuwPgk107THUYth4u8LX9Uz7QLK1jz0KOi8h07hZXun29bXRJ0RLAm8TrHxL/vurTVq0DS+p1W7vJFBpGWzIx+w6CYIHPQs3JRaEMzbd0KICcwpDtErerzHbC6j/H25poMncH+JelUa8yyehQYuKoYz1qegHzzOQRAf6YcVSIbJDkE3d3JkiJgz60AuMQDsfZSpHNhQHkL/Tc8gkoGah+mhXmKaMaZIOCpQOoREiAKJoPbkDrHNCItd6niVu3RgeDav/rld2VzimNuEjj/RxPy77AtLFWfToiAHEfKpqzMagK+w2guCABgKEt648BSBDPGBtkLlC+gmecD+KokFm+DHbtAg+ZcpMRWlbmLHLgmdImQ4zoUZWBg/6F2To/7FXVkp4JXVYGuX3hIdQqo3ASIlPqftbL7yMZutcZklPfaYlJeclqCbooeJ9DFSvLKdm242pCwJ1h8UUVdGHbFsF7PzeFbY97AGNfN1Ao5jKnGz4H+DXZQIx8tpaVNtV+DuOp44Pwat1Nbd1WjtwBEWpq9A4B7f+DPtXAVhx9mo+Is3UuUJ63RpDjA8xx7ccb5+edY9oG2xFeanlz6hchOUxs2Jd2FnG5HXk8PgJ8z/NX4GrGHnJRnHIrMoDI1vJ3lwsFXiVW7XWMuQ5RtJnnOG2ir+qnoijU6ArBabxHhviTcfuULkuU3CmPyj7TjSrW6osNS87sYfPK' || req.query.content;*/

    content = content.replace(/\s/g, '+');//replace(/*/\s+/g*/' ', "+");

    let k = new Buffer(key);
    let v = new Buffer(iv);

    /*
     *
     * core: 拦截逻辑
     *
     * */

    let sObj = decrypt(k, v, content);
    let obj  = JSON.parse(sObj);

    param = obj;

    param['ChangeContent'] = JSON.parse(param.ChangeContent || '{}');

    /**
     * 第一次通过flowID来查询是否一个商品有记录过
     */
    let ID    = param.ChangeContent.FLOWID;
    let query = {
      $or: [{_id: ID}, {'ChangeContent.FLOWID': ID}],
    };

    //查询数据库
    let dbHas = await dao.searchList(query, 1);

    if (dbHas.length) {
      console.log('.............【数据库中存在（不处理）】..............', new Date);
      res.setHeader('Content-Type', 'text/html');
      res.send('SUCC');
      return;
    }
    else {

      /**
       * 第二次 通过流水号来查询，对于同一次付款的商品保证全部拦截或者不拦截
       * 支付流水ID查询，因为一次支付对应一个流水ID，
       * 可能包含好几件商品，要保证每一件一起拦截，或者不拦截
       */
      let FLOW_NO = param.ChangeContent.FLOW_NO;
      let fQuery  = {'ChangeContent.FLOW_NO': FLOW_NO};

      //查询数据库
      let fHas = await dao.searchList(fQuery, 1);

      if (fHas.length) {

        let fStatus = fHas[0]['Status'];

        param['Status']     = fStatus;
        param['_id']        = ID;
        param['upDataTime'] = new Date(param.ChangeContent.OPER_TIME);
        param['orderTime']  = new Date(param.ChangeContent.OPER_TIME);

        // 写入数据
        await dao.insertList(param);

        if (fStatus - 0 === 1) {
          console.log('............拦截');
          res.setHeader('Content-Type', 'text/html');
          res.send('SUCC');
          return;
        }
        else {
          console.log('............不拦截');
          // 不拦截
          let _host  = '58.213.118.119:888';
          let oriUrl = `${req.protocol}://${_host}${req.originalUrl}`;

          req.pipe(request.post(oriUrl)).pipe(res);
          return;
        }
      }

      //
      // 查询redis, ['']
      let cell  = await redis.get(KEY_REDIS);
      let index = 0;

      if (!cell) {
        await redis.set(KEY_REDIS, JSON.stringify([ID]));
        index = 1;
      }
      else {

        let arr = JSON.parse(cell);

        if (arr.length < 10) {
          index = arr.push(ID);
          await redis.set(KEY_REDIS, JSON.stringify(arr));
        }
        else {
          await redis.set(KEY_REDIS, JSON.stringify([ID]));
          index = 1;
        }
      }

      // 写入数据库 '1': '拦截', '2': '不拦截'
      if (index < rate || index - 0 === rate - 0) {
        status = '1';
      }
      else {
        status = '2';
      }

      param['Status']     = status;
      param['_id']        = ID;
      param['upDataTime'] = new Date(param.ChangeContent.OPER_TIME);
      param['orderTime']  = new Date(param.ChangeContent.OPER_TIME);

      // 写入数据
      await dao.insertList(param);

      if (status - 0 === 1) {
        res.setHeader('Content-Type', 'text/html');
        res.send('SUCC');
        return;
      }
      else {
        // 不拦截
        let _host  = '58.213.118.119:888';
        let oriUrl = `${req.protocol}://${_host}${req.originalUrl}`;

        req.pipe(request.post(oriUrl)).pipe(res);
        return;
      }
    }

  }
  catch (e) {
    console.log(`解密失败.............不拦截msg: ${e.message}, stack: ${e.stack}`);
    req.pipe(request.post(fullUrl)).pipe(res);
    return;
  }
};
