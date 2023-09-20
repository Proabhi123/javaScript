const accountId = 1233456;
let accountEmail = "as@gmail.com";
var accountPassword = "0987654";
accountCity = "Patna";
// accountId = 1; this is not allowed to change
accountEmail = "abs@gmail.com"
accountPassword = "123456"
accountCity = "Pune"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);