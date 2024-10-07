const accountId = 144553;
let accountEmail = "account@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // not standard way ti declare varibale

// accountId = 2; not allowed

accountEmail = "abc@gmail.com";
accountPassword = "67890";
accountCity = "Bengaluru";

// perfer not to use var
// because of issue in block  scope and functional scope

console.table([accountEmail, accountPassword, accountCity]);


