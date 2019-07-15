'use strict'

function getCentury (year) {
   let result;
   if (year >= 1 && year <= 2017) {
      result = Math.ceil(year/100);
   } else {
      result = "Год указан не правильно";
   }
   return result;
}
