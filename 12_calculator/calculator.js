const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce((acc,curr)=> acc+curr,0);
};

const multiply = function(num1,num2) {
  return num1*num2;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
  let res = 1;
	while(num>=1){
    res = res*num;
    num-=1;
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
