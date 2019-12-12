'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo1 = demo1;
exports.test1 = test1;
//分别暴露
var data = exports.data = 'ThankYouKris';
function demo1() {
    console.log('\u6211\u662Fmodule1\u91CC\u7684demo\u51FD\u6570', data.toUpperCase());
}
function test1() {
    console.log('\u6211\u662Fmodule1\u91CC\u7684test\u51FD\u6570', data.toLowerCase());
}