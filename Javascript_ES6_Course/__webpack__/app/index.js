console.log('%cLesson 𝐄𝐒𝟞 3! 🚀', 'color: red; font-size: 25px; font-weight: bold;');
/**
 * Presenting a Set
 */
// var a = new Set();
//
// a.add(5);
// a.add(5);
// a.add(1);
//
// a.add("woohoo");
// a.add("woohoo");
// a.add({ x: 50, y: 200 });
// a.add({ x: 50, y: 200 });
//
// console.log(a.size);
// console.log(a);
// console.log(a.has({ x: 50, y: 200 }));

// let numbers = [5, 7, 8, 13, 17];
// let numSet = new Set(numbers);
//
//
// for (let element of numSet.values()) {
//     console.log(element);
// }


// let chars = "aweifawjeoanehmwofeuawhfhwuei";
// let chars_arr = chars.split("");
// let chars_set = new Set(chars_arr);
//
// console.log(chars_set);


/**
 * for .. of for .. in
 */
// Object.prototype.objCustom = function() {};
// Array.prototype.arrCustom = function() {};
//
// let iterable = [3, 5, , 7];
// iterable.foo = 'hello';
//
// console.dir(iterable);

// for (let i in iterable) {
//     console.log(i); // выведет 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (let i of iterable) {
//     console.log(i); // выведет 3, 5, 7
// }

// for (let i in iterable) {
//     if (iterable.hasOwnProperty(i)) {
//         console.log(iterable[i]); // выведет 0, 1, 2, "foo"
//     }
// }


/**
 * Presenting a Map
 */
// let a = new Map();
// let key_1 = 'string key';
//
// a.set(key_1, 'return value for a string key');
//
// //console.log(a);
//
// let key_2 = { a: 'key '};
// let key_3 = function() {};
//
// a.set(key_2, 'return value for an object');
// a.set(key_3, 'return value for a function');
//
// console.log(a);

// let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(twoDee);
// console.log(valMap);

// let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(twoDee);
//
// console.dir(valMap)
//
// for (let [key, value] of valMap.entries()) {
//     console.log(`${key} => ${value}`);
// }

// let string = "oewiuraowehpamennoawponeienuaperunaewopinu";
// let letters = new Map();
//
// for (let i=0; i<string.length; i++) {
//     let letter = string[i];
//     if (letters.has(letter) == false) {
//         letters.set(letter, 1);
//     } else {
//         letters.set(letter, letters.get(letter) + 1);
//     }
// }
// console.log(letters);

/**
 * Presenting a Set
 */
// let call = () => {
//     let secret = 'ES6 rocks';
// };
//
// console.log(secret); // error

// let call = () => {
//     let secret = 'ES6 rocks';
//
//     let reveal = () => {
//         console.log(secret);
//     };
//     reveal();
// };
//
// call();


// let call = () => {
//     let secret = 'ES6 rocks';
//
//     let reveal = () => {
//         console.log(secret);
//     };
//     return reveal;
// }
//
// let unveil = call();
// unveil();

// const budget = () => {
// //     let balance = 0;
// //
// //     const changeBal = (val) => {
// //         return balance += val;
// //     }
// //
// //     const deposit20 = () => changeBal(20);
// //     const check = () => balance;
// //
// //     return {
// //         deposit20: deposit20,
// //         check: check,
// //     };
// // };
// //
// // let wallet = budget();
// //
// // //wallet.deposit20();
// //
// // console.log(wallet.check());


/**
 * Iterators
 */
// const arrayIterator = (array) => {
//     let index = 0;
//
//     return {
//         next: () => {
//             if (index < array.length) {
//                 let next = array[index];
//                 index += 1;
//                 return next;
//             }
//         }
//     }
// };
// const it = arrayIterator([1, 2, 5]);
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const iterator = [1, 2, 3][ Symbol.iterator ]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


/**
 * Generator
 */
// function* letterMaker() {
//     yield 'a';
//     yield 'b';
//     yield 'y';
// }
//
// let letterGen = letterMaker();
//
// console.log(letterGen.next())
// console.log(letterGen.next())
// console.log(letterGen.next())
// console.log(letterGen.next())


// function* countMaker() {
//     let count = 0;
//     while (count < 3) {
//         yield count += 1;
//     }
// };
//
// let countGen = countMaker();
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);

// function* evens() {
//     let count = 0;
//     while(true) {
//         count += 2;
//         yield count;
//     }
// }
//
// let sequence = evens();
// console.log(sequence.next());
// console.log(sequence.next());


