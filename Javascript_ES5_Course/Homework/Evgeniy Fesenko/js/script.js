function getCentury() {
    var year = prompt('Enter an year', '2000');
    var century =  0;
    var arrYear = [];
    arrYear = year.split('');
    if (year < 1 || year > 2017 || isNaN(year)) {
        alert('Год указан не правильно');
        getCentury();
    } else {
        if (Number(year) <= 100) {
            alert('Century: 1')
        } else if (year.length === 3 && (Number(arrYear[1]) !== 0 || Number(arrYear[2]) !== 0)) {
            century = Number(arrYear[0]) + 1;
            alert('Century: ' + century);
        } else if (year.length === 3 && (Number(arrYear[1]) === 0 && Number(arrYear[2]) === 0)) {
            century = Number(arrYear[0]) ;
            alert('Century: ' + century);
        } else if (year.length === 4 && (Number(arrYear[2]) !== 0 || Number(arrYear[3]) !== 0)) {
            century = Number(arrYear[0] + arrYear[1]) + 1;
            alert('Century: ' + century);
        } else if (year.length === 4 && (Number(arrYear[2]) === 0 && Number(arrYear[3]) === 0)) {
            century = Number(arrYear[0] + arrYear[1]) ;
            alert('Century: ' + century);
        }
    }
}

getCentury();
