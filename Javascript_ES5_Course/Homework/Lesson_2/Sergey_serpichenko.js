function calcPolygon (n) {
	return n >= 1 ? (Math.pow(n, 2) + Math.pow((n - 1), 2)) : 'Значение введено не верно';
}
