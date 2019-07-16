/**
 * LET
 */
// let limit = 100;
// console.log(limit);

// part 2:
// let limit = 100;
// // limit += 100;
// limit = 200;
// console.log(limit);

/**
 * CONST
 */
// const limit = 200;
// limit = 100;

// scoping
// const emails = ['frodo@email.com', 'samwise@example.com', 'merry@example.com'];
// // emails = []; // error;
// emails.push('pippin@example.com'); // valid!
// console.log(emails);


/**
 * Block Scoping
 */
// let limit = 100;

// var limit = 200;
// {
//     var limit = 10; // error, changes the original limit.
//     console.log('backstage limit', limit);
// }
// console.log('venue limit', limit);


// let limit = 200;
// {
//     let limit = 10; // error, changes the original limit.
//     console.log('backstage limit', limit);
// }
// console.log('venue limit', limit);


// const limit = 200;
// {
//     const limit = 10; // error, changes the original limit.
//     console.log('backstage limit', limit);
// }
// console.log('venue limit', limit);


// function hello() {
//     let message = "Hello!";
//     console.log(message);
// }
//
// function greeting() {
//     let message = "How are you?";
//     console.log(message);
// }
//
// hello();
// greeting();

/**
 * Template Literals
 */

// let string = `god`;
// string = `god${ 1 + 2 }`; // god3
// string = `god${ 1 + 2 }
// ok
// `; // god3\nok

// let a = `<div>${1+2}</div><div></div>`;

//console.log(string);


/**
 * Spread Operator
 */
// let a = [20, 30, 40, 10, 50];
//
// let [ $1, $2, ...arg ] = a;
//
// let b = [ 10, 20, ...arg, 50 ];
//
// console.log(arg, b );


/**
 * Rest Parameters
 */
// function collect( ...a ) {
//     console.log(arguments);
//     console.log(a);
// }
//
// collect(1, 2, 3, 4, 5 );


// function collect( $1, ...a ) {
//     console.log(a);
// }
//
// collect(1, 2, 3, 4, 5 );


/**
 * Destructuring Assignment on Objects
 */

// let king = {
//     name: 'Mufasa',
//     kids: 1
// };
//
// let { kids, name } = king;
//
// let kids, name;
//
// let king = {
//     name: 'Mufasa',
//     kids: 1
// };
//
// ( { kids, name } = king );
//
// let king = {
//     name: 'Mufasa',
//     kids: {
//         name: 'Mufasa',
//         kids: [ 'web', 'webpack' ]
//     }
// };
//
// let {
//     kids: {
//         kids: [ $1, $2 ]
//     }
// } = king;


// let options = {
//     title: "Menu",
//     width: [ 1,2 ],
// };
//
// function showMenu( {title="Title Name", width:w=100, height:h=200} = {} ) {
//     console.log( `${title} ${w} ${h}`);
// }
//
// showMenu(options);


/**
 * Arrow Functions
 */
// var f = () => {};
// (() => {
//     console.log(this); //undefined
// })();

// setTimeout(() => {
//     console.log("Woohoo!")
// }, 3000);


// Функции-стрелки не имеют своего arguments
// function f() {
//     let showArg = () => {
//         console.log( arguments[0] )
//     };
//     showArg();
// }
// f(2); // 1

// Функции стрелки нельзя запускать с new


/**
 * MAP
 */
// let numbers = [1, 4, 9];
// let doubles = numbers.map((currentValue, index, array) => currentValue * 2, thisArg = void(0) );
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]

/**
 * FILTER
 */
// let points = [7, 16, 21, 4, 3, 22, 5];
//
// let highScores = points.filter( ( n ) => {
//     return n > 15
// } ) ;
//
// let highScores = points.filter(n => n>15);
//
// console.log(highScores);
