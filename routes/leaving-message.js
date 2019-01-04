
var express = require('express');
var router = express.Router();   //可使用 express.Router 类创建模块化、可挂载的路由句柄
var mysqlServer = require('../public/mysql-server.js');



// http://localhost:3001/admin/goods
router.get('/list',function(req,res){
    mysqlServer.getData('leaving_message', (suc) => {
        res.send({code: 200, message: '成功', data: suc});
        res.end();
    }, (err) => {
        res.send({code: 500, message: '数据获取错误', data: err});
        res.end();
    });
});
 
router.post('/add_leaving_message',function(req,res){
    const obj = req.body;
    mysqlServer.addData('leaving_message', obj, (suc) => {
        res.send({code: 200, message: '成功', data: suc});
        res.end();
    }, (err) => {
        res.send({code: 500, message: '数据获取错误', data: err});
        res.end();
    });
});
 
router.get('/updata_leaving_message',function(req,res){
    res.send('留言列表 修改');
});
 
router.delete('/delete_leaving_message',function(req,res){
    res.send('留言列表 删除');
});


module.exports = router;