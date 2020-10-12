// console.log('hello');
//localStorage.setItem(key,value)
//localStorage.getItem(key)
// var username= document.getElementById('username');
// var rollNumber= document.getElementById('rollNumber');
// var h1=document.getElementById('greet-user');
// var arr= [];

// //Problem Solve
// function saveUser(){
//     var a= username.value;
//     var b= rollNumber.value
   
//     var student= {
//         stName: a,
//         rollNumber: b
//     }

//     var savedStudent = localStorage.getItem('students')
//     if(savedStudent){
//         savedStudent = JSON.parse(savedStudent);
//         arr = savedStudent
//     }
    
//     arr.push(student);
//     localStorage.setItem("students",JSON.stringify(arr))

//     // console.log(a);
// }

// var stUser=localStorage.getItem('students');

// if(stUser){
//     stUser = JSON.parse(stUser);
//     console.log(stUser);
//     h1.innerHTML = stUser.stName;
// }



//Assignment

// var fruits= ['apple','graps','mango'];
// localStorage.setItem('fruits',JSON.stringify(fruits))

// var fruitstore= localStorage.getItem('fruits')
// var fruitstore= JSON.parse(fruitstore)
// console.log(fruitstore[0]);
//  h1.innerHTML = fruitstore[0]
// var d=+ 2;

// console.log(d);

////////////////////////////////////////////////////////////////////
// Asynchronous JS
// var i=0;
// function greet(){
//     console.log(i++);
//     // console.log(i);
//     if(i>5){
//         clearInterval(clearTimer)
//         console.log('loading complete');
//     }
// }

// var clearTimer=setTimeout(greet,2000)


// // console.log('hello 2');


// var colors= ['green','blue','yellow'];

// console.log(colors.indexOf());

//Asynchronous

// signup(){

//     .then()
//     .then()
//     .then() 
// }

// var a=3;

// const firstAsync=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         var mathRandom= Math.ceil((Math.random())*6)
//         if(mathRandom % 2 === 0){

//             resolve(mathRandom)
//         } 
//         else{
//             reject(mathRandom)
//         }
//     },1000)
// });


// firstAsync
// .then((sucess)=>{
//     console.log('My promise complete even number',sucess);
// })
// .catch((b)=>{
//     console.error('Your Promise reject odd number',b);
// })

//Todo App

// var item = document.getElementById('item');
// console.log(item);
// var ul= document.childNodes[1].childNodes[2].childNodes[9];
// var add=document.getElementById('add');
// var editItem=''
// console.log(document.childNodes[1].childNodes[2].childNodes[9]);


// function addItem(){
//     if(item === ''){
//         console.log('field Empty');
//     }
//     else{
//         var li=document.createElement('li');
//         var text= document.createTextNode(item.value);
        
//         li.appendChild(text)
//         ul.appendChild(li)

//         var buttonDelete = document.createElement('button');
//         var deleteButtonText= document.createTextNode('delete')
//         buttonDelete.appendChild(deleteButtonText)
//         li.appendChild(buttonDelete)
//         buttonDelete.setAttribute('onclick','deleteButton(this)') 
//         console.log(buttonDelete);
        
//         var buttonEdit = document.createElement('button');
//         var editButtonText=document.createTextNode('edit');
//         buttonEdit.appendChild(editButtonText);
//         li.appendChild(buttonEdit)
        
//         buttonEdit.setAttribute('onclick','editButton(this)');

//     }
// }

// function deleteButton(targetEl){
//     var liEl=targetEl.parentNode;
//     console.log(liEl);
//     var ulEl= targetEl.parentNode.parentNode;
//     console.log(ulEl);
//     ulEl.removeChild(liEl)
// }

// function editButton(targetEl){
//         editItem=targetEl;

//     console.log(targetEl.previousSibling.previousSibling.nodeValue);
//     var listTarget=targetEl.previousSibling.previousSibling.nodeValue;
//     item.value = listTarget;
//      add.innerHTML= 'Save';
//      add.setAttribute('onClick','saveItems()')
//     }


// function saveItems(){
//     console.log(editItem.previousSibling);
//     // console.log(editItem.previousSibling.previousSibling.previousSibling.nodeValue);
//     editItem.previousSibling.previousSibling.nodeValue = item.value;
    
//     add.innerHTML='Add' ;
//     add.setAttribute('onClick','addItem()');
    
//     editItem = undefined ;
//     item.value = ''

// }




// Ten Minutes Todo App Challenge
//challenge not complete time 20:23

var items= document.getElementById('items');
var todoItems =document.getElementById('todoItems');
var add= document.getElementById('add');
var todoList=[];
var editIndex;



function saveUser(){
    console.log(items.value);
   todoList.push(items.value);
   console.log(todoList);
   renderList();
}


function renderList(){
    todoItems.innerHTML = '';
    // console.log(    todoItems.innerHTML = '' );
    for(var i=0;i<todoList.length;i++){
        var div =document.createElement('div');
        var span= document.createElement('span');
        var spanText = document.createTextNode(todoList[i])
       

        
var deleteBtn = document.createElement('button');
var deleteBtnText= document.createTextNode('delete');
deleteBtn.appendChild(deleteBtnText);
deleteBtn.setAttribute('onClick','deleteButton()')
div.appendChild(deleteBtn);

var editBtn = document.createElement('button');
var editBtnText= document.createTextNode('edit');
editBtn.appendChild(editBtnText);
editBtn.setAttribute('onClick','editButton('+i+')');
div.appendChild(editBtn);

div.appendChild(span)
span.appendChild(spanText);
todoItems.appendChild(div);
}
}

function deleteButton(){
   
    todoList.splice(0,1); 
    renderList();

}

function editButton(index){
    editIndex= index
    console.log(items.value);
    items.value = todoList[index];
    add.innerHTML = 'Save';
    add.setAttribute('onclick','saveTodo()');
}

function saveTodo(){
    todoList.splice(editIndex,1,items.value);
    items.value = '';
    add.innerHTML = 'Add';
    add.setAttribute('onClick','saveUser()')
    renderList()
}














































