function getArea(n) {
    var isInt = n === parseInt(n, 10);

    if (!isInt || n < 1) {
        return "Некорректное значение n";
    }

    return 2*n*n - 2*n + 1;
}
