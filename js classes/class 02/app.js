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

// var email= document.getElementById('email');
// var password= document.getElementById('password');
// var statusauth= document.getElementById('message');
// var users=[];

// console.log(status.innerHTML = 'hello');

// function registerUser(){
//     console.log(email.value,password.value);

//     user = {
//         emailEl: email.value,
//         passEl:  password.value

//     }
//     users.push(user)
//     console.log(users);
// }

// function signup(){
//     var emailInput = email.value;
//     var passInput= password.value;
//     var message = '';
//     for(var i=0; i<users.length;i++){
//         var userObj= users[i]; 
//         if(userObj.emailEl === emailInput && userObj.passEl === passInput){
//              message = 'sucessful login';
//             //  status.innerHTML = message
//             console.log(message);
//             break;
//         }
//        else if(userObj.emailEl === emailInput && userObj.passEl !== passInput){ 
//         message = 'Password incorrect'    
//         console.log(message);
//             break;
//         }
//        else if(userObj.emailEl !== emailInput && userObj.passEl === passInput){
//          message = 'Email incorrect';

//         console.log(message);
//             break;
//         }

//         else{
//              message= 'User not authorized';
//             console.log(message);
//         }

//     }
//     console.log(message);
//     statusauth.innerHTML= message ;
// }

//1.slice
//2.substring
// var a= ['car','bike','suzuki','aeroplane','helocopter']
// var textCopy = a.slice(1,3);
// console.log(textCopy);


// //string method
// var b = 'hamzaali';
// var copyString= b.substring(0,1).toUpperCase();
// var nextText= b.substring(1)
// console.log(copyString);
// console.log(nextText);

// console.log(copyString+nextText);


//task 

// var text = prompt('Enter the text');

// // var upper=text.toUpperCase()
// // // console.log(text);
// // console.log(upper);

// //a quick work in london



// for(var i=0;i<text.length;i++){
//     var copyText1= text.charAt(0).toUpperCase();
//     var copyText2= text.slice(1).toLowerCase();
//     console.log(copyText1+copyText2);
// }






// a='hamza';
// console.log(a.charAt();







//Assignment

// var text= 'a quick browN fOX jumps OVER the lazy dOG';
// function paragraphCapitalize(a){
//          var word= a.split(" ");
//      console.log(word);    
//      return word.map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
//      console.log(word);    
// }

// var result=paragraphCapitalize(text);
// console.log(result);



//Time Events
// var h1= document.getElementById('heading');

// function clock(){
//     // console.log(i++);
//     // for(var i=0;i<59;i++){
//     //    if(i>5){
//             h1.innerHTML= i--;
            
//         }
//     }
//     }
    

// setInterval(clock,500)





//DOM

// var div1= document.getElementById('main-div');
// var allpara=div1.getElementsByTagName('p');

// // console.log(allpara);
// // var userText=prompt("Type the paragraph");
// // allpara[2].innerHTML = '3. '+userText;


// for(var i=0;i<allpara.length;i++){
//    var userType=prompt("Paragraph you write");
//    allpara[i].innerHTML=userType; 
//     // console.log(allpara[i]);

//     // allpara.innerHTML = 'hello';

// }

//flip Card game
// var img1= document.getElementById('img-1');
// var img2= document.getElementById('img-2');
// var img3= document.getElementById('img-3');
// var message=document.getElementById('message');
// var cardfirsttime= false;

// function flipCard(imgnumber){
//     console.log(imgnumber);
//     if(!cardfirsttime){
//         var numberGenerate = Math.ceil(Math.random()*3);
//         console.log(numberGenerate);
//         if(numberGenerate == 1){
//             img2.src='img2.png';
//             img1.src='img1.jpg';
//             img3.src='img2.png';
//             //two king
//          }
//         else if(numberGenerate == 2){
//             img1.src='img1.jpg';
//             img3.src='img2.png';
//             img2.src='img1.jpg';
//             //two joker 
//         }
//         else if(numberGenerate == 3){
//              img2.src='img2.png';
//              img1.src='img1.jpg';
//              img3.src='img2.png';
//          //two king
//             }
//             cardfirsttime= true;
//             if(numberGenerate == imgnumber){
//                 message.innerHTML = 'You Won the game';
//             }
//             else{
//                 message.innerHTML= 'You lose the game';
//             }
//      }
     

// }


// function reset(){
//     img1.src='card.jpg';
//     img2.src='card.jpg';
//     img3.src='card.jpg';
//     cardfirsttime= false;
// }


