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
// function adder(number) {
//     sum += number;
// }

// numbers.forEach(adder)

// console.log(sum)

//MAP
//ES5
// var numbers = [1, 2, 3]
// var doubleNumbers = []

// // for (var i = 0; i < numbers.length; i++) {
// //     var a = doubleNumbers.push(numbers[i] * 2)
// //         // var a = numbers[i] = numbers[i] * 2;
// // }
// // console.log(a)

// var double = numbers.map(function(el) {
//     // doubleNumbers.push(el)
//     console.log(el * 2)
//         // return el * 2;
// })

// console.log(doubleNumbers)

// var cars = [
//     { model: 'Buick', price: 'Cheap' },
//     { model: 'Camro', price: 'expensive' }
// ]

// var prices = cars.map(function(car) {
//     return car.price
// })
// console.log(prices)

//filter
// var products = [
//     { name: 'olpers', type: 'milk' },
//     { name: 'orange', type: 'fruit' },
//     { name: 'valvet', type: 'chochlate' },
//     { name: 'suzuki', type: 'car' }
// ];

// var filterProducts = [];

// // for (var i = 0; i < products.length; i++) {
// //     if (products[i].type === 'fruit') {
// //         filterProducts.push(products[i])
// //     }
// //     // console.log(filterProducts)
// // }
// // console.log(filterProducts)
// var a = products.filter(function(product) {
//     return product.type === 'car';
//     // if (product.type === 'vegetable') {
//     //     return true;
//     // }
// })

// console.log(a)

// var products = [
//     { name: 'cucumber', type: 'vagetable', quantity: 0, price: 1 },
//     { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
//     { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
//     { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
// ];

// var a = products.filter(function(product) {
//     return product.type === 'vegetable' && product.quantity > 0 && product.price < 10
// });

// console.log(a);

// var b = products.filter((el) => {
//     return el.price > 0;
// })
// console.log(b);

//Find Array helper
//ES5
var users = [
    { name: 'hamza', id: 3 },
    { name: 'ali' },
    { name: 'hamza' }
]
var user;
// for (var i = 0; i < users.length; i++) {
//     if (users[i].name === 'hamza') {
//         user = users[i];
//         break;
//     }
// }
// console.log(user);
//ES6
var a = users.find(function(user) {
    return user.name === 'hamza';
});
console.log(a)