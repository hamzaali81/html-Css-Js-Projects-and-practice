var result=document.getElementById('result');
 var ul=document.childNodes[1].childNodes[2].childNodes[5];
var addBtn=document.getElementById('add-btn');

var editItem;
 // console.log();
 // console.log(document.childNodes[1].childNodes[2].childNodes[5]);
function addItem(){
    if(result.value===''){
        console.log("Empty string");
    }
    else{
        var li=document.createElement('li')
        var textNode=document.createTextNode(result.value)
         li.appendChild(textNode)

        ul.appendChild(li);
        result.value='';
        console.log(ul);


        var button=document.createElement('button');
        button.setAttribute('onclick','deleteBtn(this)')



        var textBtn=document.createTextNode('delete');
        button.appendChild(textBtn);

         var editBtn=document.createElement('button');
         var textEdit=document.createTextNode("edit")
         editBtn.appendChild(textEdit)
editBtn.setAttribute('onclick','edit(this)')

        li.appendChild(button);
        li.appendChild(editBtn);   

console.log(li);   
// li.setAttribute('onclick','deleteBtn')
    // ul.removeChild(li)
    }
}

console.log(document.childNodes);
function deleteBtn(targetE1){
    // console.log("Hello world",targetE1.previousSibling.previousSibling);
// console.log(targetE1.parentNode);
// console.log(targetE1.parentNode.parentNode);
var liParent=targetE1.parentNode;
var ulParent=targetE1.parentNode.parentNode; 

ulParent.removeChild(liParent)

//    ul.removeChild(li)

}


function edit(targetE1){
// console.log("Hello Edit");
// console.log(targetE1.previousSibling.previousSibling.nodeValue);
result.value=targetE1.previousSibling.previousSibling.nodeValue;
addBtn.innerHTML='Save';
editItem=targetE1;

console.log(editItem);
addBtn.setAttribute('onclick','saveResult()');

}

function saveResult(){
    console.log('Hello Save');
editItem.previousSibling.previousSibling.nodeValue=result.value;
    addBtn.innerHTML='Add';

addBtn.setAttribute('onclick','addItem()');
result.value='';
editItem=undefined;
}



// var div1=document.getElementById('div-1');
// var div2=div1.childNodes[1];
// var firstP=div2.childNodes[1];
// // var firstP=div2.nextSibling.nextSibling;
// console.log(div1,div2);
// console.log(div2.firstChild.nextSibling);
// console.log(div2.lastChild.previousSibling);
// console.log(div2.nextSibling);
// console.log(div1.nextSibling.nextSiblings);


// console.log(document.childNodes);


// parentNode.firstChild
// parentNode.lastChild


// var h1=document.createElement('h1');
// var heading=document.createTextNode("Hello World");

// h1.appendChild(heading);

// console.log(h1);
// div2.insertBefore(h1,firstP);





// var specialPara=document.getElementById('special');
// console.log(specialPara.parentNode.parentNode);
// div2.removeChild(specialPara)


// // nodeName for element name in capital
// // nodeValue for textNode



// // hasAttribute()
// // getAttribute()
// // setAttribute()




























