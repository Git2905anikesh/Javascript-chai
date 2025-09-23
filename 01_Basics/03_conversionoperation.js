let score = "undefined"
console.log(typeof score);  
console.log(typeof(score));  

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "1"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  
 
// 1 => true; 0 => false
// "abc" => true; "" => false
// null => false
// undefined => false
// NaN => false

let sumNumber = 234

let stringNumber = String(sumNumber)
console.log(stringNumber);
console.log(typeof (stringNumber));