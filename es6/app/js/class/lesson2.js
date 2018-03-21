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

let { foo, bar } = { foo: "aaa", bar: "bbb" };
let { foo1: baz } = { foo1: 'aaa', bar1: 'bbb' };
let { foo2,foo2: baz1 } = { foo2: 'aaa', bar2: 'bbb' };
console.log(foo1);//undefined
console.log(foo2);//aaa