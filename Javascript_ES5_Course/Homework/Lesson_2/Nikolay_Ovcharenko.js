function getPoligonSquare(n){
    var square = 0,
        num = 1;
    for (var i = 1; i < n ; i++) {
        if (n == 1) break ;
        square += (num*2);
        num += 2;
    }
    return square+num;
}