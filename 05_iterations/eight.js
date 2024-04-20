//reduce function is used in many shopping crats
//ismein pehle accumulator ki jo value hoti hai voh intialvalue hoti hai jo hum define karte hai, nhi toh } ke baad , lagakar 0 likh dete h, uske baad accumulator ki value last accumulator value hoti hai, i.e that meands it keeps on changing with iteration

const myNums =[1,2,3]
const total = myNums.reduce(function(acc,currval){
    //it is used in shopping to add different item prices all togerher like 1 person ki shopping add karni hai , soap,paper etc uss total mein hi sab add karege
         return acc + currval//is mein humne scope ke ander likha toh isliye return lagaya
},0) //this 0 value is of acc value means accumulator 

console.log(total);

//reduce function can be used with arrow function also.

const mytotal = myNums.reduce((acc,currval) => acc+currval ,0)
console.log(mytotal);