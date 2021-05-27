//Method1 FUNCTION
function addTwoIntegers(num1, num2 = 0) {
  sum = num1 + num2;
  return sum;
}
var sum = addTwoIntegers(20);
console.log(sum); // prints 50

//Method2 FUNCTION EXPRESSION
//(a) Anonymous Function
var sum = function (num1, num2) {
  sum = num1 + num2;
};
sum(20, 30);
console.log(sum); // prints 50

//(b) Non-Anonymous Function
var sum = function addTwoIntegers(num1, num2) {
  sum = num1 + num2;
};
sum(20, 30);
console.log(sum); // prints 50

//Method3 ARROW FUNCTION
var sum = (num1, num2) => num1 + num2;
console.log(sum(10, 20)); // prints 30

var sum = (num1, num2) => {
  var result = num1 + num2;
  return result; // prints 30
};
