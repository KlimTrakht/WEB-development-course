function calcCentury(year) {
    if (isNaN(parseInt(year))===false && 1 <= year && year <= 2017) {
        return Math.ceil(year/100);
    }
    else {
        return 'Год указан неправильно'
    }
}