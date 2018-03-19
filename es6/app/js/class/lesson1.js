//一、概念
//1.概念
//function test(){
//	let a=3;
//	console.log(a);
//}
////test();
//{
//	let b=10;
//	var c=1;
//}
//b
//c
//console.log(b);
//console.log(c);
//
//var a = [];
//for (var i = 0; i < 10; i++) {
//a[i] = function () {
//  console.log(i);
//};
//}
//a[6](); // 10
//注意lbabel的从新编译
//var a = [];
//for (let i = 0; i < 10; i++) {
//a[i] = function () {
//  console.log(i);
//};
//}
//a[6](); // 6

//2.不存在变量提升（这个转码没有报错）
//console.log(foo);
//var foo=2;
//console.log(bar);
//let bar=2;
//console.log(q);
//let q=2;

//3.暂行性死区（babel转码不会，会将里面的变量值重新赋值）
//var _tmp2 = 123;
//var _tmp = 123;
//
//if (true) {
//_tmp2 = 'abc'; // ReferenceError
//let _tmp2;
//}
//var tmp = 123;
//
//if (true) {
//tmp = 'abc'; // ReferenceError
//var tmp;
//}
//if (false) {
//// TDZ开始
//tmp = 'abc'; // ReferenceError
//console.log(tmp); // ReferenceError
//
//let tmp; // TDZ结束
//console.log(tmp); // undefined
//
//tmp = 123;
//console.log(tmp); // 123
//}
//3.1“暂时性死区”也意味着typeof不再是一个百分之百安全的操作	(babel转码可以)
//typeof x; // ReferenceError
//let x;
//typeof y; // ReferenceError
//var y;
//3.2有些“死区”比较隐蔽，不太容易发现(babel转码可以)
//function bar(x = y, y = 2) {
//return [x, y];
//}
//
//bar(); // 报错
// 不报错
//var x = x;
//
//// 报错
//let x = x;(babel转码可以)
// ReferenceError: x is not defined
//4.不允许重复声明,let不允许在相同作用域内，重复声明同一个变量
// 报错()
//var a = 1;
//function func() {
//let a = 10;
//console.log(a);
//}
//func();
//console.log(a);
//var a = 1;
//{
//let a = 10;
//console.log(a);
//}
//
//console.log(a)

//// 报错()
//function func() {
//let a = 10;
//let a = 1;
//}
//var a=1;
//{
//	var a=3;
//	let a=4;
//}
//console.log(a);

//{//不报错
//	let a = 1;
//	{
//		var a=1;
//		let a = 10;
//	}
//	
//}

//	let a = 1;//报错
//	{
//		var a=1;
//		let a = 10;
//	}
//	报错
//var a=1;
//let a=1;
//{ //不报错
//	var a=1;
//	let a=1;
//}
//var a;
//function func() {
// var a=1;
//}
//console.log(a);
//
//二、块级作用域
//function f1() {
//let n = 5;
//if (true) {
//  let n = 10;
//}
//console.log(n); // 5
//}
//f1();

//function f() { console.log('I am outside!'); }
//
//(function () {
//if (false) {
//  // 重复声明一次函数f
//  function f() { console.log('I am inside!'); }
//}
//
//f();
//}());
//ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
//if (true){
//function f() {}
// }

//三、const const声明一个只读的常量。一旦声明，常量的值就不能改变。(babel 转码改变常量值不会报错)
//const PI = 3.1415;

//console.log(PI);
//{
//	const PI=3;
//}

//{
//	let a=1;
//}
//console.log(a);
//const a=1;
//{
//	const a=2;
//}

//const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。（babel编译不通过）
//const a;
//if (true) {
//console.log(MAX); // ReferenceError
//const MAX = 5;
//}
var message = "Hello!";
//let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
//const age = 30;