//typeOf,indexOf,concat

//Array helper ES6
// var arr=["hamza","ali"];
// arr.forEach(el=>console.log(el));


// //Without Array Helper ES5
// var list=["karachi","lahore"];
// for(var i=0;i<list.length;i++){
//     console.log(list[i])
// }

// Example forEach

// var  lists=[99,18,70,80,17]
// var per=100;

// lists.forEach(el=>{
//     var result=el/per;
//     console.log(result);
    
// })

// var a=100;

// var b=[60,80,78];
// for (i=0;i<b.length;i++){
//     var c=b[i]/a;
//     console.log("result 9 class "+c);
    
// }


//Map Method
// var number=[1,2,3];
// var list=[];

// // for (var i=0; i<number.length;i++){
// //     var res=list.push(number[i]*2);
// //     console.log(res);
    
// // }

// var a=number.map(el=>{
// var b=el*2;
// console.log(b)
// })

// console.log(a);

// var cars=[
//     {model:'buick',rate:'cheap'},
//     {model:'camaro',rate:'expensive'},
// ]
// cars.map(el=>{
//     var models=el.model;
//     console.log(models)
// })



//Filter

// var items=[
//     {name:'banana',type:'fruit',quantity:4,price:30},
//     {name:'orange','type':'fruit',quantity:10,price:50},
//     {name:'cucumber',type:'vegetable',quantity:7,price:40}
// ]


// // var list=[];

// // // for(var i=0;i<items.length;i++){
// // //     if(items[i].type==='fruit'){
// // //       var a=  list.push(items[i]);
// // //         console.log(a);
// // //     }
// // // }


// // items.filter(el=>{
// //     if(el.type==='fruit'){
        
// //         //  console.log(el);
// // return true;
// //     }
// // })

// items.filter(el=>{
//     if(el.type==='fruit' && el.quantity > 8 && el.price > 41 ){
//            console.log(el);
                  
//     }
// })

//find Helper
// var  users=[
//     {name:'hamza'},
//     {name:'ahmed'},
//     {name:'ali'}
// ]
// var user;
// for(var i=0; i<users.length;i++){
//     if(users[i].name=='hamza'){
//         user=users[i];
//         console.log(user);
        
//     }
// }

// users.find(el=>{
// if(el.name==='hamza'){

//     console.log(el)
// }
// })

// function Car(model){
// this.model=model;
// }
// var cars=[
//     new Car('ferrari'),
//     new Car('bucati')
// ]
// cars.find(el=>{
//     var a=el.model;
//     console.log(a);
    
    
// })

// var posts=[
//     {id:1,comment:'nice pic'},
//     {id:2,comment:'Amazing'}
// ]

// var comments={postId:1,title:'old post'}

// function postComment(posts,comment){
//     return posts.find(function(post){
//         return post.id === comments.postId;
       
        
//     })

// }
// var a=postComment(posts,comments)
// console.log(a);

//Reduce Helper
// var numbers=[10,20,30,10];
// var sum=0;

// // for(i=0;i<numbers.length;i++){
// //     sum+=numbers[i];
// //     console.log(sum);
// // }

// var a=numbers.reduce((sum,el)=>{
// //   console.log(el+sum)
// return el+sum;
  
// },0);
// console.log(a);



//EVERY AND SOME HELPER


// var computers=[
//     {name:'Apple',ram:24},
//     {name:'Dell',ram:32},
//     {name:'hp',ram:4}
// ];

// var allComputersCanRunProgram=true;
// var onlySomeComputersCanRunProgram=false;


//  for (var i=0; i<computers.length;i++){
//      var comp=computers[i];
//      if(comp.ram<16){
//        allComputersCanRunProgram: false;  
//  console.log(allComputersCanRunProgram);
 
//     }
//      else{
//          onlySomeComputersCanRunProgram: true;
//          console.log(onlySomeComputersCanRunProgram);
         
//      }
//  }


 //Every Helper &&

//  computers.every(computer=>{
//         var a=computer.ram<16;
//         console.log(a);
        
//  })


