
function sayName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("L");
    console.log("streak");
}
//sayName()
 
// function addTwoNumbers(number1, number2){//function definition time when we write in brackets is parameters
//     console.log(number1 + number2);//in this we name it as arguments
// }

function addTwoNumbers(number1, number2){//function definition time when we write in brackets is parameters
    let result = number1 + number2
    return result// after returning the value in function,it never prints anything
}
const result = addTwoNumbers(3,4)//7 
console.log("Result", result);// in this result value will be undefined