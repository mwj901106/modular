(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');
},{"./module1":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
