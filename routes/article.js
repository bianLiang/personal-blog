var express = require('express');
var router = express.Router();
const path = require('path');
var fs = require('fs');
var mysqlServer = require('../public/mysql-server.js');

router.get('/article_list',function(req,res){
    var index = req.query['index'];
    mysqlServer.getArticleListData('article', index, (suc) => {
        res.send({code: 200, message: '成功', data: suc});
        res.end();
    }, (err) => {
        res.send({code: 500, message: '数据获取错误', data: err});
        res.end();
    });
});
router.post('/addImg',function(req,res){
    const obj = req.body;
    mysqlServer.addImg('article', obj.imgUrl, obj.id, (suc) => {
        res.send({code: 200, message: '成功', data: suc});
        res.end();
    }, (err) => {
        res.send({code: 500, message: '数据获取错误', data: err});
        res.end();
    });
});

module.exports = router;