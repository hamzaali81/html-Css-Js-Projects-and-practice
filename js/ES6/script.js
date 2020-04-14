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
const years = [1990, 1999, 1992, 1996, 1997, 1998];

//ES5
var ages5 = years.map(function(el) {
    return 2020 - el;
})
console.log(ages5);



//ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el} .`)
console.log(ages6)

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index+1} ${age}`
})

console.log(ages6)