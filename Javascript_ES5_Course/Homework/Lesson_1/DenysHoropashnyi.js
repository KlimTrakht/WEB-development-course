'use strict';

function getCenturyNumber(number) {
    if (isCenturyNumberValid(number)) {
        console.log(Math.ceil(number / 100));
    } else {
        console.log(' Year value is incorrect.\n Please, try again. ')
    }
}

function isCenturyNumberValid(number) {
    if (number >= 1 && number <= 2017) {
        return number;
    }
}

getCenturyNumber(1700);
getCenturyNumber(1905);