'use strict'

function getSquaresNumberInPoligon (n) {
   let result = 1;

   for (let i = 1;  i < n ; i++) {
      result += i * 4;
   }

   return result;
}


