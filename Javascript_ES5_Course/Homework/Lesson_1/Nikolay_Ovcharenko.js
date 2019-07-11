var year = +prompt('Введите год от 1 до 2017');
console.log(getCentury(year));

function getCentury(y) {
    return (typeof year === 'number' && Number.isFinite(year) && !(year % 1) && year >= 1 && year <= 2017) ? Math.ceil(y / 100) : "Год указан не правильно"
}