function addTwoIntegers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var output = addTwoIntegers(20, 30);
console.log(output);    // prints 50

//local variable scope
addTwoIntegers(20, 30); 
console.log(sum);       // Uncaught ReferenceError: sum is not defined

//global variable scope
var sum = 0;
function addTwoIntegers(num1, num2) {
  sum = num1 + num2;
}
addTwoIntegers(20, 30);
console.log(sum);       // prints 50

// problem statement
// while calling function, if one of the parameter is not defined
var sum = 0;
function addTwoIntegers(num1, num2) {
  console.log(num2);    // prints undefined
  sum = num1 + num2;
  return sum;
}
addTwoIntegers(20);
console.log('?' + sum);       // prints NaN

//solution (set default values of Parameters)
var sum = 0;
function addTwoIntegers(num1, num2 = 0) {
  sum = num1 + num2;
  return sum;
}
addTwoIntegers(20);
console.log(sum);     // prints 20
