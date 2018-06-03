const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Enter first number to multiply:');
const first = readline.prompt();
console.log('Enter second number to multiply:');
const second = readline.prompt();
const res = first * second;
console.log("The result is " + res);
