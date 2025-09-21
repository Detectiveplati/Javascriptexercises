const fibonacci = function(countArg) {
// parseInt changes string into a number for us
// in the following code
let count
if (typeof countArg !== 'number') {
  count = parseInt(countArg)
}
else {
    count = countArg
  }
// Return 0 for 0 fibonacci, return oops for negatives.
  if (count < 0) return "OOPS";
  if (count == 0) return 0;
// Initialize first number as 1, since fibonacci starts at 1
// Initialize secondPrev as 0 as a placeholder
  let firstPrev = 1;
  let secondPrev = 0;

// First iteration of fibonacci is 0+1, so that is default, so for 
// i = 2, so condition i less than or equal 2, loop starts running,
//  so for count = 1 and 2, returned value will be 1 as loop doesnt run
//  loop runs current stores the current number
// secondPrev become the firstPrev, 
// firstPrev becomes the current(after addition)
  for (let i = 2; i <= count; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }
  return firstPrev;
};


// Do not edit below this line
module.exports = fibonacci;
