var express = require('express');
var router = express.Router();
var mysqlServer = require('../public/mysql-server.js');
var multer = require("multer");  //处理上传文件
var fs = require('fs');
var marked = require('marked');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/doc');    
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);  
    }
});
// var upload = multer({dest:'./public/doc'})
var upload = multer({storage: storage})


router.get("/article_details",function(req,res){
    const id = req.query['id'];
    mysqlServer.getArticleDetailsData('article', id, (url) => {
        fs.readFile(__dirname + url[0].content, function(err, data){
            if(err){
                console.log("文件不存在！");
                res.send("文件不存在！");
            }else{
                // htmlStr = marked(data.toString()); 这是转markdown文件
                res.send({code: 200, message: '成功', data: data.toString()});
                res.end();
            }
        });
    }, (err) => {
        res.send({code: 500, message: '数据获取错误', data: err});
        res.end();
    });
});


router.post("/addMd", upload.single('file'),(req, res) => {
    const obj = req.body;
    // res.send('../public/doc/' + req.file.originalname)
    const contentUrl = '/../public/doc/' + req.file.originalname;
    mysqlServer.addMd('article', contentUrl, obj.id, (suc) => {
        res.send({code: 200, message: '成功', data: suc});
        res.end();
    }, (err) => {
        res.send({code: 500, message: '数据获取错误', data: err});
        res.end();
    });
})
// router.post('/addMd',function(req,res){
//     const obj = req.body;
//     // mysqlServer.addMd('article', obj.imgUrl, obj.id, (suc) => {
//     //     res.send({code: 200, message: '成功', data: suc});
//     //     res.end();
//     // }, (err) => {
//     //     res.send({code: 500, message: '数据获取错误', data: err});
//     //     res.end();
//     // });
// });
module.exports = router;