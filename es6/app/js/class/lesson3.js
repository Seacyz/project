//function text(){
//	let a=2;
//	console.log(a);
//}
//text();
let { foo, bar } = { foo: "aaa", bar: "bbb" };
//let {foo1: {bar1}} = {baz: 'baz'};
//console.log(bar1);//Uncaught TypeError: Cannot read property 'bar1' of undefined
let { foo2: baz } = { foo2: 'aaa', bar2: 'bbb' };
let obj = {
  p: [
    'Hello',
    { y: 'World' },
    'world'
  ]
};

let { p, p: [x, { y },z] } = obj;

let obj3 = {};
let arr3 = [1,2];

({ foo3: obj3.prop, bar3: arr3[0] } = { foo3: 123, bar3: true });
console.log(obj3);//Object {prop: 123} 
console.log(arr3.toString());//true,2 

var {x1: y1= 3} = {x1: 5};

let x2;
({x2} = {x2: 1});
//
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
//
//let [a, b, c, d, e] = 'hello';//babel转码不行，因为string在es5中不继承迭代接口
//console.log(a);
//
let {length : len} = 'hello';//len=5

let {toString: s1} = 123;
if(s1 === Number.prototype.toString){
	console.log(1);
}
let {toString: s2} = true;
if(s2 === Boolean.prototype.toString){
	console.log(1);
}
//let { prop: x3 } = undefined;


