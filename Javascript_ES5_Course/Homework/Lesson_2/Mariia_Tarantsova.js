function getSquare(n) {
    if(n < 0) return 'Недопустимое значение';
    var centerLine = 1 + (n - 1) * 2;
    var otherLine = centerLine;
    var square = otherLine;

    while ((otherLine) > 1)
    {
        otherLine = (otherLine - 2);
        square = square + otherLine * 2;
    }
    return square
}
getSquare(-1); // Недопустимое значение
getSquare(1); // 1
getSquare(2); // 5
getSquare(3); // 13
getSquare(4); // 25
getSquare(5); // 41
getSquare(6); // 61
getSquare(7); // 85