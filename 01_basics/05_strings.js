const name ="Parul"
const repoCount =50
//console.log(name + repoCount +  " value"); THIS is not as code readiblity
//for good version  we use this syntax 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//new version of writing string code

const gameName = new String('parul.verma.29')
console.log(gameName[0]);//it means parulverma ka p 0th index pe h
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newstring = gameName.substring(0,4)
console.log(newstring);

const another = gameName.slice(-8,4)
console.log(another);

const string1 = "  hitesh "
console.log(string1);
console.log(string1.trim());

const url ="https://parul.com/parul%29verma"

console.log(url.replace('%29','-'))

console.log(url.includes('sundar'))//it returns a boolean value

console.log(gameName.split('.'));