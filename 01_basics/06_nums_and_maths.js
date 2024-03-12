const score =400
console.log(score);

const balance = new Number(100)//to intialize a number we use new number keyword
console.log(balance);// when we will print this it will specify its type,i.e. number: 100

console.log(balance.toString());//it converts balance number type to string type

console.log(balance.toString().length);//it tells the length of string i.e 3

console.log(balance.toFixed(1));

const other = 224.78

console.log(other.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//if we put nothing in bracket then it will put commas according to united states,
//if we want to add commas according to indian then write en-IN in bracket

//************** Maths **********/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,8,2,1));
console.log(Math.max(4,8,2,1));

console.log(Math.random());//it gives a random value b/w 0 and 1

console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) +min); 