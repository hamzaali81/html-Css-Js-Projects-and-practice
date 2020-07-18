//////////////////////////////////////
// Chapter 43-48







//3

// var b=[];
//     var a=['jhone','Doe','Mark','james'];
//     var list=document.getElementById('list');
//     for(var i=0;i<a.length;i++){

//         var li=document.createElement('li');
//         list.appendChild(li)
//         console.log(list);
//         // list.innerHTML=a[i];
//     li.innerHTML=a[i]
//         console.log(a[i]);
//         // console.log(a);
//    var button=document.createElement('button');
//    var textBtn=document.createTextNode('delete');
//    button.appendChild(textBtn)
//    li.appendChild(button)
//         li.setAttribute('onclick','deleteBtn()')
//     }



// function deleteBtn(){
        
//     li.innerHTML='';
        
// }

// var studentName=['john','Doe','mark','james'];
// var ul=document.getElementById('list');
// console.log(ul.childNodes);

// for(var i=0;i<studentName.length;i++){
//     // studentName[i];
//     // console.log(a);
//     ul.innerHTML=studentName[i];
    
// }




// var c=0;
// var result=document.getElementById('result');

// function increment(){
// result.innerHTML=++c;
// }
// function decrement(){
// result.innerHTML=--c;
// }


//////////////////////////////////////////
// Chapter 49-52
// var username=document.getElementById('username');
// var password=document.getElementById('password');
// var submit=document.getElementById('submit');

// function signup(){
//     if(username.value=='hamza' && password.value==123456){
//       submit.setAttribute('href','web.html')
//         }
//     else{

//              submit.setAttribute('href','sorry.html')

//     }
// }





// function see(){
//     var hide=document.getElementById('hide');
//     var hidepara='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur doloremque repudiandae, deserunt eius blanditiis enim odit magnam at in.';
// hide.innerHTML=hidepara;
// }




//////////////////////////////////////////////////////////////////////
//58-57

// var mainCon=document.getElementById("main-content");
// // var render=document.getElementsByClassName('render');
// var p=document.getElementsByClassName('render');
// console.log(p);
// console.log(mainCon.children);
// var p=mainCon.getElementsByTagName("p");
// var a=mainCon.children;
// console.log(p);

// for(var i=0;i<p.length;i++){

   
// }


function nameCalling(){
    var firstname=document.getElementById('first-name');
    firstname.value='hamza';
}
function email(){
    var email=document.getElementById('email');
    email.value='hamza54834@gmail.com';
}
function lastnameCalling(){
    var lastname=document.getElementById('last-name');
    lastname.value='ali';
}

// mainCon.innerHTML=p;
// console.log(mainCon.children);






var targetnode=document.getElementById('form-content')
console.log(targetnode.nodeType);


var lastname=document.getElementById('last-name');
console.log(lastname.nodeType);


var lastName=document.getElementById('lastName');

console.log(lastName.parentNode.childNodes[3]);
console.log(lastName.nextSibling.nextSibling);
console.log(lastName.previousSibling.previousSibling);

var update=lastName.parentNode.childNodes[3];
update.innerHTML="LastName: Ali"
console.log(update);


var maincontent=document.getElementById('main-content');

console.log(maincontent.firstChild);
console.log(maincontent.lastChild);




var email=document.getElementById('email');
console.log(email.parentNode);
console.log(email.nodeType);





