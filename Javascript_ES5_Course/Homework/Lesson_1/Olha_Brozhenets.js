function getCentury(year) {
  var isValid = validateDate(year);
  if (!isValid){
    return;
  }
  if (year % 100 === 0){
    return year/100;
  } else {
    return Math.ceil(year/100);
  }
}

function validateDate(date) {
  if (date >= 1 && date <= 2017) {
    return true;
  } else {
    console.log('The date is incorrect');
    return false;
  }
}



console.log(getCentury(561));
console.log(getCentury('1821'));
console.log(getCentury(2500));
console.log(getCentury('abv'));