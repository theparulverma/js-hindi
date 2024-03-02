// on basis of memory stored and how it is accessed, data types are divided into 2 categories
 // primitive data type => call by value
// 7 types=> copy of the data is send ,not the original data 
//string,Number,Boolean,null,undefined,Symbol,BigInt


//refernce(non primitive data types)

//Array, Objects, Functions

//js is a dynamically typed language as data type is checked during execution time or runtime.
const score = 100
const scorevalue =100.3
const loggedIn = false
const outsideTemp = null
//to declare a symbol

const id = Symbol('123')
const anotherId =Symbol('123')
 console.log(id == anotherId);

//const bigNumber = 379567890789;
//or used as a big int by using n at the end
const bignumber = 45678902n;

const heros =["krrish","shaktiman"]
let myObj= {
    name: "parul",
    age:20,
}
const myFunction = function(){
    console.log("Hello World");
}
 
// null is a object type ,soo when asked what is the type of null is, it is object data type
//undefined=>undefined
//my function datatype=>function object ,kinda say sooo




/***************memoryyyy*******/

// stack memory => used in primitive data type
//,Heap memory => non primitive

// in stack we send a copy of the original data soo if there is a change in original value, toh orginial value mein koi change nhi hoga 
//that's why myinsta mein value same hi rahegi and another mein dusri aayegi jo humne update ki hai
// in stack or primitive memory orginial data doesnt change
let myinsta = "elsa.2908"
let another = myinsta
another="sunshine";
console.log(myinsta);
console.log(another);

let userOne={
    email: "gbnmo@.com",
    upi: 456789

}
let userTwo = userOne

userTwo.email ="parul@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);//both have the same value as refernce is send soo there is a change in original value
//both we have parul@gmail.com