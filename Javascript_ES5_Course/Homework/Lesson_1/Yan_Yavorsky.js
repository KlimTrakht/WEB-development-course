function getCentury(year) {
  var century = Math.ceil(year / 100);

  if (year >= 1 && year <= 2017) {
    return century;
  } else {
    return 'Год указан не правильно';
  }
}

