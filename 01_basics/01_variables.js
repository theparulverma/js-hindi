const accountId=144553
let accountEmail ="theparulverma@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
/*
prefer not to use var due to issue of in block scope and functional scope
*/
// accountId =2 //not allowed
accountEmail ="hbbd@gmail.com"
accountPassword = "21839"
accountCity ="Behnglaru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])