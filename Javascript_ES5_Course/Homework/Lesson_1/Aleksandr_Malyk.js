function getCentury(year) {
    var isInt = year === parseInt(year, 10);

    if (!isInt || year > 2017 || year < 1) {
        return "Год указан не правильно";
    }

    var rem = year % 100;
    return (year - rem) / 100 + (rem ? 1 : 0);
}
