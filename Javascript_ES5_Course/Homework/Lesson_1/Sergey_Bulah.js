function getCentury (years) {
    const msg = "Год указан не правильно";
    let year = years + '';
    if(year > 2017) return msg;

    switch(year.length) {
        case 1:
                return 1 
            break
        case 2:
                return 1
            break
        case 3:
                let a = year.slice(1) == '00' ? 0 : 1;
                return +year.slice(0,1) + a
            break
        case 4:
                let b = year.slice(2) == '00' ? 0 : 1;
                return +year.slice(0,2) + b
             break
            

    }
}

function getYears() {
    for ( let i = 1; i <= 2018; i++ ) {

      console.log(getCentury(i))  
    }
}
console.time('FirstWay')
getYears()
console.timeEnd('FirstWay')




/*
function a (year) {
    if(year <= 100) {
        return 1
    }else if(year <= 200) {
        return 2
    } else if(year <= 300) {
        return 3
    }else if(year <= 400) {
        return 4
    }else if(year <= 500) {
        return 5
    }else if(year <= 600) {
        return 6
    }else if(year <= 700) {
        return 7
    }else if(year <= 800) {
        return 8
    }else if(year <= 900) {
        return 9
    }else if(year <= 1000) {
        return 10
    }else if(year <= 1100) {
        return 11
    }else if(year <= 1200) {
        return 12
    }else if(year <= 1300) {
        return 13
    }else if(year <= 1400) {
        return 14
    }else if(year <= 1500) {
        return 15
    }else if(year <= 1600) {
        return 16
    }else if(year <= 1700) {
        return 17
    }else if(year <= 1800) {
        return 18
    }else if(year <= 1900) {
        return 19
    }else if(year <= 2000) {
        return 20
    }else if(year <= 2017) {
        return 21
    } else {
        return "Год указан не правильно";
    }
}

function getYears() {
    for ( let i = 1; i <= 2018; i++ ) {

      console.log(a(i))  
    }
}
console.time('FirstWay')
getYears()
console.timeEnd('FirstWay')
*/

/*
function getCentury (years) {
    const msg = "Год указан не правильно";
    let year = years + '';
    if(year > 2017) return msg;

    if(year.length === 1) {
            return 1
    } else if (year.length === 2) {
            return 1
    } else if(year.length === 3) {
            let a = year.slice(1) == '00' ? 0 : 1;
            return +year.slice(0,1) + 1

    } else if(year.length === 4) {
            let b = year.slice(2) == '00' ? 0 : 1;
            return +year.slice(0,2) + 1

    }
}
function getYears() {
    for ( let i = 1; i <= 2018; i++ ) {

      console.log(getCentury(i))  
    }
}
console.time('FirstWay')
getYears()
console.timeEnd('FirstWay')
*/