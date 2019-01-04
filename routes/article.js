var express = require('express');
var router = express.Router();
var formidable = require('formidable');
const path = require('path');
var fs = require('fs');
var mysqlServer = require('../public/mysql-server.js');

router.get('/article_list',function(req,res){
    mysqlServer.getData('article', (suc) => {
        res.send({code: 200, message: '成功', data: suc});
        res.end();
    }, (err) => {
        res.send({code: 500, message: '数据获取错误', data: err});
        res.end();
    });
});
router.put('/updataImg',function(req,res){
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname + "/../page/upload");
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    
    // 处理图片
    form.parse(req, function (err, fields, files){
        // var filename = files.the_file.name
        // var nameArray = filename.split('.');
        // var type = nameArray[nameArray.length - 1];
        // var name = '';
        // for (var i = 0; i < nameArray.length - 1; i++) {
        //     name = name + nameArray[i];
        // }
        // var date = new Date();
        // var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
        // var avatarName = name + time + '.' + type;
        // var newPath = form.uploadDir + "/" + avatarName;
        // fs.renameSync(files.the_file.path, newPath);  //重命名
        // res.send({data:"/upload/"+avatarName})
    })





    // mysqlServer.updataImg('article', (suc) => {
    //     res.send({code: 200, message: '成功', data: suc});
    //     res.end();
    // }, (err) => {
    //     res.send({code: 500, message: '数据获取错误', data: err});
    //     res.end();
    // });
});

module.exports = router;