// Some Helper ||
//  computers.some(comp=>{
//      var b=comp.ram<16;
//      console.log(b);
     
//  })


//Every and Some Helper Example

// var names=[
//     'Hamza','Ahmed','Ali'
// ]


// names.every(el=>{
//     var a=el.length< 4;
//     console.log(a);
    
// })

// names.some(el=>{
//     var a=el.length< 4;
//     console.log(a);
    
// })

//  function Field(value){
//      this.value=value;
//  }

//  Field.prototype.validate=function(){
//      return this.value.length > 0;
//  }
// var username=new Field('2cool');
// var password=new Field('my_pass')

// username.validate()
// console.log(username.validate());
// var fields=[username,password];

// var formsIsValid=fields.every(function(field){
//      return field.validate();
// });

// if(formsIsValid){
//     //allow user to submit!

// }

// else{
//     //show an error message
// }


// function balancedParens(string){
//       return !string.split("").reduce(function(prev,char){
//         if(char==="("){return ++prev}
//         if(char===")"){return --prev}       
//       } ,0)
// }


// var a= balancedParens("()");
// console.log(a);


//rest and spread parameter
// function addnumbers(numbers){

//Rest Parameter
//     function addnumbers(...numbers){

// return numbers.reduce((sum,number)=>{
//        return sum + number;

//     },0)
// }

// // var a=addnumbers([10,2,3,4,5,3])
// var a=addnumbers(10,2,3,4,5,3)

// console.log(a)

//Spread Operator

// var colors=['red','orange'];
// var defaultColors=['green','yellow']

// var a=defaultColors.concat(colors)
// console.log(a);


// var colors=['red','orange'];
// var defaultColors=['green','yellow']
// var a=[...colors,...defaultColors];
// console.log(a);


// Destructuring

// ES5
// var car={
//     model:2010,
//     type:'bussiness'
// }

// // var a=car.model;
// // var a=car.type;


// // console.log(a);

// //ES6
// const {model,type}=car;
// console.log(model,type);


// example2
// var savedFiled={
//     extension:'mp4',
//     name:'repost',
//     size: 14040
// }

// //ES5
// // function fileSummary(file){
// //     return `${file.name} This is taken extension ${file.extension}`
// function fileSummary({name,extension,size},{color}){
//     return `${name} This ${color} is taken extension ${extension}`

// }

// var a=fileSummary(savedFiled,{color: 'red'});
// console.log(a);


// //Array Destructuring
// var bike=['seventy','unique','honda'];


// // const [name,name2,name3,name4]=bike;
// // console.log(name4);
// // const {length}=bike;
// // console.log(length);

// const [name1,name2,...name]=bike;
// console.log(name)

//Destructuring
// const companies=[
//     {name:'Google',location:'Mountain view'},
//     {name:'facebook',location:'Menlo Park'},
//     {name:'uber',location:'San Francisco'}
// ]

// // var a=companies[0].location;

// const [ { location } ]=companies;
// console.log(location);


// const Google={
//     location: ['mountainview','hill park']
// }

// const{location:[locations]}=Google;

// console.log(locations);

//Example


//see
function signup({username,password,email,dateOfBirth,city}){
    //create new user
}

// other code
// other code
// other code
// other code
// other code

// const user={
//     username: 'myname',
//     password: 'mypassword',
//     email: 'hamza54834@gmail.com',
//     dateOfBirth: '27/2/1999',
//     city: 'karachi'
// }

// // var a=signup('myname','my_password','hamza54834@gmail.com',27/2/1999,'karachi')
// var a=signup(user)

// console.log(a);


//Game
const points=[
    [4,5],
    [10,1],
    [0,40]
]


// [
//     {x:4,y:5},
//     {x:10,y:1},
//     {x:0,y:40},
// ]

// points.map(pair=>{
//     // const x=pair.x[0];
//     // const y=pair.y[1];
//     const [x,y]=pair;
    
// })
var a=points.map(([x,y])=>{
    // const x=pair.x[0];
    // const y=pair.y[1];
    return {x:x,y:y};
    
})

console.log(a);




















































































































































































































































































































    




























































































    

























