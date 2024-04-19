//High order array loops in javascript


//["","",""]

const arr = [1,2,3,4,5]

for(const num of arr){
     // console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
}
//Maps
//Map is object that hold key value pairs and remembers the original order of the keys.
const map = new Map()
map.set('IN',"India")
map.set('USA',"Unites States of America")
map.set('Fr',"France")


//console.log(map);

for(const [key,value] of map){
    console.log(key, ':-', value);
}

const myObject ={
    game1 : 'NFS',
    game2 : 'Spiderman'
}
// for(const[key,value] of myObject){
//     console.log(key, ':-', value);
// }