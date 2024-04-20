const coding =["js","ruby","java","python","cpp"]


// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item
// })
// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4)//filter operation is also a callback function ,it also takes function 
 //filter function returns a value
 console.log(newNums);//so it return all the value greater than 4 ,ie,5,6,7,8,9,10 
//when we use curly braces it means we define the scope soo we have to write return variable
//shown in  example 

const newNums2 = myNums.filter((num) => {
    // num > 4//if we write this simple then it will return blank array[]
    return num > 4
})
console.log(newNums2);

const newNums3 =[]
myNums.forEach((num) => {
    if(num > 4){
        newNums3.push(num)
    }
})
console.log(newNums3);
//now we are taking a array in which we will take objects of category books types and alll
const books =[
    {title: 'Book One',genre: 'Non-Fiction',publish:1981, edition:2004},
    {title: 'Book Two',genre: 'Fiction',publish:1981, edition:2005},
    {title: 'Book Three',genre: 'Science',publish:1967, edition:2006},
    {title: 'Book Four',genre: 'Fiction',publish:1690, edition:2007},
    {title: 'Book Five',genre: 'History',publish:1971, edition:2008},
    {title: 'Book six',genre: 'Comedy',publish:1789, edition:2009},
    {title: 'Book seven',genre: 'Science',publish:1991, edition:2010},
    {title: 'Book eight',genre: 'Rommance',publish:1881, edition:2011},
    {title: 'Book nine',genre: 'Fiction',publish:1988, edition:2014}
];

const myBooks = books.filter((bk) => bk.genre === 'Fiction')
//console.log(myBooks);
const mybooks2 = books.filter( (bk) => {
    return bk.publish <= 1981 && bk.genre === 'History'
})
console.log(mybooks2);