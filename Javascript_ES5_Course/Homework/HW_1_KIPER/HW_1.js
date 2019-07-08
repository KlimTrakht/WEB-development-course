function getCentury ( year ) {
    if ( year > 2017 || year < 1) {
        console.log("Год указан не верно!");
        return false;
    }

    console.log (
        year % 100 === 0
        ? Math.trunc(year / 100)
        : Math.trunc(year / 100) + 1
    );

}

getCentury(0);
getCentury(1);
getCentury(2017);
getCentury(2018);
getCentury(101);
getCentury(1996);
getCentury(2005);
getCentury(1853);
getCentury(2303);
getCentury(1905);
getCentury(1700);