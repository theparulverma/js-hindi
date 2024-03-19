//arrray

const myArr =[0,1,2,3,4,5,true,"parul"]

console.log(myArr[1]);

//myArr.push(7);//to add element in the array
//myArr.push(6);
myArr.pop();//it automatically deletes the last value from an array
myArr.pop();
myArr.unshift(9)//it adds that value in front and shift function deletes the value from front.
myArr.shift()//it delets the value which is shift at 1st position or delete 1st value
//console.log(myArr.includes(9));//it returns a boolean value
//console.log(myArr.indexOf(3));//it gives the index value in arrray example 3 element is at index 3

const newArr = myArr.join()
//join operation had bind array also and its type is string
console.log(myArr);//it will come in normal array format
console.log(typeof newArr);//it will come in normal form.

// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)//ismein 1 and 2 index vale elements include honge
//3 include nhi honge.

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)// 1,2 and 3 elements teeno honge include 
// and most imp asked in interviews that after using splice function 
//jo hamara new array hai usmein se voh element nikal jayegii 1to 3 tak ki
console.log(myArr);
console.log(myn2);
