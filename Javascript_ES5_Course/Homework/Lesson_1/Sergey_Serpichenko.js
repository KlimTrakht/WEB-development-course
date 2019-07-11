function getCentury(year){
	if(year>=1 && year<=2017){
		return (Math.ceil(year / 100));
	}else{
		return "Год указан не правильно";
	}
}