/////////////////////////////////////////////////
//childNode topic
// console.log(document.childNodes[1].childNodes[2].childNodes[13].childNodes[1].nodeName);

// var textAnchorChange=document.childNodes[1].childNodes[2].childNodes[13].childNodes[1];

// textAnchorChange.innerHTML='Change Text';

/////////////////////////////////////////////////////////
// create method and append
// console.log(document.childNodes[1].childNodes[2]);
// var body=document.childNodes[1].childNodes[2];

// var h1=document.createElement('h1');
// var textheading=document.createTextNode('shopping card');
// h1.appendChild(textheading);
// body.appendChild(h1);

// var item=document.getElementById('userText');

// console.log(document.childNodes[1].childNodes[2].childNodes[19]);
// var ul=document.childNodes[1].childNodes[2].childNodes[19];


// function todoTest(){
//     console.log(item.value);
//     if(item.value === ''){
//        console.log('Field is empty');
//     }

//     else{
//         var li=document.createElement('li');
//         var text=document.createTextNode(item.value);
//         li.append(text);
//         ul.appendChild(li)

//     }
// }

//Todo App
//replace add btn to save btn

// var items=document.getElementById('list');
// var ul=document.childNodes[1].childNodes[2].childNodes[21];
// var addBtn=document.getElementById('add-btn');
// var editItem='';

// console.log(addBtn);
// console.log(document.childNodes[1].childNodes[2].childNodes[21]);
// // console.log(document.childNodes[1].childNodes[2].childNodes[21].firstChild);
// function todoApp(){
//         // console.log(listrender);
//     if(items.value === ''){
//         console.log('Not available list');
//     }
//     else{

//         var li=document.createElement('li');
//         var textList=document.createTextNode(items.value);
//         li.appendChild(textList);
//         ul.appendChild(li);
        
//         var deleteBtn=document.createElement('button');
//         var edit=document.createElement('button')
//         var textDelete=document.createTextNode('delete');
//         var editText=document.createTextNode('edit');
//         deleteBtn.appendChild(textDelete);
//         edit.appendChild(editText);
      

//         // console.log(deleteBtn);
        
//         li.appendChild(deleteBtn);
//         li.appendChild(edit);
        
//         deleteBtn.setAttribute('onclick','deleteButton(this)');
//         edit.setAttribute('onclick','editButton(this)');
//     }
    
// }

// function deleteButton(targetEl){    
// // console.log('Hello delete',targetEl);
// var liEl=targetEl.parentNode;
// var ulEl=targetEl.parentNode.parentNode;
// ulEl.removeChild(liEl);
// }

// function editButton(targetEl){
//     console.log(targetEl.previousSibling.previousSibling.nodeValue);
//     editItem=targetEl;
//     // console.log(targetEl);
//     items.value=targetEl.previousSibling.previousSibling.nodeValue;
//     addBtn.innerHTML='Save';
//     addBtn.setAttribute('onclick','saveItems()')
// }


// function saveItems(){
//      console.log('Hello world save',editItem);
//      editItem.previousSibling.previousSibling.nodeValue = items.value
//      addBtn.innerHTML='Add';
//      addBtn.setAttribute('onclick','todoApp()');

//      items.value='';
//      editItem=undefined;
// }


//////////////////////////////////////////////////////////////////////////////
//filter project
// var filterText=document.getElementById('filterText')

// function filterList(){
// console.log(filterText.value);
// }
/////////////////////////////////////
//firebase learning

var emailEl= document.getElementById('email');
var passEl=document.getElementById('password');
var auth=firebase.auth();
var db = firebase.firestore();



//onsnapshot listener

function signupUser(){
    console.log(emailEl.value,passEl.value);
    
    auth.createUserWithEmailAndPassword(emailEl.value, passEl.value)
    .then(function(sucess){
    console.log(sucess);
    })


    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error);  
    });
}



function signin(){
    console.log(emailEl.value,passEl.value);
    auth.signInWithEmailAndPassword(emailEl.value, passEl.value)
    .then(function(user){
        console.log('user',user.user.uid);
        redirectToHome()
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error);
    });
}

function redirectToHome(){
    localStorage.setItem('userInfo',JSON.stringify(auth.currentUser))
    window.location.href='./home.html';
}


