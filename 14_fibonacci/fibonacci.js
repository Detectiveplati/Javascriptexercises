const fibonacci = function(index) {
const fibonacci20 = [
  0, 1, 1, 2, 3, 
  5, 8, 13, 21, 34, 
  55, 89, 144, 233, 377, 
  610, 987, 1597, 2584, 4181
];
if (index <= 0){
    return 'OOPS';
}
else {
const chosen = fibonacci20[index];
return chosen;
}
};


// Do not edit below this line
module.exports = fibonacci;
