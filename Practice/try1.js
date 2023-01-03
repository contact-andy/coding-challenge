"use strict";// enable strict mod in you code to notify common coding mistake
// let magic = function (){
//     return new Date();
// }

// console.log(magic());

// let sum = function (a,b) {
//     return arguments[0]+arguments[1];
// }

// console.log(sum(30,50))
// var a=6;
// function sum (){
//     // var a=5;
//     console.log(a);
// }
// sum();
// console.log(a);

// (A) Create a promise
let condition=false;
const p = new Promise((resolve, reject)=>{
    // Do some async task
    condition=true;
    setTimeout(()=>{
    if(condition){
    resolve('Successful login');
    console.log('Successful login')
    } else {
    reject('Login failed');
    console.log('Login failed')
    }
    }, 5000)
    })