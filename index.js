const num1 = prompt('Enter the first number: ');
const arithmetic = prompt ('Enter arithmetic operator to perform the calculation (either +, -, * or /): ');
const num2 = parseFloat(prompt('Enter the second number: '));

if (arithmetic == '+' ) {
    result = parseInt(num1) + parseInt(num2);
} else if (arithmetic == '-') {
    result = parseInt(num1) - parseInt(num2);
} else if (arithmetic == '*') {
    result = parseInt(num1) * parseInt(num2);
} else {
    result = parseInt(num1) / parseInt(num2);
}

alert(num1 + ' ' + arithmetic + ' ' +  num2 + ' ' + '= ' + result);