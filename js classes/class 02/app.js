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
// var userInfo=prompt("Enter some text");
// console.log(userInfo);
// for(var i=0; i<userInfo.length;i++){
//     var charSpace=userInfo.slice(i,i+2)
//     // console.log(charSpace);
//     // console.log(userInfo[i]);
//     if(charSpace=== '  '){
//         console.log("You have double space. pleasse correct info!");
//         break;
//     }
// }



//Texr replace
// var text="a quick hello world pakitan hello world zindabad";
// console.log(text);
// var replaceText='Lahore';
// for(var i=0; i<text.length;i++){
//     // console.log(text[i]);
//     var search=text.slice(i,i+11)
//     if(search === 'hello world'){
//         //logic          0,9
//         text = text.slice(0,i) + replaceText + text.slice(i+11);
//         console.log(text);
//     }
// }

//replace method in js

// var intialNumbers= 1000;
// var picInitialNumber= document.getElementById('heading');
// picInitialNumber.innerHTML= intialNumbers;

// var gameStatus= document.getElementById('game-status');

// function UserPart(){
//     var userAmount = +prompt("What is your bid amount");
//     var bidNumber=+prompt("What is your bid Number 1 to 3");
//     var randomNumberStored = randomNumber();
//     var Result = compareBidAmount(randomNumberStored,bidNumber);
//     resultShow(Result,userAmount) 
//   }

//   function randomNumber()
//   { 
//       var number=3;
//        var generateNumber = Math.ceil(Math.random()*number);
//        return generateNumber;
//     }
 
//    function compareBidAmount(userNumberCompare,bidNumberCompare){
//         match = false;
//         if(userNumberCompare === bidNumberCompare){
//             // intialNumbers +=user;
//             match = true;
//         }
//         return match;
//     }
 
//     function resultShow(Result,userAmount){
//         if(Result){
//             var updatedNumber= intialNumbers + userAmount;
//             picInitialNumber.innerHTML=updatedNumber;
//             gameStatus.innerHTML='Congrats You Win !' + userAmount + ' is to be Added to your Account'
//         }
//         else{
//             var updatedNumber= intialNumbers - userAmount;
//             picInitialNumber.innerHTML=updatedNumber; 
//             gameStatus.innerHTML='Sorry You Lost !' + userAmount + ' is to be Subtract to your Account'
//         }
//     }



// var emailEl=document.getElementById('email');
// var passwordEl=document.getElementById('password');
// var status= document.getElementById('status');
// let userlist=[];
// function UserRegiter(){
//     // var getValueE= emailEl.value;
//     // var getValueP =passwordEl.value;
//     // console.log(getValueE,getValueP);

//     let user={
//         userEmail: emailEl.value,
//         userPassword: passwordEl.value
//     }
//     userlist.push(user);

// }

//     if(userEmail === userEmail && userPassword){
//         status.innerHtml = "Login Sucessful"
//     }
//     else{
//         status.innerHtml = "Login Failed"
        
//     }

// }





//Date

// var rightNow = new Date();
// console.log(rightNow);

//How many days date of birth to today time

var email= document.getElementById('email');
var password= document.getElementById('password');
var users=[];
var status= document.getElementById('message');

function registerUser(){
    console.log(email.value,password.value);

    user = {
        emailEl: email.value,
        passEl:  password.value

    }
    users.push(user)
    console.log(users);
}

function signup(){
    var emailInput = email.value;
    var passInput= password.value;
    var message;
    for(var i=0; i<users.length;i++){
        var userObj= users[i]; 
        if(userObj.emailEl === emailInput && userObj.passEl === passInput){
             message = 'sucessful login';
             status.innerHTML = message
            console.log(message);
            break;
        }
       else if(userObj.emailEl === emailInput && userObj.passEl !== passInput){
         message = 'Password incorrect'    
        console.log(message);
            break;
        }
       else if(userObj.emailEl !== emailInput && userObj.passEl === passInput){
         message = 'Email incorrect';

        console.log(message);
            break;
        }

        else{
             message= 'User not authorized';
            console.log(message);
        }

    }
    console.log(users,status.innerHTML = message);
    status.innerHTML = message;

}
































































































































































































































