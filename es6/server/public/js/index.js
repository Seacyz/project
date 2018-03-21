/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//function test(){
//	let b=1;
//	console.log(b);
//}
//test();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//function test(){
//	let a=2;
//	console.log(a);
//}
//test();
//var a = 1;
//// 如果在 Node 的 REPL 环境，可以写成 global.a
//// 或者采用通用方法，写成 this.a
//console.log(a);
//
//let b = 2;
//console.log(b);
//解构赋值
//let [a, b, c] = [1, 2, 3];
//console.log(a);
//let [head, ...tail] = [1, 2, 3, 4];
//console.log(tail);
//let [foo] = 1;
//console.log(foo);
//let [foo] = false;
//let [foo] = NaN;
//let [foo] = undefined;
//let [foo] = null;
//let [foo] = {};
//let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
//console.log(y);
//let { bar, foo } = { foo: "aaa", bar: "bbb" };
//console.log(foo);

//let [a, b, c] = [1, 2, 3];
//let [x, y = 'b'] = ['a'];
//let [x1,y1='b']=['a','c'];
//let [x2, y2 = 'b'] = ['a', undefined];
//let [x3, y3= 'b',z='c'] = ['a','d'];
//let [x4, y4] = [1, 2, 3];
//let [a1, [b1], d1] = [1, [2, 3], 4];
//function f() {
//console.log('aaa');
//}
//
//let [x5 = f()] = [1];
//let [x6 = 1, y6 = x6] = [];  
//let [x7 = y7, y7 = 1] = []; 

var _foo$bar = { foo: "aaa", bar: "bbb" },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;
var _foo1$bar = { foo1: 'aaa', bar1: 'bbb' },
    baz = _foo1$bar.foo1;
var _foo2$bar = { foo2: 'aaa', bar2: 'bbb' },
    foo2 = _foo2$bar.foo2,
    baz1 = _foo2$bar.foo2;

console.log(foo1); //undefined
console.log(foo2); //aaa

/***/ })
/******/ ]);