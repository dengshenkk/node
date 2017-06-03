/**
 * Created by gogeek on 2017/6/3.
 */

const fs = require('fs');
const path = require('path');


//读取文件      5
function getAllDir(callback) {


    const albumPath = path.join(__dirname, '..', 'albums');
    //console.log(albumPath);
    // 读取文件     6
    fs.readdir(albumPath, function (err, files) {
        //console.log(files);
        var filesArr = []
        for (let i = 0; i < files.length; i++) {
            let path1 = path.join(albumPath, '/', files[i])
            if (fs.statSync(path1).isDirectory()) {
                filesArr.push(files[i])
            }
        }
        callback(filesArr)
    })

}

module.exports = {getAllDir}