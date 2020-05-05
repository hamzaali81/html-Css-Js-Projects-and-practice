
//ES5 Constructor
// var john={
//     name: 'john',
//     yearofbirth: 1999,
//     job:'teacher'
// }
// var Person= function(name,yearofbirth,job){
//     this.name=name;
//     this.yearofbirth=yearofbirth;
//     this.job=job;
// }
// Person.prototype.age='hamza';

// var mark=new Person('hamza',2000,'designer');
// console.log(mark);

// console.log(mark.age);


//ES6 Constructor
class Person6{
    constructor(name,yearofbirth,job){
        this.name=name;
             this.yearofbirth=yearofbirth;
             this.job=job;
    }
    calAge(){
        var age= 2020-yearofbirth;
        console.log(age)
    }
    static greetings(){
        console.log("hey there")
    }
}

var john2=new Person6('hamza',1990,'designer');
Person6.greetings()

// john2.calAge();

