// function Person(name,age,model){
//     this.name = name;
//     this.age = age;
//     this.model =model;

// }

// var family = new Person('hamza',1999,2020);
// console.log(family);


// //Object.create

// var personProto = {
//     calAge: function(){
//         console.log(2020-this.yearOfBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'hamza';
// john.yearOfBirth = 1999;
// console.log(john);

// var jane = Object.create(personProto,
//     {
//         name: {value: 'hamza'},
//         age: {value: 1999},
//         job: {value: 'designer'}

// }
//     )

//     console.log(jane);

//First class function

// var years = [1999,2000,1992,1996,1997];

// function yearOfBirth(arr,fn){
//     var arrRes = [];
//     for(var i=0;i<arr.length;i++){
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;

// }

// function calculateAge(el){
//     return 2020 - el;
// }

// function maxHeart(el){
//     return (206.9-(0.67*el))
// }

// function maxHeartAge(el){
//     return el >=169.22
// }

// var yearsCal = yearOfBirth(years,calculateAge);
// console.log(yearsCal);

// var maxHeartCal = yearOfBirth(yearsCal,maxHeart);
// console.log(maxHeartCal);

// var maxHeartAgeCal = yearOfBirth(maxHeartCal,maxHeartAge);
// console.log(maxHeartAgeCal);





//first class returning function


function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(`${name} is very lucky for ${job} job`);

        }
    }
}

// var teacherQuestion = interviewQuestion('designer');
// teacherQuestion('hamza')

var teacherQuestion = interviewQuestion('designer')('hamza')

var john= {
    name: 'hamza',
    job: 'designer',
    age: 26,
    Presentation: function(style,timeOfDay){
        if(style==='formal'){
            console.log(`Time of the day ${timeOfDay} and name of person ${this.name} my job ${this.job} and my age is ${this.age}`);
        }
          
        else if(style==='friendly'){
           console.log('Hey Watsup');
        }
    }
    
}

john.Presentation('formal','morning');

var emily={
    name: 'khan',
    job: 'dev',
    age: 32
}
john.Presentation.call(emily,'friendly','morning');




































