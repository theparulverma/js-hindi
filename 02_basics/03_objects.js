//singleton -> when we construct objects from constructors then it  is called singleton.
//object literals
//Object.create//constructor method/singleton

const mySym = Symbol("key1")

const Jsuser = {
    name: "Parul",//we have option in this we can have key and values in this
    "full name": "Parul Verma",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "theparulverma@gmail.com",
    isloggedin: false,
    lastLogindays: ["Monday","Saturday"]
} 
//object formed
//console.log("hello")
//console.log(Jsuser.email)
//console.log(Jsuser["email"])
//console.log(Jsuser["full name"])
//console.log(Jsuser[mySym])//symbol is printed in this way square bracket and also declared in square bracket in object 

Jsuser.email ="parulverma@gmail.com"
//Object.freeze(Jsuser)//it means iske baad hamare jsuser mein koi change nhi hone ka 
Jsuser.email ="nfff@gmail.com"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);//yaha hum jsusuer ke object ke name ko refer kar rahe h
}
console.log(Jsuser.greeting());//it will print hello js user
console.log(Jsuser.greetingTwo());
//but if we type only jsuser.greeting, without bracket it will print function (anonymous)