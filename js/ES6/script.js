////////////////////////////

//Scope
// for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1500)
// }
// for (var i = 0; i <= 5; i++) {
//     // setTimeout(() => {
//     //     console.log(i);
//     // }, 1500)
//     console.log(i);
// }

//Blocks and IIFE
//ES5
// (function() {
//     var c = 3;
// })();
// // console.log(c);
// //ES6
// {
//     const a = 1;
//     let b = 2;
//     var d = 5;
// }
// // console.log(a + b);
// console.log(d);


// //STRING IN ES6
// //ES6
// const firstname = 'hamza';
// const lastname = 'ali';
// const n = `${firstname} ${lastname}`;
// // console.log(n.startsWith('h'));
// // console.log(n.endsWith('h'));
// console.log(n.includes(' '));
// console.log(`${firstname} `.repeat(10));

// //ES5
// // var firstname = 'hamza';
// // var lastname = 'ali';
// // var n = firstname + lastname;
// // console.log(n.startsWith('h'));


//Arrow function
// const years = [1990, 1999, 1992, 1996, 1997, 1998];

// //ES5
// var ages5 = years.map(function(el) {
//     return 2020 - el;
// })
// console.log(ages5);



// //ES6
// let ages6 = years.map(el => 2020 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el} .`)
// console.log(ages6)

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index+1} ${age}`
// })

// console.log(ages6)

//Lecture: Arrow function 2
//ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number' + self.position + 'and it is' + self.color;
//             alert(str);
//         })
//     }
// }
// box5.clickMe();


//ES6
// var box6 = {
//         color: 'green',
//         position: 1,
//         clickMe: function() {
//             // var self = this;
//             document.querySelector('.green').addEventListener('click', () => {
//                 var str = 'This is box number' + this.position + 'and it is' + this.color;
//                 alert(str);
//             })
//         }
//     }
//box6.clickMe();


// var box7 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number' + self.position + 'and it is' + self.color;
//             alert(str);
//         })
//     }
// }
// box7.clickMe();



// function Person(name) {
//     this.name = name;
// }
// Person.prototype.myFriend5 = function(friends) {

//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this))
//     console.log(arr);
// }

// var friends = ['hamza', 'hassan', ';ahmed'];
// new Person('john').myFriend5(friends);
// //ES6
// Person.prototype.myFriend6 = function(friends) {

//     var arr = friends.map(el => `${this.name} is friends with ${el}`);
//     console.log(arr);
// }

// new
// Person('ali').myFriend6(friends);



//Destructuring
//ES5
// var john = ['john', 28];
// var name = john[0];
// var age = john[1];
// console.log(age)

//ES6
// const [name, year] = ['hamza', 1999];
// console.log(name)

// const obj = {
//         firstname: 'hamza',
//         lastname: 'ali'
//     }
//     // const { firstname, lastname } = obj;
//     //console.log(firstname)

// const { firstname: a, lastname: b } = obj;
// console.log(a);



// function calAge(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age]
// }
// const [age, retirement] = calAge(1999);
// console.log(age);
// console.log(retirement);


//Spread operator

// function addFourages(a, b, c, d) {
//     return a + b + c + d;
// }
// var sum1 = addFourages(18, 30, 12, 21);
// console.log(sum1);


// //ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourages.apply(null, ages);
// console.log(sum2);

// //ES6
// const sum3 = addFourages(...ages);
// console.log(sum3)

// const family1 = ['hamza', 'ali', 'ahmed'];
// const family2 = ['hassan', 'faizan', 'azhar'];
// const bigfamily = [...family1, 'fahad', ...family2];
// console.log(bigfamily);

// const h = document.querySelector('h1');
// const boxes = querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');


//Map
//new key value data structure data structure


// const question = new Map();
// question.set('question', 'what is the official name of the latest major javascript version?')
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong please try again!');

// console.log(question.get('question'));
// console.log(question.size);
// if (question.has(4)) {
//     // question.delete(4);
//     console.log('Answe 4 is here')
// }
// //question.clear;
// question.forEach((value, key) => {
//     console.log(`This is ${key}, and it's set to ${value}`);
// })

// for (let [key, value] of question.entries()) {
//     // console.log(`This is ${key}, and it's set to ${value}`)
//     if (typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`)
//     }
// }

// const ans = parseInt(prompt('Write the correct answer '))

// console.log(question.get(ans === question.get('correct')))


//Class Inheritance
//ES5
// function Player(name, age) {
//     this.name = name;
//     this.age = age;
// }
// var team1 = new Player('hamza', 21)
// var team2 = new Player('ali', 22)
// console.log(team1)

// Player.prototype.lastname = 'hassan';
//Player.prototype.greet=function(){
//console.log("hello this is "+this.name+"and age is"+this.age)
//}
// console.log(team1.lastname)

//ES6
// class Player {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("hello this is " + this.name + "and age is" + this.age)

//     }
// }

// const team1 = new Player('hamza', 21); //Specific class
// const pak = new Team('babar', 26); //generic class
// console.log(team1);

//New Concept inheritance

