/**
 * Created by gogeek on 2017/6/3.
 */
//导入用到的模块
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
//const router = express.Router();

const album = require('./routers/album.js');
//console.log(album);
//配置模板
//参数1:定义文件夹 参数2:定义要使用的实例
nunjucks.configure('views', {express: app});

//配置静态路由
app.use(express.static('public'));


//设置重定向     //  1
app.get('/', function (req, res) {
    res.redirect('/all');
    // nunjucks.render('base.njk','views/base.njk')
    // res.end()
});

//监听所有的请求   //2
app.use('/', album);

//监听端口
app.listen(80, '127.0.0.1', function () {
    console.log('runing.....');
});