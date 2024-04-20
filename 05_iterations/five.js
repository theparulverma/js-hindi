const coding = ["js","ruby","java","python","cpp"]
 
coding.forEach(function (val){
   // console.log(val); 
}) //foreach is a callback function we have to write a function name in brackets of foreach


// coding.forEach( (item) => {//arrow function use kiya hai 
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})


//mycoding ek array lenge aur ismein bhaut saare objects honge
const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageFileName);
})
