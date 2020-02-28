#!/usr/bin/node

if(process.argv.length != 4){
    console.log("sum x y");
    process.exit(1);
}
var x= Number(process.argv[2]);
var y= Number(process.argv[3]);

const add = require("./calc");

console.log(`${x}+${y}=${add(x,y)}`);


// 放到calc.js
/**
 * 计算两个数 x 和 y 的和
 * @param x 第一个求和的数
 * @param y 第二个求和的数
 * @return {number} 返回 x + y 的求和结果
 */

// function add(x,y){
//     if((typeof x) === 'number' && (typeof y) === 'number'){
//         return x+y;
//     }else{
//         return NaN;
//     }
// }