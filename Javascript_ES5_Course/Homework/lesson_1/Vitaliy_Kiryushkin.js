function calcArea(n){
  return (pow(n,2) + pow(--n,2)) && n > 0
}
console.log(calcArea(3))