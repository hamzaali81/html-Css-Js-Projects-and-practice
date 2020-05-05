
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
// class Person6{
//     constructor(name,yearofbirth,job){
//         this.name=name;
//              this.yearofbirth=yearofbirth;
//              this.job=job;
//     }
//     calAge(){
//         var age= 2020-yearofbirth;
//         console.log(age)
//     }
//     static greetings(){
//         console.log("hey there")
//     }
// }

// var john2=new Person6('hamza',1990,'designer');
// Person6.greetings()

// john2.calAge();

//Sub classes
var Person5=function(name,yearofbirth,job){
this.name= name;
this.yearofbirth= yearofbirth;
this.job=job;
}

Person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear()-this.yearofbirth;
    console.log(age)
}
var Athelet5=function(name,yearofbirth,job,olympicGames,medals){
Person5.call(this,name,yearofbirth,job);
this.olympicGames=olympicGames;
this.medals=medals;
}

Athelet5.prototype=Object.create(Person5.prototype);

Athelet5.prototype.wonMedal=function(){
    this.medals++;
    console.log(this.medals)
}

var johnAthelete=new Athelet5('john',1999,'swimmwer',3,10);
johnAthelete.calculateAge();
johnAthelete.wonMedal()


//ES6
//ES6 Constructor
class Person6{
    constructor(name,yearofbirth,job){
        this.name=name;
             this.yearofbirth=yearofbirth;
             this.job=job;
    }
    calAge(){
        var age= new Date().getFullYear() - this.yearofbirth;
        console.log(age)
    }
    
}

class Athelet6 extends Person6{
    constructor(name,yearofbirth,job,olympicGames,medals){
 super(name,yearofbirth,job);
 this.olympicGames=olympicGames;
 this.medals=medals;
}
wonMedal(){
    this.medals++;
    console.log(this.medals)
}
}

var johnAthelete2=new Athelet6('john',1999,'swimmwer',3,10);
console.log(johnAthelete2)
















