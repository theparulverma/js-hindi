const myNumers =[1,2,3,4,5,6,7,8,9,10]

//it is a map function similar to filter function
const newnumers = myNumers.map((num) => num+10)
//console.log(newnumers);
const newnumers2 = []
myNumers.forEach((num) =>{
 if(num>4){
    return newnumers2.push(num+10);
 }
}) 
//console.log(newnumers2);
//chaining function , map ke ander map use karte hai
//in chaining the change in one map function applied to will be reflected to another map 
const newnums3 = myNumers
                        .map((num) => num*10)
                        .map((num) => num+1)
                        .filter((num) => num >= 40)//we can apply filter function also after map function
console.log(newnums3);                        









