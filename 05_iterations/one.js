//for
for(let i = 0; i< 10;i++){
    const element = i;
    if(element == 5){
       // console.log("5 is best number");
    }
    //console.log(element);
}

for(let i = 2;i<=10;i++){
    //console.log(`Outer loop value: ${i}`);
    for(let j =1;j<=10;j++){
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray =["flash","batman","superman"]
console.log(myArray.length);
for(let index = 0;index <myArray.length;index++){
    const element = myArray[index];
    console.log(element);
}
//break and continue

// for(let index =1 ;index <=20;index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;//jab yeh break statement aata hai toh yeh bahar aa jata hai pure loop se bass detected 5 print hoga
//     }
//     console.log(`Value of i is ${index}`);
// }

for(let index =1 ;index <=20;index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue;//ismein detected 5 ke baad bhi loop chalegaa
    }
    console.log(`Value of i is ${index}`);
}

