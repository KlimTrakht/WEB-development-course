function getCentury ( year ) {
    
    if ( year > 2017 || year < 1)
        return "Год указан не верно!";

    if( year % 100 === 0 )
      return Math.trunc(year / 100);

    return Math.trunc(year / 100) + 1;
    
}

console.log(getCentury(0));
console.log(getCentury(1));
console.log(getCentury(2017));
console.log(getCentury(2018));
console.log(getCentury(101));
console.log(getCentury(2303));
console.log(getCentury(1905));
console.log(getCentury(1700));
