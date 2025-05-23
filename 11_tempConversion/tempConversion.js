const convertToCelsius = function(fdeg) {
  let cdeg = (fdeg-32) *(5/9);
  cdeg = Math.round(cdeg*10)/10;
  return cdeg;
  
  
};

const convertToFahrenheit = function(cdeg) {
  let fdeg = (cdeg*(9/5))+32;
  fdeg = Math.round(fdeg*10)/10;
  return fdeg;
  
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
