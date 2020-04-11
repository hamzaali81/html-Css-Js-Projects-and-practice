// //Data type
// //1.undefine data type
// var a;
// console.log(a);

// //2.Common Mistakes
// var

// function = 10;
// console.log(function);

// var
// if = 20;
// console.log(
//     if);


/**Function Constructor*/
// var john = {
//     name: 'hamza',
//     age: 21,
//     DOB: 1999
// }

// var Person = function(name, age, DOD) {
//     this.name = name;
//     this.age = age;
//     this.DOB = DOD;
//     // this.cal = function() {
//     //     console.log(2020 - this.DOB);
//     // }
// }

// Person.prototype.cal = function() {
//     console.log(2020 - this.DOB);
// }
// Person.prototype.LastName = 'Ahmed';

// var mark = new Person('ali', 22, 1999);
// var ali = new Person('hassan', 55, 1958);
// mark.cal();
// ali.cal();
// console.log(ali.LastName);


//Object.create
// var personProto = {
//     calculateAge: function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'hamza';
// john.age = 21;
// john.yearOfBirth = 1999;

// var jane = Object.create(personProto, {
//     name: { value: 'hamza' },
//     age: { value: 21 },
//     yearOfBirth: { value: 2000 }
// })

//Primitives vs Objects


var a = 46;
var b = 30;
a = 50;
console.log(a);
console.log(b);
var obj = {
    name: 'hamza',
    age: 30
}

var obj1 = obj;
obj1.age = 50;
console.log(obj.age);
console.log(obj1.age)

//Function
var age = 27;
var obj2 = {
    name: 'hamza',
    city: 'karachi'
}

function change(a, b) {
    a = 30;
    b.city = 'punjab';
}

change(age, obj2);
console.log(age);
console.log(obj2.city);