// function* createIterator() {
//     const first = yield 1; // step 1
//     const second = yield first + 2; // step 2
//
//     const third = yield second + 3; // step 3
//     yield third;
// }
//
// const iterator = createIterator();
//
// console.log(iterator.next());
// console.log(iterator.next(4));
// console.log(iterator.next(6));
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// function* evens() {
//     let count = 0;
//     while(true) {
//         count += 2;
//         var reset = yield count;
//         if (reset) {
//             count = 0;
//         }
//     }
// }
//
// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next( true ).value);
// console.log(sequence.next().value);


// function* evens( items ) {
//     //items.forEach( item => yield item + 1 ) // error
//
//     for (const item of items) {
//         yield item + 1
//     }
// }
//
// const iterator = evens([1,2,3,4]);
//
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);


//
// function* createIterator() {
//     const first = yield 1;
//     let second = null;
//
//     try {
//         second = yield first + 2; // 7
//     } catch ({ message }) {
//         console.log('Error:', message);
//         second = 6;
//     }
//
//     yield second + 3; // 1 + 3 || 6 + 3
// }
//
//
// const iterator = createIterator();
// console.log(iterator.next());
// console.log(iterator.next(5));
//
// console.log(iterator.throw(new Error('generator error')));
//
// console.log(iterator.next(1));
// console.log(iterator.next(1));
// console.log(iterator.next(1));


// function* createIterator() {
//     const first = yield 1;
//     const second = yield first + 2;
//     let third = null;
//
//     try {
//         third = yield second + 3;
//     } catch ({ message }) {
//         console.log('Error:', message);
//         third = 60;
//     }
//
//     const s4 = yield third + 4;
//     const s5 = yield s4 + 5;
//     const s6 = yield s5 + 6;
//     yield s6;
// }
//
// const iterator = createIterator();
//
// console.log(iterator.next());
// console.log(iterator.next(2));
// console.log(iterator.next(3));
// console.log(iterator.throw(new Error('generator error')));
// console.log(iterator.next(4));
// console.log(iterator.next(5));
// console.log(iterator.next(6));

// function* createNumberIterator() {
//     yield 1;
//     yield 2;
// }
//
// function* createUserIterator() {
//     yield 'Jon';
//     yield 'Joe';
// }
//
// function* createCombinedIterator() {
//     yield* createNumberIterator();
//     yield* createUserIterator();
//     yield true;
// }
//
// const iterator = createCombinedIterator();
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


/**
 * Promises
 */
// var promise = new Promise( (resolve, reject) => {
//
//
//
// } );
//
// const onFulfilled = () => {}
// const onRejected = () => {}
//
// promise.then(onFulfilled, onRejected);
// promise.then(onFulfilled);
// promise.then(null, onRejected);


// let p = new Promise((resolve, reject) => {
//     // то же что reject(new Error("o_O"))
//     throw new Error("o_O");
// });
//
// p.catch(alert); // Error:


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve('Resolved promise data');
//     }, 3000);
// });
//
// p.then(response => {
//     console.log(response)
// });


// let promise = new Promise((resolve, reject) => {
//
//     // через 1 секунду готов результат: result
//     setTimeout(() => resolve("result"), 1000);
//
//     // через 2 секунды — reject с ошибкой, он будет проигнорирован
//     setTimeout(() => reject(new Error("ignored")), 2000);
//
// });
//
// promise.then(
//         result => console.log("Fulfilled: " + result), // сработает
//         error => console.log("Rejected: " + error) // не сработает
// );


// const delay = (duration = 1000) => new Promise( resolve => setTimeout(resolve, duration));
//
//
// console.log('🔜 start');
//
// let promise = delay();
//
// promise.then(()=>{
//     console.log('🔜 first pass');
//     return delay(2000);
// }).then(()=>{
//     console.log('🔜 second pass');
//     return delay(3000);
// }).then(()=>{
//     console.log('🔜 third pass');
//     return delay(4000);
// })


// const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
//
// fetch(root, {method: 'GET'})
//     .then(response => {
//         // console.log(response);
//         return response.json();
//     }).then(json => console.log(json));


/**
 * Async
 */

// const delay = (duration = 1000) => new Promise( resolve => setTimeout(resolve, duration));

// ( async () => {
//     console.log('🔜 start');
//
//     await delay();
//
//     console.log('🔜 start 2');
//
//     await delay(3000);
//
//     console.log('🔜 start 3');
//
//     await delay(4000);
//
//     console.log('🔜 start 4');
//
//     // return Promise
// } )();
//
// console.log('🔜 start end');