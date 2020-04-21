//Array Helper
//ES5
//e.g#1
// var colors = ['red', 'green', 'blue']
// for (i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// //ES6
// colors.forEach(function(color) {
//     console.log(color)
// })

//e.g#2
//ES5
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
// for (i = 0; i < numbers.length; i++) {
//     console.log(sum += numbers[i]);
// }


//ES6
// numbers.forEach(function(number) {
//     sum += number
// })

// console.log(sum)
function adder(number) {
    sum += number;
}

numbers.forEach(adder)

console.log(sum)