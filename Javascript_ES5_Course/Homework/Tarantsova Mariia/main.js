const MIN_YEAR = 1;
const MAX_YEAR = 2017;

var page = {
    init: function (year) {
        var year = year + '';
        this.getCentury(year)
    },
    getCentury: function (year) {
        var century =  0;
        var arrYear = [];
        arrYear = year.split('');
        if (year < MIN_YEAR || year > MAX_YEAR || isNaN(year)) {
            alert('Год указан не правильно');
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
};

page.init(100); //'Century: 1'
page.init(101); //'Century: 2'
page.init(2018); //'Год указан не правильно'
page.init(-1); //'Год указан не правильно'
page.init(2017); //'Century: 21'
