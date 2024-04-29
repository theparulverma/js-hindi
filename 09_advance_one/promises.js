const promise1 = new Promise(function(resolve,reject){//creation of promise//it takes callback
    //do an async task
    //db calls, cyrpto
    setTimeout(function(){
          console.log('Async task is complete');
          resolve()
    },1000)//it means koi function hai jo execute hoga given time baadi.e 1 second
})
//after creation of promise,we have to consume it also.//which is done through writing resolve in upper function,soo that it connect with then function//
//and give output promise consumed
promise1.then(function(){//ismein values return hoti h ,jo bhi upper humne function mein kiya h.
    console.log("Promise consumed")
})
new Promise(function(resolve,reject){//this promise is made without making variable of const type
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){//in this we directly connect then function to promise formed
    console.log("Async 2 resolved");
})
const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Minnie", email:"parul@gmail.com"})
    },1000)
})

promise3.then(function(user){//iss user mein voh values aayegi jo humne resolve mein input karayi hai
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Parul",password:4567})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promise4.then((user) =>{
       console.log(user);
       return user.username;
}).then((username) =>{//we have done chaining here,,as the then function we have used, the value which will return from there, will come in this then function
        console.log(username);
}).catch(function(error){
     console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))//this statement will excute even if it is resolved or rejected


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:4567})
        }else{
            reject('ERROR: JS went wrong')//reject means error code
        }
    },1000)
})


async function consumePromise5(){
    try{
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log("error handled by try and catch");
    }
}
// async function consumePromise5(){
//         const response = await promise5
//         console.log(response);
// }
consumePromise5()

async function getAllUsers(){
  const response = await fetch('')
  const data = response.json()
  console.log(data);
}
getAllUsers()