var todos=document.getElementById('todo-item');
function addTodoItem(){
    console.log(auth.currentUser.uid);
    var todos=document.getElementById('todo-item');
    db.collection("todo").add({
       todo: todos.value,
       uid: auth.currentUser.uid
    })
    .then(function(docRef) {
        
        console.log("Document written with ID: ", docRef.id);
        todos.value= '';
    
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

// function getAllTodos(){
//     db.collection("todo").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(auth.currentUser);  //find user data
//             // console.log('raw data', doc);
//             // console.log(`${doc.id} => ${doc.data().todo}`);
//             // console.log(`${doc.id} => ${doc.data()}`);
//             console.log(doc.id,doc.data());
//         });
//     });
// }

saveWithcustomDocId();
function saveWithcustomDocId(){
    db.collection('users').doc('LA').set({
        studentName: 'hamza',
        roll:  2643
    })
}





// function getCurrentUserTodos(){
//     db.collection("todo").where('uid', "==",JSON.parse(localStorage.getItem('userInfo')).uid)
//     .get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(auth.currentUser);  //find user data
//             // console.log('raw data', doc);
//             // console.log(`${doc.id} => ${doc.data().todo}`);
//             // console.log(`${doc.id} => ${doc.data()}`);
//             console.log(doc.id,doc.data());
//         });
//     });
// }
var unsubscribe ;

function getUserTodoRealtime(){
    var uid=JSON.parse(localStorage.getItem('userInfo')).uid;
    unsubscribe = db.collection("todo").where("uid","==",uid) //base data collection
      .onSnapshot(function(snapshot){  //realtime
         console.log('snapshot',snapshot);

         snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("Todo App: ", change.doc.data());
                makeListing(change.doc)
            }
            if (change.type === "modified") {
                console.log("Two Part Option is used: ",change.doc.id, change.doc.data());
                updateFROMDOM(change.doc);
            }
            if (change.type === "removed") {
                console.log("Removed Todo: ",change.doc.id, change.doc.data());
                deleteFromDom(change.doc.id);
            }
        });
     })
}

// function makeListing(data,docId){
// console.log(docId,'data',data);
// }

var divListing=document.getElementById('listing');

function makeListing(todoItem){
    var todoObj=todoItem.data();
         todoObj.id = todoItem.id;
    console.log(todoObj,'todoItem');
var p=document.createElement('p');
var paraText=document.createTextNode(todoObj.todo);
p.setAttribute('id', todoObj.id)
p.appendChild(paraText);

var editBtn = document.createElement('button');
var editTextNode =  document.createTextNode('edit');
editBtn.appendChild(editTextNode);
editBtn.setAttribute('onclick','editItem(this)')

var delBtn = document.createElement('button');
var delTextNode =  document.createTextNode('delete');
delBtn.appendChild(delTextNode);
delBtn.setAttribute('onclick','deleteTodo(this)')

p.appendChild(editBtn);
p.appendChild(delBtn);

divListing.appendChild(p);
}


function deleteTodo(itemToDelete) {
    console.log('item',itemToDelete.parentNode.id);
    var docId= itemToDelete.parentNode.id;
    db.collection("todo").doc(docId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

function deleteFromDom(id){
    var itemToDelete = document.getElementById(id)
    divListing.removeChild(itemToDelete);
    console.log(id,itemToDelete);
}


var todoBtn=document.getElementById('todo-btn');
var editkey;
function editItem(editTodo){
    editkey=editTodo.parentNode.id;
    console.log(editTodo.parentNode.childNodes[0].nodeValue);
    todos.value=editTodo.parentNode.childNodes[0].nodeValue;
    todoBtn.innerHTML='Save Todo';
    todoBtn.setAttribute('onclick','updateTodo()')

}

function updateFROMDOM(doc){
     var domUpdateLi=document.getElementById(doc.id);
     console.log(domUpdateLi.childNodes[0].nodeValue);
     domUpdateLi.childNodes[0].nodeValue = doc.data().todo;

}

function updateTodo(){
    console.log("******");
 db.collection("todo").doc(editkey).update({
     todo: todos.value
 })
 .then(function(){
    // var editPara=document.getElementById(editkey);

     todoBtn.innerHTML='Add Todo';
     todoBtn.setAttribute('onclick','addTodoItem()');
     todos.value='';
     editkey=undefined;
 })
}

function logoutUser(){
    unsubscribe();
    auth.signOut()
    .then(function(){
        localStorage.clear();
        window.location.href='./index.html'
    })
}






























































































































































