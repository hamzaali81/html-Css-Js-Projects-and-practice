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

var posts=[
    {id:1,comment:'nice pic'},
    {id:2,comment:'Amazing'}
]

var comments={postId:1,title:'old post'}

function postComment(posts,comment){
    return posts.find(function(post){
        return post.id === comments.postId;
       
        
    })

}
var a=postComment(posts,comments)
console.log(a);

    




























































































    

























