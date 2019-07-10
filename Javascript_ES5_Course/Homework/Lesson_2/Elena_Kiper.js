function getArea ( n ) {
	
	return n > 0 
		? (n-1) * (n-1) * 2 + n*2 - 1 
		: "Введите значение больше 0!" ; 
}