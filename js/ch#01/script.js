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


// var a = 46;
// var b = 30;
// a = 50;
// console.log(a);
// console.log(b);
// var obj = {
//     name: 'hamza',
//     age: 30
// }

// var obj1 = obj;
// obj1.age = 50;
// console.log(obj.age);
// console.log(obj1.age)

//Function
// var age = 27;
// var obj2 = {
//     name: 'hamza',
//     city: 'karachi'
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'punjab';
// }

// change(age, obj2);
// console.log(age);
// console.log(obj2.city);

//Passing Function as arguments(First class function)
// var years = [1999, 2000, 1998, 1997];

// function calculateAge(arr, fn) {
//     var arrRes = [];
//     for (i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }

// function final(el) {
//     return 2020 - el;
// }

// function isFullAges(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.ceil(206.9 - (0.067 * el));

//     } else {
//         return -1;
//     }
// }

// var ages = calculateAge(years, final);
// var fullAges = calculateAge(ages, isFullAges);
// var HeartRate = calculateAge(ages, maxHeartRate)
// console.log(ages);
// console.log(fullAges);
// console.log(HeartRate);


//Function Returning function
// function interviewQuestion(job) {
//     if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ' Apply in teacher job');
//         }
//     }

//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + 'Apply in UX designer job');
//         }
//     }


//     if (job === 'driver') {
//         return function(name) {
//             console.log(name + 'Apply in driver job');
//         }
//     } else {
//         console.log(name + 'Available to call us')
//     }
// }


// var QuestionInterview = interviewQuestion('teacher');
// QuestionInterview('hamza');
// interviewQuestion('driver')('ali');


//IIFE

// (function(goodluck) {
//         var score = Math.random()]\ * 5; console.log(score > -5);
// })(5);
// console.log(score)

//Lecture:Clousers
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
// var retirementUs = retirement(66);
// retirementUs(1999);
retirement(66)(1999);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log('UX designer is ' + name)
        } else {
            console.log('Call next job');
        }
    }

}

interviewQuestion('designer')('Mark');