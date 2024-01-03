const accountId = 11234
let accountEmail = "viraajpall@gmail.com"
var accountPassword = "3456"
accountCity = "jaipur"

// accountId = 456 Not Allowed

/* Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity])

let accountable;