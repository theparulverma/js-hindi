function sayName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("L");
    console.log("streak");
}

//sayName()

//  function addTwoNumbers(number1, number2){//function definition time when we write in brackets is parameters
//      console.log(number1 + number2);
//  }

function addTwoNumbers(number1, number2){//function definition time when we write in brackets is parameters
   //let result = number1 + number2
    //return result// after returning the value in function,it never prints anything
    return number1+number2//it saves the space
}
const result = addTwoNumbers(3,4)//7 //in this we name it as arguments as we are calling the function addtwo numbers
//console.log("Result", result);// in this result value will be undefined


function loginUserMessage(username ="sam"){//it is a deafult value ,it means agar hum kuch bhi pass nhi karege arguments mein soo by deafult yeh hogi, and when we gave the value in arguments then it will overlap and jo humne pass ki hai voh 
    //vali value print hogii.
    if(username == undefined){//!username it means ki agar username undefined ho it both works the same
     console.log("Please enter a username");
     return// after this it will not execute the next return statement
    }
    return `${username} just logged in`

}

//console.log(loginUserMessage("Parul"))
console.log(loginUserMessage())//it will return undefined just logged in

function calculateCartPrice(val1, val2, ...num1){//by adding 3 dot in front we can add number of values
    //which we want like any number of values and return in array form
    return num1//in num1 500 and 2000 value will be there
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "parul",
    price: 199
}

function handleObject(anyobject){//we send here object which is user ,user is a object
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam" ,
    price: 399
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
   return getArray[1]
}

console.log(returnSecondValue(myNewArray));