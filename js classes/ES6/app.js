// ES6 
// var 
// let
// const


//1.var
// var name='hamza';
// name ='ali'

// console.log(name);
// let name='hamza';
// name ='ali';
// console.log(name);

// var name='hamza';
// function checkUser(){    
//     var username=prompt("Enter your name");
//     // name=username
//      name=username //override
//     if(name==='ali'){
//         name='baber azam';
//         console.log(name);
//     }
//     console.log(name);

// }
// console.log(name);
// checkUser();
// console.log(name);



//2.Arrow function
// function abc(){
//     return var v=10;
// }


// var abc=(v)=> 
//  v='hello';
// // console.log(v);

// var test=abc();
// console.log(test);

//Advance JS
//IIFE
var score2=3;
(function(){
    var score=4;
    console.log(score);
    setTimeout(()=>{
        console.log(score3);

    },4000)
})()
        function test(){
                    var score1=4;
                    console.log(score1,score2);
                }
                test()
console.log(score2); 



//ES6 Advance
// forEach

// ES5
// var math=Math.ceil(Math.random()*3);
// // console.log(math);
// var colors=['red','blue','green'];
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i],i);
// }


// colors.forEach((el,index)=>{console.log(el,index);})





























