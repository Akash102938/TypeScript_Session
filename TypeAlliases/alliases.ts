// explanation of TypeAlias = 
// A Type Alias in TypeScript allows you to give a custom name to any type using the type keyword.
// Think of a type alias as a nickname or shortcut.
// It doesn't create a brand-new underlying type in memory; it just gives a name to an existing shape or type definition so your code is cleaner, reusable, and self-documenting.



//using objects
type User = {
    username:string,
    age: number
}

let student1:User = {
    username:"Sohit",
    age: 23
}

let student2:User={
    username: "Rohit",
    age: 22
}

console.log(student2);





//using simple way
type Username = string;
type Age = number;

let myname:Username = "Mohit"


console.log(myname);





// using function
type Addfuntion = (
    a:number,
    b:number
) => number;

let add: Addfuntion = (x,y)=>{
    return x+y
}
console.log(add(10,5));



//using intersection
type Person= {
    studentname: string
}

type tutionfees = {
   tutionfees: number
}

type student = Person & tutionfees

let college:student = {
   studentname: 'Raghav Chadda',
   tutionfees: 23000
}

console.log(college);



//using union
type ID = string | number;
let userId: ID = 101;
userId = "Mohit101"

console.log(userId);

