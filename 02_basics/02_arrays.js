const marvel_heros =["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

//marvel_heros.push(dc_heros)//[thor,ironman,spiderman,[superman,....]]

//console.log(marvel_heros);
//console.log(marvel_heros[3]);
//console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

//const all_new_heros =[...marvel_heros, ...dc_heros]//spread operator it add the values of array
//console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)//it flat the values or u can say jo values uss array ke ander aaray mein h usko bhi normal form mein likh dega
console.log(real_another_array);
 
console.log(Array.isArray("parul"))//it return the boolean value it checks whether it is array or not
console.log(Array.from("Parul"))//it convert anything to array.ex it is string it convert to array
console.log(Array.from({name: "Parul"})) //interesting case as it returns empty array as it doesnt understand that which thing we have to convert in array
 
let score1 =100
let score2 = 200
let score3 = 300
 //it convert these three values in array 
console.log(Array.of(score1,score2,score3));