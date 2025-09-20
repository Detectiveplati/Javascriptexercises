const convertToCelsius = function(temp) {
  const raw = (temp - 32)* (5 / 9);
  const decimalOne = Math.round(raw * 10)/ 10;
  return decimalOne;
};

const convertToFahrenheit = function(temp) {
  const raw = (temp * (9 / 5)) + 32;
  const decimalOne = Math.round(raw * 10)/ 10;
  return decimalOne;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
