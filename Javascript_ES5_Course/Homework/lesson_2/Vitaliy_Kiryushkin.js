function calcArea(n){
    return n > 0 && (Math.pow(n,2) + Math.pow(--n,2));
}