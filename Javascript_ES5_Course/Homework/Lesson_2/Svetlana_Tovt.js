function calculateArea(n) {
  let area;

  if (n >= 1) {
    area = Math.pow(n, 2) + Math.pow(n - 1, 2);
    return area;
  }

  return "Неверно введены данные. Введите число от 1 и более.";
}

console.log(calculateArea(1));
console.log(calculateArea(2));
console.log(calculateArea(5));
