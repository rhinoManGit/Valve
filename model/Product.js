/**
 * Created by Administrator on 2017/9/20 0020.
 * {
      'LocalIP'      : '00:E0:B4:50:DC:4E',
      'SELLER_ID'    : '6f813d9a-621e-4b6f-847e-174918077049',
      'SELLER_NAME'  : '世纪华联',
      'CREATE_TIME'  : '/Date(1539077258959+0800)/',
      'OperType'     : 'add',
      'Status'       : '1',
      'ChangeContent': {
    'FLOWID'          : '044b7e65-2580-4c87-9e60-35ff1761fac4',
        'LINE_NO'         : 1,
        'FLOW_NO'         : '00120181009172650',
        'STOCK_NO'        : '01',
        'POS_NO'          : '001',
        'GOODS_NO'        : '09002 ',
        'SOURCE_PRICE'    : 20,
        'SALE_PRICE'      : 20,
        'SALE_NUM'        : 1,
        'SALE_TOTAL_PRICE': 20,
        'SALE_WAY'        : '销售',
        'OPER_NO'         : '1992',
        'OPER_ID'         : 'd547a205-62f0-4aef-8bc0-7adf42d1a24a',
        'OPER_FULLNAME'   : '收银员',
        'OPER_TIME'       : '2018-10-09 17:27:03',
        'SALE_MANCODE'    : '',
        'SALE_MAN'        : '',
        'REMARK'          : '槟榔',
        'AUTOID'          : 148093,
  },
    'TableName'    : 'POS_SALEFLOW',
  }
 *
 *
 */

function Product(obj) {

  let TPL = {
    '1': '已拦截',
    '2': '未拦截',
  };

  let _cell             = obj.ChangeContent;
  let d                 = new Date(obj.orderTime);

  // 超市IP
  this['LocalIP']       = obj.LocalIP || '';
  // 超市名称
  this['marketName']    = obj.SELLER_NAME || '';
  // OperType
  this['OperType']      = obj.OperType || '';
  // 商品名称
  this['name']          = _cell.REMARK || '';
  // 销售
  this['OPER_FULLNAME'] = _cell.OPER_FULLNAME || '';
  // 出售方式
  this['SALE_WAY']      = _cell.SALE_WAY || '';
  // 流水号
  this['FLOW_NO']       = _cell.FLOW_NO || '';
  // 操作码
  this['OPER_NO']       = _cell.OPER_NO || '';
  // POS编号
  this['POS_NO']        = _cell.POS_NO || '';
  // 仓库编号
  this['STOCK_NO']      = _cell.STOCK_NO || '';
  // 商品编号
  this['GOODS_NO']      = _cell.GOODS_NO || '';
  // 出售价格
  this['SALE_PRICE']    = _cell.SALE_PRICE || '';
  // 出售数量
  this['SALE_NUM']      = _cell.SALE_NUM || '';
  // 拦截状态
  this['status']        = TPL[obj.Status] || '';

  this['orderTime'] = d.getFullYear() + '年' + (d.getMonth() + 1
      )
      + '月' + d.getDate() + ' ' + d.getHours() + '时' + d.getMinutes() + '分' +
      d.getSeconds() + '秒';
}

module.exports = Product;

