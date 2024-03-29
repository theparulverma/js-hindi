//in this we will learn about arrow function and this keyword
const user = {
    username: "parul",
    price: 999,
    welcomeMessage: function(){
       console.log(`${this.username} , welcome to website`); //this.username is for calling the current keyword
       console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "prabhat"//values change kardi
// //yeh context hogaya change
// user.welcomeMessage();

//console.log(this)//empty aayega yaha pe

// const chai = function(){
//     let username = "parul"
//     console.log(this.username);
// }

// const chai = () => { //arrow function
//     let username = "parul"
//     console.log(this.username);
// }
//chai()

// const addTwo =(num1,num2) =>{//pure arrow function
//     return num1 + num2
// }//agar curly braces mein likha h so return keyword likhna padega
// console.log(addTwo(3,4))

//and in this we are not using curly braces so no need to write return keyword
const addTwo = (num1,num2) =>  (num1+num2) //implict return function

console.log(addTwo(3,4))
