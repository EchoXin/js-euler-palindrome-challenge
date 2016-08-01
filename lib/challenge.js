'use strict';

const Find=function(num){
  let bin=(num >>> 0).toString(2);
  let newDigits=(''+bin).split('');
  let digits = (''+num).split('');
  let octal= parseInt(bin, 2).toString(8);
  let newOctal = (''+octal).split('');
  for (let i = 0; i < digits.length; i++) {
    if(digits[i]===digits[digits.length-i]){
      if(newDigits[i]===newDigits[newDigits.length-i]){
          if(newOctal[i]===newOctal[newOctal.length-i]){
        return num;
      }
      }
    }
  }
};

Find();
module.exports = () => {
  return true;
};
