const fs = require("fs");
const path = require('path');
const baseDir = path.join(__dirname, "../src/pages/");
let pages = process.argv.slice(2);
pages = pages.join('');
if (pages == "" || pages == null || pages == undefined) {
    console.log("请输入页面名称");
    return;
}
let hasPage = fs.existsSync(baseDir + pages);
if (hasPage == true) {
    console.log("该页面已经存在");
    return;
}
try {
    fs.mkdirSync(baseDir + pages);
    console.log(pages+'目录创建成功');
} catch (error) {
    console.log('创建目录失败',error);
}

try {
    fs.writeFileSync(baseDir + pages+"/index.html", "");
    console.log('index.html创建成功');
} catch (error) {
    console.log('创建index.html失败');
}
try {
    fs.writeFileSync(baseDir + pages+"/index.js", "");
    console.log('index.js创建成功');
} catch (error) {
    console.log('创建index.js失败');
}

try {
    fs.writeFileSync(baseDir + pages+"/index.scss", "");
    console.log('index.scss创建成功');
} catch (error) {
    console.log('创建index.scss失败');
}


