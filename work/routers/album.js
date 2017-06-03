/**
 * Created by gogeek on 2017/6/3.
 */
const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');


const fsTool = require('../model/fstool.js')
//  3

router.get('/all', function (req, res) {
    //  4调用了工具方法    使用了秘籍回调函数
    fsTool.getAllDir(function (arr) {
        res.render('index.njk', {'albumArr': arr})
    })

})
//如果是图片
router.get('/public/images/wjj.jpg', function (req, res) {
    const path1 = path.join(__dirname, '..', 'public', 'images', 'wjj.jpg')
    const img = fs.readFileSync(path1)
    res.send(img)
})

module.exports = router;