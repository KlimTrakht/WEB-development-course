// Devtools console message ✨
console.log('%cLesson 3!', 'color: red; font-size: 25px; font-weight: bold;');

// var myArray = [];
// var cities = ['Moscow', 'Almaty', 'Kiev', 'London', 'Ottawa'];

// var a = new Array();
// var b = new Array("Hey", "You", "Me");
//
// var c = new Array(3); // [,,]

// var cities = ['Moscow', 'Almaty', 'Kiev', 'London', 'Ottawa'];
//
// cities.length = 10;
// cities.length; //10
// cities[11] = 'h';
// cities.length; //11


/**
 * Методы массива
 */

// var a = [1, 'b', 'string', {'a': 'a', 'b': 'b', 'c': 'c'}, ['a', 'b', 'c']];
// delete a[2];
// a; //[1, 'b', , {'a': 'a', 'b': 'b', 'c': 'c'}, ['a', 'b', 'c']]
// a[4][0] //'a'

//splice
//var cities = ['Moscow', 'Almaty', 'Kiev', 'London', 'Ottawa'];
//cities.splice( 1, 2 ); //['Moscow', 'London', 'Ottawa']

//cities[ cities.length ] = 'Dnepr';



// var a = [];
// a[5] = 5;
// for (var x in a) {
//     console.log(a[x]);
// }

// for (var i=0; i < a.length; i++) {
//     console.log(a[i]);
// }


// reduce / reduceRight
// function adder(accumulator, currentValue, index, array) {
//     return accumulator + currentValue
// }
// [9, 2, 5, 6, 7].reduce(adder, 6 );


//concat
// var c = [9, 2, 5, 6, 7];
// var a = [1, 2];
// var d = c.concat(a, 'end');


//push
// var c = [9, 2, 5, 6, 7];
// console.log( c.push(8) );
// console.log( c );

//pop
// var c = [9, 2, 5, 6, 7];
// c.pop();
// c;// [9, 2, 5, 6];


// join
// var c = [9, 2, 5];
// console.log(c.join(',') );


// sort
// var hey = [1, 12, 5, 87, 32, 19];
// //hey.sort();

// function compare(a, b) {
//     return a - b;
// }
// hey.sort(compare);
// console.log(hey);


//revers
// var hey = [1, 12, 5, 87, 32, 19];
// hey.reverse();

// map
// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(currentValue, index, array) {
//     return currentValue * 2;
// } );


/**
* Ассоциативный массив
*/

// var a = [1, 2];
// a["property"] = 45;
//
// console.log(a);
// console.log(a.length);


/**
 * Регулярные выражения
 */

// new RegExp("\\w+c", "igm");
// var re = /\w+c/igm;


// test
// var reg = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/; // любой email
// console.log( reg.test("dfdfd") ); // false
// console.log( reg.test("dfdfd@dfdgfd") );// false
// console.log( reg.test("dfdfd@dfdgfd.sfdfgddgwew")); // false
// console.log( reg.test("test@example.com") );// true
// console.log( reg.test("test@example.com.com") );// true
// console.log( reg.test("test@example.com.com.") );// true

//exec
// var reg = /\d/g; // поиск цифры глобально
// var input = "fsfdsds8sd8dsfds##$sdD"; // случайный набор данных
// var arr; //Создали пустой массив
// while ( (arr = reg.exec(input)) != null ) {
//     console.log(arr['index']); // выводим первый элемент массива arr
// }

//search
// console.log( "asdffdRs".search(/\d{2,8}/)  )

// match
// console.log( "asdffdRf3454352454Dsdcg;343w$#%s2234s".match(/\d{2,8}/)  );

//replace
// var str = "Apple thinks different because apple is different";
// str.replace("Apple", "Google");
// console.log( str );


// capture
//console.log( 'Klim Trakht'.replace(/(\w+)\s(\w+)/, 'my name is $2, $1' ) );

// function x(m) {
//     return "+" + m.toUpperCase();
// }
// console.log("DFDERERFdfffSFDFFfdfFvbFeRgfhgdfg".replace(/[a-z]/g, x) );


//split
// console.log( "Apple thinks different because apple is different".split(/apple/i) );