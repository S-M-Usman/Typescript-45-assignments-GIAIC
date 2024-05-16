// Tests for equality and inequality with strings
var name1 = 'Batman';
console.log("check for equality in strings");
console.log(name1 === 'batman'); //false
console.log(name1 === 'Batman'); //true
var name2 = 'superman';
console.log('check for inequality in strings');
console.log(name1 !== name2); //true
console.log(name2 !== name2); //false
// Tests using the lower case function
console.log("test for lower case function");
console.log(name1.toLowerCase() === 'batman'); //true
console.log(name1.toLowerCase() === 'Batman'); //false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 40;
var num2 = 59;
console.log("test for equality");
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log("test for greater than , less than ,greater than equals ,less than equals to");
console.log(num1 > num2); //false
console.log(num2 > num1); //true
console.log(num1 < num2); //true
console.log(num2 < num1); //false
console.log(num1 <= num2); //true
console.log(num1 >= num2); //false
var num3 = 40;
console.log(num2 === num1); //true
//Tests using "and" and "or" operators
console.log(num3 === num1 && num2 === num1); //and 
console.log(num3 === num1 || num2 === num1); //or
//Test whether an item is in a array
var fruits = ['oranges', 'strawberry', 'peach', 'apple'];
console.log(fruits.includes('oranges'));
//Test whether an item is not in a array
console.log(fruits.includes('dargon fruit'));
