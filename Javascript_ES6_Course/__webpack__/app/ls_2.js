console.log('%cLesson ES6 2!', 'color: red; font-size: 25px; font-weight: bold;');

/**
 * ES6 Methods
 */

// let b = "wooh" + "oo".repeat(50);
// console.log(b);

// let b = "wooh" + "oo".repeat(50) + 'kk';
// console.log(b);



// console.log("butterfly".startsWith("butter")); // true
// console.log("butterfly".startsWith("fly")); // false
// console.log("butterfly".endsWith("fly")); // true
// console.log("butterfly".includes("fly")); // true
// console.log("butterfly".includes("butter")); // true
// console.log("butterfly".includes("caterpillar")); // false

// const addToCart = (item, number) => {
//     return Number.isFinite(number);
// };
// console.log(addToCart('shirt', 5));
// console.log(addToCart('shirt', Infinity));
// console.log(addToCart('shirt', NaN));
// console.log(addToCart('shirt', Math.pow(2, 54) + 1));
// console.log(addToCart('shirt', 'Infinity' ));
// console.log(addToCart('shirt', '0' ));

// const addToCart = (item, number) => {
//     return Number.isSafeInteger(number);
// };
//
// console.log(addToCart('shirt', Math.pow(2, 54) ));
//
// // -Math.pow(2, 54) -1  до Math.pow(2, 54) -1
//
//
// console.log( Math.pow(2, 54) );
// console.log( Math.pow(2, 54) + 1 );
// console.log( Math.pow(2, 54) + 2 );
// console.log( Math.pow(2, 54) + 3 );
// console.log( Math.pow(2, 54) + 4 );
// console.log( Math.pow(2, 54) + 5 );
// console.log( Math.pow(2, 54) + 6 );


/**
 * Modules
 */

// import { fellowship, total } from './fellowship';
// //
// // console.log(fellowship, total);

// import { add as add_2, multiply } from './math/index.js';
// console.log( add_2(2,5) );


/**
 * Инкапсуляция
 */
// var Person1 = function(name) {
//     // Приватная функция
//     var log = function(message) {
//         console.log(message);
//     };
//
//     // Публичное свойство
//     this.name = name;
//
//     // Публичный метод
//     this.logger = function(message) {
//         log('Public ' + message);
//     };
// };
//
// var p = new Person1('Max')
// console.dir( p );
//
// var Person = (function() {
//     // Приватная функция
//     var log = function(message) {
//         console.log(message);
//     };
//
//     var Person = function( name ) {
//         // Публичное свойство
//         this.name = name;
//     };
//
//     // Публичный метод
//     Person.prototype.logger = function(message) {
//         log('Public ' + message);
//     };
//
//     return Person
// })();
//
// var p = new Person('Alex')
// console.dir( p );


/**
 * Наследование
 */
//
// var Person = function(name) {
//     this.name = name + ' Doe';
// };
//
// Person.prototype.sayName = function() {
//     console.log(this.name);
// };
//
// var GreatPerson = function(name, phrase) {
//     Person.apply(this, arguments);
//
//     this.phrase = phrase;
// };
//
// GreatPerson.prototype = Object.create(Person.prototype);
//
//
// GreatPerson.prototype.sayPhrase = function() {
//     console.log(this.name + ' says: "' + this.phrase + '"');
// };
//
//
// var john = new Person('John');
//
// var jane = new GreatPerson('Jane', 'Hello, World!');
//
//
// console.dir(john);
// console.dir(jane);
//
// john.sayName();
// jane.sayName();
// jane.sayPhrase();

//
// var ParrotGrandfather = function() {};
// ParrotGrandfather.prototype = {
//     species: 'Parrot',
//     paws: 2
// };
//
// var ParrotFather = function() {};
// ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);
//
// // Сын попугай унаследовал всё у отца
// var ParrotSon = function() {};
// ParrotSon.prototype = Object.create(ParrotFather.prototype);
//
// var grandfather = new ParrotGrandfather();
// var father = new ParrotFather()
// var son = new ParrotSon();
//
// console.log(grandfather.species, father.species, son.species);
// // Parrot Parrot Parrot - все попугаи!
// console.log(grandfather.paws, father.paws, son.paws);
// // 2 2 2 - у каждого по 2 лапы
//
// // Дед меняет количество лап
// ParrotGrandfather.prototype.paws++;
// console.log(grandfather.paws, father.paws, son.paws);
// // 3 3 3 - у каждого теперь по 3 лапы
//
// // Отец меняет вид
// ParrotFather.prototype.species = 'eagle';
// console.log(grandfather.species, father.species, son.species);
// // Parrot eagle eagle - дед остался попугаем, отец и сын стали орлами
//
// // Сын уменьшил количество лап
// ParrotSon.prototype.paws--;
// console.log(grandfather.paws, father.paws, son.paws);
// // 3 3 2 - дед и отец остались при своих трёх лапах
//
// // Дед решил стать чайкой
// ParrotGrandfather.prototype.species = 'seagull';
// console.log(grandfather.species, father.species, son.species);
// // seagull eagle eagle - дед чайка, отец и сын орлы



/**
 * Полиморфизм
 */

// var Person = function(name) {
//     this.name = name;
// };
//
// Person.prototype.toString = function() {
//     return 'Person ' + this.name;
// };
//
// var john = new Person('John');
//
// var arr1 = [4, 2];
// var arr2 = [5, 3];
//
// arr1.toString = function() {
//     return 'Array ' + this.reduce(function(result, item) {
//         return result + '' + item;
//     });
// };
//
// console.log( john.toString() );
// console.log( arr1.toString() );
// console.log( arr2.toString() );


/**
 * Классы
 */
// import Animal from './Animal';
//
// class Lion extends Animal {
//     constructor(name, height, color) {
//         super(name, height);
//         this.color = color;
//     }
//
//     hello() {
//         console.log(`Hi! I'm ${this.name}!`);
//     }
// }
//
// var king = new Animal("Mufasa", 4.5);
// var son = new Lion("Simba", 2, 'red');
// king.hello();
// son.hello();



// class Calculator {
//     static add(a, b) {
//         return this
//     }
//     static multiply(a, b) {
//         return a*b;
//     }
// }
//
// const a = Calculator.add(5,7);
//
// console.log( a );


