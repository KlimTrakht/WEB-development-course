function getCentury(year) {
    if (year < 1 || year > 2017) {
        alert('Год указан неверно!')
        return null
    } else {
        return Math.ceil(year / 100)
    }
}
let century = getCentury(1701)
console.log(century)