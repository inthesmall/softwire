const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('Please enter an operator (+, -, *, or /):');
const op = readline.prompt();
console.log('Enter first number:');
const first = parseFloat(readline.prompt());
console.log('Enter second number:');
const second = parseFloat(readline.prompt());

// Perform the requested operation

function operate(op, first, second) {
	switch (op){
		case "+":
			var res = first + second;
			break;
		case "-":
			res = first - second;
			break;
		case "*":
			res = first * second;
			break;
		case "/":
			res = first / second;
			break;
		default:
			console.log("The operator you provided was not in the list");
			break;
	}
	return res;
}

var res = operate(op, first, second);
console.log("The result is " + res);
