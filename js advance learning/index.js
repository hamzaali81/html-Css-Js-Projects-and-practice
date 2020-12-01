//undefined
// console.log(a);
// let a;
// console.log(a);

//Object

// var person = {
//     name: 'hamza',
//     age: 20
// }
// 

// var obj1 = Object.create(person,{
//     name: {value: 'mustafa'},
//     age: {value: 12}
// });
// console.log(obj1); 

// obj1.name = 'ahmed';
// console.log(obj1.hasOwnProperty('name'));

// console.log(person.hasOwnProperty('name'));



//Interview Question


//01
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
//   sayHi();

  //02

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

  //03
//   const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     //   console.log(this);
//     },
//     perimeter: () =>2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());

  //05
//   const bird = {
//     size: 'small',
//   };
  
//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };

//   console.log(mouse.bird.size);
//   console.log(mouse[bird.size]);
//   console.log(mouse[bird["size"]]);


//06
// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';

// console.log(d.greeting);

//07
// let a= new Number(2);

// console.log(a);

// let b = 2;
// let c=2
// console.log(a==b);
// console.log(a===b);
// console.log(a===c);

// letter
// let arr = [
//     {name: 'hamza',age: 12},
//     {name: 'ali',age: 02},
//     {name: 'ahmed',age: 92},
//     {name: 'raza',age: 62},
// ]

// console.log(Object.values(arr));

// Object.values(arr).map((el,i)=>console.log(Object.values(el['name']= i)))

// //
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


//   const john=Person('ali','j');
//   console.log(john);
  const member = new Person('Lydia', 'Hallie');
member instanceof Person
console.log(member instanceof Person);
  // // console.log(member);
//     Person.getFullName = function() {
//         console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   };
  
// //   console.log(Person.getFullName());
// // console.log(member);

// //method borrow
// Person.prototype.getFullName = function() {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
// };
//   console.log(member.getFullName());




//   function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }
 
  
//   const person = 'Lydia';
  
//   const age = 21;
  
//   getPersonInfo`${person} is ${age} years old`














