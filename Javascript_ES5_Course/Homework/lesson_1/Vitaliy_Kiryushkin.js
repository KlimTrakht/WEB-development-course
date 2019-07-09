function getCentury(year){
    if( year < 1 || year > 2017){
        console.log('Год указан не правильно');
    }else{
        return Math.ceil(year/100)
    }
}
console.log(getCentury(101))