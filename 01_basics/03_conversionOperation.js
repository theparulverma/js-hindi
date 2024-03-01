let score = "33"
 console.log(typeof score);

 console.log(typeof(score));

 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);
// string "33" easily be converted into number
// but string "33abc" can't be converted into number soo it will show nan => it means not a number
// true => 1,false=>0
  let islogged=1
 let booleanislogged = Boolean(islogged);
 console.log(booleanislogged);

//" " string will be false and any name it be converted into true
// "" => false
//"parul" => truue
let some=33
let change = String(some);
console.log(change);

//*******operations********** */

let value =3
let negvalue =-value
console.log(negvalue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2/2);
//console.log(2%2);

let str1 = "parul";
let str2="prabhat";
let str3 = str1+str2;
console.log(str3);

console.log(1+"2");
console.log("1"+2);
console.log("1"+2+2);//in this pehle hume string mein mila tha soo isliye 122 answer aayega

console.log(1+2+"2");//32
console.log(+true);
console.log(+"");
let num1,num2,num3
num1=num2=2//it is not a good way of writing the code as in future someone will read your code,it will become difficult
let gamecouner =100;
++gamecouner;
console.log(gamecouner);
