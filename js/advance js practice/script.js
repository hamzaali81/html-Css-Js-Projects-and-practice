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

var years=[1999,1992,1996,1995,1997,2005];

function arrcal(arr,fn){
    var arrRes=[];
    for(var i=0; i< arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function ageCal(el){
    return 2020 - el;
}

function fullAge(el){
    return el > 18;
}
var ages= arrcal(years,ageCal);
console.log(ages)

var ageJud=arrcal(ages,fullAge);
console.log(ageJud)













































