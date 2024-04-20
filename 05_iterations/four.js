const myObject ={
    js: 'javascript',
    cpp:'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//forin loop is used myObject data type
for (const key in myObject) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
   // console.log(key);//for getting only keys
    //console.log(myObject[key]);//for getting key values
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(`${key} value is for ${programming[key]}`);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"Unites States of America")
map.set('Fr',"France")
// for(const key in map){//Maps cant be iterable soo it will not print naything
//     console.log(key);
// }