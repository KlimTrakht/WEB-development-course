function getCentury(year) {
    if (year >= 1 && year <= 2017) {
        return Math.ceil(year / 100);
    } else {
        console.log("Год указан не правильно")
    }
}