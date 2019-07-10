// Devtools console message ✨
console.log('%cLesson 2!', 'color: red; font-size: 25px; font-weight: bold;');

/**
 * Function Declaration
 */
// function myFuncName (x, y, z) {
//
// };

// console.log( myFuncName.name ); //myFuncName
// console.log( myFuncName.length ); //3
// console.log( myFuncName.prototype ); // {...}
//
// myFuncName.say = 0;
//
// myFuncName.say; //0

/**
 * Function Expression
 */

// var average = function (x, y) {
//     return (x+y)/2;
// };

// Функция также может быть анонимной.
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );


// sayHi("Вася"); // Привет, Вася
//
// //Function Declaration
// function sayHi(name) {
//   console.log( "Привет, " + name );
// }

// sayHi("Вася"); // ошибка!
//
// //Function Expression
// var sayHi = function(name) {
//     console.log( "Привет, " + name );
// }


// (function() {
//     //'use strict'; //явно указан
//
//     var age = +prompt("Сколько вам лет?", 20);
//
//     if (age >= 18) {
//         function sayHi() {
//             console.log( 'Прошу вас!' );
//         }
//     } else {
//         function sayHi() {
//             console.log( 'До 18 нельзя' );
//         }
//     }
//
//     sayHi(); //sayHi is not defined
//
// }());

/**
 *
 * this
 */
// function getIt() {
//     return this.x;
// }
//
// var obj1 = {
//     get: getIt,
//     x: 1
// }
// var obj2 = {
//     get: getIt,
//     x: 2
// }
//
// console.log( obj1.get() ); //1
// console.log( obj2.get() ); //2

// var obj = {
//     base : 13,
//     average : function (x, y) {
//         return (this.base+x+y)/3;
//     }
// };
//
// console.log( obj.average(2, 3) ); //6

// function getIt() {
//     'use strict'; //явно указан
//     console.log(this); //undefined
//     return this.x;
// }
//
// getIt();

/**
 * arguments
 */

// function myFuncName (x, y, z) {
//     return arguments;
// };
//
// myFuncName (1,2,3,4,5,6,7,8)


/**
 * Область видимости
 */
// function init() {
//     var name = "Mozilla"; // name - локальная переменная, созданная в init
//
//     function displayName() { // displayName() - внутренняя функция
//         console.log (name); // displayName() использует переменную, объявленную в родительской функции
//     }
//     displayName();
// }
// init();

/**
 * поднятие переменных
 */

// var a = 10;
//
// (function() {
//     console.log(a); //10
// })();

// var a = 10;
//
// (function() {
//     console.log(a); //undefined
//     var a = 11;
// })();
//
// var a = 10;
// (function() {
//     var a;
//     console.log(a);
//     a = 11;
// })();


/**
 * Замыкания (closures)
 */
// function makeFunc() {
//     var name = "Mozilla";
//     console.log('_1', name);
//
//     function displayName() {
//         console.log('_2', name);
//     }
//     return displayName;
// };
//
// var myFunc = makeFunc();

// Эмуляция приватных методов с помощью замыканий
// var Counter = (function() {
//     var privateCounter = 0;
//
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment: function() {
//             changeBy(1);
//         },
//         decrement: function() {
//             changeBy(-1);
//         },
//         value: function() {
//             return privateCounter;
//         }
//     };
// })();
//
// console.log( Counter.value() ); //0
// Counter.increment();
// console.log( Counter.value() ); //1
// Counter.decrement();
// Counter.decrement();
// console.log( Counter.value() ); //-1

/**
 * Наследование
 */

// function Human(name) {
//     if(! (this instanceof Human) ) {
//         return new Human(name);
//     }
//     this.name = name;
// }

// var alex = new Human('Alex');
//
// Human.prototype.say = function(what) {
//     console.log(this.name + ": " + what);
// };

// console.dir(Human);
//console.dir(alex);

// alex.say('Hi')
//console.log( alex.method );

// var alex = Human('alex');
// console.log( alex )

/**
 * Замена контекста apply, call
 */

// function Human(name) {
//     this.name = name;
// }
//
// Human.prototype.say = function(what) {
//     console.log(this.name + ": " + what);
// };
//
// var alex = Human('alex');
// alex.say('Hi'); //alex: Hi
//
// var jack = Human('jack');
//
// alex.say.apply(jack, ['Hi'] ); //jack: Hi
// alex.say.call(jack, 'Hi' ); //jack: Hi

// function human( name ) {
//     this.name = name;
//     console.log( this )
// }
//
// human.apply( {name: 'jack'},[ 'alex' ] );