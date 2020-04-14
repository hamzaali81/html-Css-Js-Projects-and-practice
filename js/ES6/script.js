////////////////////////////
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



function Person(name) {
    this.name = name;
}
Person.prototype.myFriend5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this))
    console.log(arr);
}

var friends = ['hamza', 'hassan', ';ahmed'];
new Person('john').myFriend5(friends);
//ES6
Person.prototype.myFriend6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new
Person('ali').myFriend6(friends);