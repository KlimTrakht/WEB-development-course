"use strict";

(function gettingCentury(){
    let valueYear = prompt('Введите год', '');
    let century = Math.ceil(valueYear/100);
    validCentry();

    function validCentry(){
        if(valueYear > 2017 || valueYear < 1){
            alert('Год указан не правильно')
            return gettingCentury();
        } else if( isNaN(century)){
            alert('Вы ввели не число')
            return gettingCentury();
        }
    }
    
alert(valueYear + ' год это ' + century + ' век')
})();