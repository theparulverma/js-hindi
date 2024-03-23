//const tinderUser = new Object() singleton object
const tinderUser = {}//non singleton object

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
     userfullname: {
        firstname:"Parul",
        lastname: "verma"
     }
    }
}
console.log(regularUser.fullname);

const obj1 ={1: "a", 2: "b"}//keys: numbers and values as strings
const obj2 ={3: "c", 4: "d"}

//const obj3 = {obj1, obj1}// if we do in this form then output will not come as combined ,it will come in array form combined 
//like {{1:"a",2: "b"},{3: "c", 4: "d"}}
const obj3 = Object.assign(obj1, obj2)// in this { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//so that's why we put {} bracket first.
//it also means that jo first object hum bracket mein rakh rahe h usmein all values jati h
const obj6 ={...obj1, ...obj2}//spread operator
console.log(obj6);
console.log(obj3);
console.log(obj3 == obj1);//true
console.log(obj1);

const users =[
    {
        id: 1,
        email: "parul@gamil.com"
    },
    {
        id: 1,
        email: "parul@gamil.com"
    },
    {
        id: 1,
        email: "parul@gamil.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//by using this we can access the keys of an object by mentionting the name of object in bracket.
//same for getting the values of object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//in this we get the key -value pairs as in one array soo it becomes array inside array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//it tells that tinderuser object does have this attribute or not!!?
