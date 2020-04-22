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
// var users = [
//     { name: 'hamza', id: 3 },
//     { name: 'ali' },
//     { name: 'hamza' }
// ]
// var user;
// // for (var i = 0; i < users.length; i++) {
// //     if (users[i].name === 'hamza') {
// //         user = users[i];
// //         break;
// //     }
// // }
// // console.log(user);
// //ES6
// var a = users.find(function(user) {
//     return user.name === 'hamza';
// });
// console.log(a)


// function Car(model) {
//     this.model = model;
// }

// var cars = [
//     new Car('Buick'),
//     new Car('Camamro'),
//     new Car('focus')
// ]
// var a = cars.find(function(car) {
//     return car.model === 'Buick'
// })
// console.log(a);


// var posts = [
//     { id: 1, title: 'New Post' },
//     { id: 2, title: 'Old Post' }
// ]
// var comment = { postId: 1, content: 'Great Post' };

// function postForComment(posts, comment) {
//     return posts.find(function(post) {
//         return post.id === comment.postId;
//     })
// }
// var a = postForComment(posts, comment);
// console.log(a);

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];
var computerCanrunProgram = true;
var onlySomeComputercanRunProgram = false;


// for (var i = 0; i < computers.length; i++) {
//     var computer = computers[i];
//     if (computer.ram < 16) {
//         computerCanrunProgram;
//     } else {
//         onlySomeComputercanRunProgram;
//     }

// }
// console.log(computer)
// var a = computers.every(function(computer) {
//     return computer.ram > 2;
// });
// console.log(a);


// var b = computers.some(function(computer) {
//     return computer.ram > 16;
// });
// console.log(b)

// var names = [
//     "hamza",
//     "ali",
//     "ahmed"
// ];
// var r1 = names.every(function(name) {
//     return name.length > 4;
// });
// console.log(r1);
// var r2 = names.some(function(name) {
//     return name.length > 4;
// });
// console.log(r2);

// function Field(value) {
//     this.value = value
// }
// Field.prototype.validate = function() {
//     return this.value.length > 0;
// }

// var username = new Field("hamza@");
// var password = new Field("123456");
// var birthday = new Field("10/10/2020")
//     // var a = username.validate();
//     // var b = password.validate();

// var fields = [username, password, birthday]
//     // console.log(a);
//     // console.log(b);
// var formIsValid = fields.every(function(field) {
//     return field.validate();
// })

// if (formIsValid) {
//     //allow user to submit 
// } else {
//     //form rejected
// }

//Reduce helper

// var numbers = [10, 20, 30];
// // var sum = 0;

// // for (var i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //     // console.log(sum)
// // }
// // console.log(sum)

// var a = numbers.reduce(function(sum, number) {
//     return number + sum;

// }, 0)
// console.log(a)

// var primaryColors = [
//     { color: 'red' }, { color: 'yellow' }, { color: 'green' }
// ];

// //['red','yellow','grren']

// var a = primaryColors.reduce(function(previous, primaryColor) {
//     previous.push(primaryColor.color)
//     return previous;
// }, [])
// console.log(a)

// "()()()()"
// "(((())))"
// "))))"
// "()))))"
// ")()("


// function balancedParens(string) {
//     return string.split("").reduce(function(previous, char) {
//         if (previous < 0) {
//             return previous;
//         }
//         if (char === "(") {
//             return ++previous;
//         }
//         if (char === ")") { return --previous }
//         return previous;
//     }, 0);
// }
// // var a = balancedParens("((((");
// balancedParens("(())((");
// console.log(a)

//const and let

function vowelCount(targetString) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var numbers = 0;

    for (var i = 0; i < targetString.length; i++) {
        if (vowels.includes(targetString[i])) {
            numbers++;
        }
    }
    return numbers;
}
var a = vowelCount('aertiouyresaruioiouaedgh');
console.log(a);