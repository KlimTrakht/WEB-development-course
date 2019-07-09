function getCentury(year){
    const currentYear = new Date().getFullYear();
    let count_chars =year.toString().length;
    let arr = String(year).split("");
    let obj = arr.slice(0, -2);
    let century='';
    if (currentYear<year ) return 'ошибочный формат данных';
    for (key in obj){
        century += obj[key]
    }
    century=Number(century);
    switch (true){
        case (count_chars < 3):
            century =  1;
            break;
        case (count_chars >= 3):
            if (arr[count_chars-1]>0 || arr[count_chars-2]>0) century =  century+1;
            break;
        default:
            break;
    }
    return century;

}
// TEST
console.log(getCentury(101));
console.log(getCentury(1501));
console.log(getCentury(2018));
console.log(getCentury(1031));
console.log(getCentury(345456));


