"use strict";
//Map function
let number = [100, 200, 300, 400];
let numberdouble = number.map(number => number * 2);
// console.log(number);
// console.log(numberdouble);
// Filter function
let result = number.filter(number => number > 150);
// console.log(result);
// let StudentNames : string[] = ["Rohit", "Sohit", "Ranjejay", "Rahul", "Deepak"]
// let filterStudents = StudentNames.filter(StudentNames => StudentNames.startsWith('R'))
// console.log(filterStudents);
let prices = [100, 200, 300];
let total = prices.reduce((sum, prices) => sum + prices, 0);
console.log(total);
