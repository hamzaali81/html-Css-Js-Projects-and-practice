// var john={
//     name:'hamza',
//     yearOfBirth:1999,
//     job:'teacher'
// }

// var Person= function(name,yearofbirth,job){
//     this.name=name;
//     this.yearOfBirth=yearofbirth;
//     this.job=job;
// }

// Person.prototype.lastname='steve';
// var mark=new Person('john',1888,'designer');
// console.log(mark.lastname);

//Object.create

// var personProto={
//     calculateAge: function() {
//         console.log(2020-this.yearofbirth);
//     }
// }
// var john=Object.create(personProto);
// console.log(john)
// john.name='ali';
// john.yearofbirth=1999;

// console.log(john.yearofbirth);
// var mark=Object.create(personProto,
//    { 
//    name:{value: 'ahmed'},
//    yearofbirth:{value:1999},
//    job:{value:'tailor'}

//    } )

// console.log(mark)

//Lecture: Passing function as argument

// var years=[1999,1992,1996,1995,1997,2005];

// function arrcal(arr,fn){
//     var arrRes=[];
//     for(var i=0; i< arr.length;i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function ageCal(el){
//     return 2020 - el;
// }

// function fullAge(el){
//     return el > 18;
// }

// function maxHeartRate(el){
//     if(el>=18 && el<=81){ return Math.round(206.9-(0.06*el));}
//     else{return - 1}

  
// }

// var ages= arrcal(years,ageCal);
// console.log(ages)

// var ageJud=arrcal(ages,fullAge);
// console.log(ageJud)

// var rate=arrcal(ages,maxHeartRate)
// console.log(rate)


// //Function returning function
//  function interviewQuestion(job){
//      if(job==='designer'){
//          return function(name){
//              console.log('hello'+ name +', wht do you do')
//          }}
        
//          else if(job==='teacher'){
//             return function(name){
//                 console.log('hello '+name+', wht do you do')
//             }
//      }
//  }


//  var teacherQuestion=interviewQuestion('designer');
//  var designerQuestion=teacherQuestion(' hamza');
// // teacherQuestion(' ali');
// interviewQuestion('teacher')('ahmed');


//IIFE
// function game(){
  
//     var score=Math.round()*18;
//     console.log(score>=5);
// }
// game();
// (function(){
// var score=Math.round()*10;
// console.log(score>=5);
// })();

//Clousers
// function ageCal(retirementAge){
//     var a=' Your retirement age years.'
//     return function(yearOfBirth){
//        var age=2020-yearOfBirth;
//        console.log((retirementAge-age)+a);
//     }
// }
// ageCal(66)(1990)

function interviewQuestion(job){
    return function(name){
        if(job==='designer'){
            console.log(job+' job available for Mrs '+name);
        }
    }
}

interviewQuestion('designer')('ali')
































