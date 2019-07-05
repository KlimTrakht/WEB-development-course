//ES5

// Функция возвращающая класс объекта
// classOf([]) === "Array", classOf('') === "String", classOf(null) === "Null" и т. д.
function classOf(elem) {
    return Object.prototype.toString.call(elem).slice(8, -1);
};

function defineCentury(year) {
    if (classOf(year) !== "String" &&
        classOf(year) !== "Number" &&
        classOf(year) !== "Date") return "Год указан не правильно";

    //Если аргумент является экземпляром класса Date, то извлекаем его год
    var innerYear = year.getFullYear ? year.getFullYear() : year;

    innerYear = innerYear.toString();

    //Отсеиваем ввод дробных чисел
    if (~innerYear.indexOf(".")) return "Год указан не правильно";

    //Отсеиваем пустые строки и проверяем аргумент на вхождение в промежуток от 1 до 2017
    if (innerYear && innerYear > 0 && innerYear < 2018) {

        //Числа до 100 (включительно) возвращают 1 (1-ый век)
        if (innerYear.length < 3 || innerYear === "100") return 1;

        //Выделяем сотни для дальнейшего определения века
        var hundreds = innerYear.slice(0, -2);

        //Проверяем окончания лет на "00"
        //То есть 1799, то возвращаем 18-ый век, 1800 - 18-ый век, 1801 - 19-ый век.
        return innerYear.slice(-2) === "00" ? +hundreds : +hundreds + 1;
    }

    return "Год указан не правильно"
};