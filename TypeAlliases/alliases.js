"use strict";
// explanation of TypeAlias = 
// A Type Alias in TypeScript allows you to give a custom name to any type using the type keyword.
// Think of a type alias as a nickname or shortcut.
// It doesn't create a brand-new underlying type in memory; it just gives a name to an existing shape or type definition so your code is cleaner, reusable, and self-documenting.
let student1 = {
    username: "Sohit",
    age: 23
};
let student2 = {
    username: "Rohit",
    age: 22
};
console.log(student2);
let myname = "Mohit";
console.log(myname);
let add = (x, y) => {
    return x + y;
};
console.log(add(10, 5));
let college = {
    studentname: 'Raghav Chadda',
    tutionfees: 23000
};
console.log(college);
let userId = 101;
userId = "Mohit101";
console.log(userId);
