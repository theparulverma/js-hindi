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

console.log(myArr);
console.log(typeof newArr);
