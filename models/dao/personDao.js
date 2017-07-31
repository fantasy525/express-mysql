var mysql = require('mysql');
var config = require('../config/config');

var utils=require('../utils/util');
var pool = mysql.createPool(config); //创建连接池提高性能

//获取连接池中的连接
function getCon(sql,res,data,callback) {
  console.log(sql)
  if(typeof data==='function'){
    data=[];
  }
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log('建立连接失败')
    } else {
      console.log('连接成功',sql,data)
      connection.query(sql,data, function (err, result) {
        if (err) {
          console.log('查询失败\n' + err.stack)
        } else {
          console.log(result)
          utils.jsonwrite(res, result)
        }
        connection.release();
       console.log(pool._allConnections.length);//0 
      })
    }
  })
}
module.exports={
  select:getCon
}