// class People {
//     constructor(name, job, country) {
//         this.name = name;
//         this.job = job;
//         this.country = country;
//     }
//     sayHi() {
//         console.log(`Hi ,I'm ${name}, I'm ${job} work in ${country}`)
//     }
// }
// class Player extends People {
//     constructor(name, age, job, country) {
//         super(name, job, country); //super initialize people cinstructor
//         // this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("hello this is " + this.name + "and age is" + this.age)

//     }
//     get nick() {
//         return this.nick.toUpperCase();
//     }
//     set nick(value) {
//         this.nickname = value;
//     }
//     static description() { //not work instance work direct class
//         console.log("This is description")
//     }
// }

// const team1 = new Player('hamza', 21, 'cricketer', 'pakistan');
// const team2 = new People('hamza', 'student', 'pakistan')


/////////////////////////////////////
//Arrays
// console.dir(Array);
// [1,2,3].splice
//Array.from()
// let str = "hello";
// console.log([...str]);
// const a = Array.from(str);
// console.log(a);

//ES5
// let programming = ['java', 'ruby', 'python'];
// for (let i = 0; i < programming.length; i++) {
//     console.log(`Use languages for data science ${programming[i]}`)
// }

//es6
// let programming = ['java', 'ruby', 'python'];
// for (let language of programming) {
//     console.log(`Use languages for data science ${language}`)
// }

//Testing Array in es6
// function sum() {
//     console.log(arguments);
// }
// sum(1, 2, 1)

// console.log(Array.from("Hello world"))

// const boxes = document.querySelectorAll('.box');
// //ES5 
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor =
//         'dodgerblue';
// });

// //ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue')



// //ES5
// // for (var i = 0; i < boxesArr5.length; i++) {
// //     if (boxesArr5[i].className === 'box blue') {
// //         //continue;
// //         break;
// //     }
// //     boxesArr5[i].textContent = 'I changed to blue'
// // }


// //ES6
// for (const cur of boxesArr6) {
//     //Major mistake  if (boxesArr6.className === 'box blue') {
//     // if (cur.className === 'box blue') {
//     if (cur.className.includes('blue')) {


//         continue;
//     }
//     cur.textContent = 'I change blue'
// }


// //ES5
// // var ages = [12, 17, 22, 8, 12, 11];
// // // var tages = ages.map(function(cur) {
// // //     return cur >= 18;
// // // })
// // // console.log(tages);

// // // console.log(tages.indexOf(true));
// // // console.log(ages[tages.indexOf(true)]);

// // //ES6
// // // ages.findIndex(index and intire array)
// // var tages2 = ages.findIndex(cur => cur >= 18);
// // console.log(tages2)
// // console.log(ages.find(cur => cur >= 18));

// //Destructuring array

// // const teamPakistan = [
// //     "Haris shoail(a/r)",
// //     "babar Azam(bat)",
// //     "fakhar zaman(bat)",
// //     "imam(bat)",
// //     "sarfraz(wk)",
// //     "naseem(bowl)"
// // ];
// // // let firstopener, secondopener, allrounder, onedown;
// // // [, , firstopener, secondopener] = teamPakistan;
// // // // console.log(teamPakistan[0], teamPakistan[2])
// // // console.log(allrounder, onedown, firstopener, secondopener);

// // let [, , striker, nonstriker, ...team] = teamPakistan;


// // console.log(striker, nonstriker, team);

// // let tmp = striker;
// // striker = nonstriker;
// // nonstriker = tmp;
// // [striker, nonstriker] = [nonstriker, striker]

// // console.log(striker, nonstriker);

// // let a = 'hamza';
// // let b = 'ali';

// // [a, b] = [b, a]
// // console.log(a, b)


//Spread operator

function addFour(a, b, c, d) {
    return a + b + c + d;
}
var sum = addFour(18, 11, 3, 8);
console.log(sum);

//ES5
// var ages = [18, 11, 12, 31];
// var sum2 = addFour.apply(null, ages);
// console.log(sum2)

// //ES6
// const sum3 = addFour(...ages);

// console.log(sum3);

// const familySmith = ['john', 'jane'];
// const familyMiller = ['Mary', 'viller'];

// const bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
// Array.from(all).forEach(cur => {
//     cur.style.color = 'purple'
// });


//Rest parameter 
//allow us arbitary number of arguments in a function


//ES5
// function fullAge() {
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(cur => {
//         console.log((2020 - cur) >= 18);
//     })
// }
// fullAge(2005, 1992, 1998);

// //ES6
// function fullAge2(...year) {
//     year.forEach(cur => console.log((2020 - cur) >= 18))
// }
// fullAge2(1999, 2003, 1992);

//ES5
function fullAge(limit) {
    // console.log(arguments);
    // var argsArr = Array.prototype.slice.call(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    // console.log(argsArr)
    // argsArr.forEach(cur => {
    //     console.log((2020 - cur) >= 18);
    // })
    // console.log(argsArr)
    argsArr.forEach(cur => {
        console.log((2020 - cur) >= limit);
    })
}
fullAge(2005, 1992, 1998);

//ES6
function fullAge2(...year) {
    year.forEach(cur => console.log((2020 - limit) >= 18))
}
fullAge2(1999, 2003, 1992)

//Default parameter