var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '45.76.195.155',
    user     : 'root',
    password : '123456',
    database : 'personalblog'
  });
  connection.connect();

const getData = (tableName, sucCallback, errCallback) => {
    var  sql = `SELECT * FROM ${tableName}`;
    connection.query(sql, function(err, result) {
        if (err) {
         errCallback(err);
         return;
        };
        sucCallback(result);
    })
};
const addData = (tableName, obj, sucCallback, errCallback) => {
    var objData = [];
    for(var i in obj) {
        objData.push(obj[i])
   }
    var  addSql = `INSERT INTO ${tableName}(headPortrait,name,creationTime,content) VALUES(?,?,?,?)`;
    connection.query(addSql, objData, function(err, result) {
        if (err) {
         errCallback(err);
         return;
        };
        sucCallback(result);
    })
};

const updataImg = (tableName, imgurl, ID, sucCallback, errCallback) => {
    var modSql = `UPDATE ${tableName} SET imgurl = ? WHERE Id = ?`;
    var modSqlParams = [imgurl, ID];
    connection.query(modSql,modSqlParams,function (err, result) {
       if(err){
            errCallback(err);
            return;
        };
        sucCallback(result)
    });
};



const delData = () => {
};
module.exports = {
    getData: getData,
    delData: delData,
    addData: addData,
    updataImg: updataImg
};