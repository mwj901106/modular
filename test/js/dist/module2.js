"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//统一暴露

var arr = [1, 3, 5, 7, 9];
function demo2() {
    console.log("\u6211\u662Fmodule2\u91CC\u7684demo2\u51FD\u6570");
}
function test2() {
    console.log("\u6211\u662Fmodule2\u91CC\u7684test2\u51FD\u6570");
}

exports.test2 = test2;
exports.demo2 = demo2;