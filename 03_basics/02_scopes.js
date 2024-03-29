let a = 10
const b = 20
var c = 300

if(true){//when there are curly brackets it is called block scope
    let a = 10//and let and char will only be available in this block scope
    const b = 20//if they are excuted outside the block,then it will not be accessible and show error
    console.log("INNER: ", a);
    c = 30 //but when we use var it can be used anywhere, and if we have used var of same name then it will be error as 
    //the value which is outside the block it will not execute that value 
    //thats why we ignore using var
}

//for(let i =0;i< array.length;i++){
  //  const element = array[i];
//}

console.log(a);
console.log(b);
console.log(c);

function one(){//nested scope example
    const username = "Parul"

    function two(){
        const website = "youtube"//we can learn from this, as two is a baby function and one is parent of baby function two, soo  two function can use one function variables as two is small
        console.log(username);//yk as two function is inside one function so it can access one function variables
    }
    //console.log(website);

    two()

}
one()

if(true){
    const username = "parul"
    if(username == "parul"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);//it will not be accessible as it's scope is only in if username==parul vale function mein
}

// +++++++++++++++++++++++++ interseting +++++

console.log(addone(5))

function addone(num){
    return num + 1
}


//addTwo(5) it will show error here as addtwo function is stored in const as declaration type of function is different.
const addTwo = function(num){//this is also a type to make function and stor the function in const 
    return num + 2
}

addTwo(5)