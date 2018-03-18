/******/
(function(modules) { // webpackBootstrap
	/******/ // The module cache
	/******/
	var installedModules = {};
	/******/
	/******/ // The require function
	/******/
	function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/
		if(installedModules[moduleId]) {
			/******/
			return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/
		var module = installedModules[moduleId] = {
			/******/
			i: moduleId,
			/******/
			l: false,
			/******/
			exports: {}
			/******/
		};
		/******/
		/******/ // Execute the module function
		/******/
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/
		module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/
		return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/
	__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/
	__webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/
	__webpack_require__.d = function(exports, name, getter) {
		/******/
		if(!__webpack_require__.o(exports, name)) {
			/******/
			Object.defineProperty(exports, name, {
				/******/
				configurable: false,
				/******/
				enumerable: true,
				/******/
				get: getter
				/******/
			});
			/******/
		}
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/
	__webpack_require__.n = function(module) {
		/******/
		var getter = module && module.__esModule ?
			/******/
			function getDefault() {
				return module['default'];
			} :
			/******/
			function getModuleExports() {
				return module;
			};
		/******/
		__webpack_require__.d(getter, 'a', getter);
		/******/
		return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/
	__webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/
	__webpack_require__.p = "";
	/******/
	/******/ // Load entry module and return exports
	/******/
	return __webpack_require__(__webpack_require__.s = 0);
	/******/
})
/************************************************************************/
/******/
([
	/* 0 */
	/***/
	(function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);

		/***/
	}),
	/* 1 */
	/***/
	(function(module, exports, __webpack_require__) {

		"use strict";

		__webpack_require__(2);

		/***/
	}),
	/* 2 */
	/***/
	(function(module, exports, __webpack_require__) {

		"use strict";

		var _slicedToArray = function() {
			function sliceIterator(arr, i) {
				var _arr = [];
				var _n = true;
				var _d = false;
				var _e = undefined;
				try {
					for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
						_arr.push(_s.value);
						if(i && _arr.length === i) break;
					}
				} catch(err) {
					_d = true;
					_e = err;
				} finally {
					try {
						if(!_n && _i["return"]) _i["return"]();
					} finally {
						if(_d) throw _e;
					}
				}
				return _arr;
			}
			return function(arr, i) {
				if(Array.isArray(arr)) {
					return arr;
				} else if(Symbol.iterator in Object(arr)) {
					return sliceIterator(arr, i);
				} else {
					throw new TypeError("Invalid attempt to destructure non-iterable instance");
				}
			};
		}();

		//function text(){
		//	let a=2;
		//	console.log(a);
		//}
		//text();
		var _foo$bar = {
				foo: "aaa",
				bar: "bbb"
			},
			foo = _foo$bar.foo,
			bar = _foo$bar.bar;
		//let {foo1: {bar1}} = {baz: 'baz'};
		//console.log(bar1);//Uncaught TypeError: Cannot read property 'bar1' of undefined

		var _foo2$bar = {
				foo2: 'aaa',
				bar2: 'bbb'
			},
			baz = _foo2$bar.foo2;

		var obj = {
			p: ['Hello', {
				y: 'World'
			}, 'world']
		};

		var p = obj.p,
			_obj$p = _slicedToArray(obj.p, 3),
			x = _obj$p[0],
			y = _obj$p[1].y,
			z = _obj$p[2];

		var obj3 = {};
		var arr3 = [1, 2];

		var _foo3$bar = {
			foo3: 123,
			bar3: true
		};
		obj3.prop = _foo3$bar.foo3;
		arr3[0] = _foo3$bar.bar3;

		console.log(obj3); //Object {prop: 123} 
		console.log(arr3.toString()); //true,2 

		var _x = {
				x1: 5
			},
			_x$x = _x.x1,
			y1 = _x$x === undefined ? 3 : _x$x;

		var x2 = void 0;

		//
		var _x2 = {
			x2: 1
		};
		x2 = _x2.x2;
		var arr = [1, 2, 3];
		var first = arr[0],
			last = arr[arr.length - 1];
		//

		var _hello = 'hello',
			_hello2 = _slicedToArray(_hello, 5),
			a = _hello2[0],
			b = _hello2[1],
			c = _hello2[2],
			d = _hello2[3],
			e = _hello2[4];

		console.log(a);

		var _hello3 = 'hello',
			len = _hello3.length; //len=5

		var _ = 123,
			s1 = _.toString;

		if(s1 === Number.prototype.toString) {
			console.log(1);
		}
		//let { prop: x } = undefined;

		/***/
	})
	/******/
]);