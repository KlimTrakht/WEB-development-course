let year = 200;
let century;

function getCentury(year) {
	if (year >= 1 && year < 2017) {
		century = Math.ceil(year / 100);
		console.log(century)
	} else {
		console.log('Год указан не правильно');
	}
}

getCentury(year);