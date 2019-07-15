function getCentury(y) {
    return (typeof year === 'number' && Number.isFinite(year) && !(year % 1) && year >= 1 && year <= 2017) ? Math.ceil(y / 100) : "Год указан не правильно"
}