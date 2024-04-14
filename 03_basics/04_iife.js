//Immediately invoked function expression
//global scope se pollution nhi chaiye bilkul bhi soo that's why we use iife

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();//if we apply these brackets then no need to call the chai() function
//chai()

//we can use with arrow function
( (name) =>{
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Parul');

( function aurcode() {
    console.log(`DB CONNECTED Three`);
})()