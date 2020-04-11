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
var john = {
    name: 'hamza',
    age: 21,
    DOB: 1999
}

var Person = function(name, age, DOD) {
    this.name = name;
    this.age = age;
    this.DOB = DOD;
    // this.cal = function() {
    //     console.log(2020 - this.DOB);
    // }
}

Person.prototype.cal = function() {
    console.log(2020 - this.DOB);
}
Person.prototype.LastName = 'Ahmed';

var mark = new Person('ali', 22, 1999);
var ali = new Person('hassan', 55, 1958);
mark.cal();
ali.cal();
console.log(ali.LastName);