function getCentury(year) {
    var century =  0;
    var arrYear = [];
    arrYear = year.split('');
    if (year < 1 || year > 2017 || isNaN(year)) {
        return 'Год указан не правильно';
    } else {
        if (Number(year) <= 100) {
            return 'Century: 1';
        } else if (year.length === 3 && (Number(arrYear[1]) !== 0 || Number(arrYear[2]) !== 0)) {
            century = Number(arrYear[0]) + 1;
            return 'Century: ' + century;
        } else if (year.length === 3 && (Number(arrYear[1]) === 0 && Number(arrYear[2]) === 0)) {
            century = Number(arrYear[0]) ;
            return 'Century: ' + century;
        } else if (year.length === 4 && (Number(arrYear[2]) !== 0 || Number(arrYear[3]) !== 0)) {
            century = Number(arrYear[0] + arrYear[1]) + 1;
            return 'Century: ' + century;
        } else if (year.length === 4 && (Number(arrYear[2]) === 0 && Number(arrYear[3]) === 0)) {
            century = Number(arrYear[0] + arrYear[1]) ;
            return 'Century: ' + century;
        }
    }
}

getCentury('2001'); //21
getCentury('35'); //1
getCentury('495'); //5
