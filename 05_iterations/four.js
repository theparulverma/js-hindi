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