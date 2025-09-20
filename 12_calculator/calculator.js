const add = function(num1, num2) {
	const ans = num1 + num2;
  return ans;
};

const subtract = function(num1, num2) {
		const ans = num1 - num2;
  return ans;
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
return total;
};

const multiply = function(array) {
	let total = 1;
  for (let i  = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(num1, num2) {
		const ans = num1 ** num2 ;
  return ans;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  else {
    let ans = 1;
    for (let i = num; i > 1; i--)
      ans *= i;
    return ans;
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
