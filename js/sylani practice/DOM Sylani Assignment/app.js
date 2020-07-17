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


var mainCon=document.getElementById('main-content');
console.log(document.childNodes[1].childNodes[2].childNodes[15].childNodes[5].childNodes[2]);

var a=document.childNodes[1].childNodes[2].childNodes[15].childNodes[5];

mainCon.innerHTML=a;



















