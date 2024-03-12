//Dates

//let myDate = new Date()// mydate is a type of object
//console.log(myDate.toString());
//console.log(myDate.toDateString());//it only tell the date Tue Mar 12 2024
//console.log(myDate.toLocaleString());//3/12/2024,6:22:41,it tells date and time
//console.log(typeof myDate);

//let myCreateDate = new Date(2024,2,12)//in javascript month starts from 0,means 0=jan
let myCreateDate = new Date("2024-03-12")//in this format it starts from 1 month,i.e. january
//console.log(myCreateDate.toDateString());
 
let myTimeStamp = Date.now()//it will help to get exact time ,like if we fill google form
//and u are the admin,then u can check the exact time,even in milliseconds

//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})