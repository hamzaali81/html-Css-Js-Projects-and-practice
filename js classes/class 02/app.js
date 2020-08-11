// function abc(a){

// console.log("Hello World "+a+" Pakistan ");
// }
// var test=abc("chai");
// console.log(test);

// var a=2;
// var b=2;
// console.log();

//Assignment a2+ 2ab + b2
// function square(num){
//     return  num*num;
// }

// function formulaCalculate(num1,num2){
//     var value1= square(num1);
//     var value2=square(num2);
//     var result= value1 + (2 * num1 * num2) + value2;
//     console.log(result);
// }

// formulaCalculate(2,3);

 //2.Assignment   h2=b2+P2

// var message= prompt("Enter the Message")
// var para= document.getElementById('p')
// para.innerHTML = message;

// function userMessage(){
//     var message=prompt("Enter the message");
//     var para= document.getElementById('p');
//     para.innerHTML= message;
// }

// // userMessage();
// var age= 14;
// console.log(age < 12);


// console.log(10>12);  //false
// console.log(23<45);  //true
// console.log(2>1);    //true
// console.log(1<2);    //true
// console.log(0>=0);   //true 
// console.log(12<2);   //false

// var value1 = +prompt("Enter Number")
// var value2 = +prompt("Enter Number") 
// var opt = prompt("Enter Mathematical Operation"); 
// var para= document.getElementById('p');
// var result;
// if(opt ==='+'){
//      result =value1 + value2;
//      para.innerHTML = result; 
// }
// if(opt ==='-'){
//     result =value1 - value2;
//     para.innerHTML = result; 
// }
// if(opt ==='*'){
//     result =value1 * value2;
//     para.innerHTML = result;
// }
// if(opt ==='/'){
//     result =value1 / value2;
//     para.innerHTML = result;
// }
// else {
//     console.log("Wrong Operator enter:");
// }

//Array
//push     //end add
//unshift  //beginning add
//pop      //delete last 
//shift    //delete first
// var team=['pakistan','india','africa'];
// team.pop();
// console.log(team);

//splice
//slice

// var fruits=['mango','orange','banana','watermelon','graph','Avacado','dates']
// // (index,how many elements);
// //delete orang
// fruits.splice(-1)
// console.log(fruits);

// Table
// var tableAdd= prompt("Enter which table you see");
// for(var i=1; i<=10; i++){
//     console.log(tableAdd+" * "+ i +" = "+tableAdd*i);
  
// }

//slice (index,length)

// var a='hamza ali';
// var b=a.slice(6,9);
// console.log(b);

// var d='hamza';
// var e=d.substring(0,4)
// console.log(e);

//First Character Uppercase 
// var cityName= 'iarachi';
// var firstchar=cityName[0].toUpperCase();
// var method1=cityName.slice(1)
// // console.log(method1);
// console.log(firstchar + method1);


//Double space
var userInfo=prompt("Enter some text");
console.log(userInfo);
for(var i=0; i<userInfo.length;i++){
    var charSpace=userInfo.slice(i,i+2)
    // console.log(charSpace);
    // console.log(userInfo[i]);
    if(charSpace=== '  '){
        console.log("You have double space. pleasse correct info!");
        break;
    }
}























































































































































































