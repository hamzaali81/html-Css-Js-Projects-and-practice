// var a=document.getElementById('one');

// a.src='king.jpg';
var a=document.getElementById('one');
var b=document.getElementById('two');
var c=document.getElementById('three');
// var kingNumber=Math.ceil(Math.random()*3);
// console.log(kingNumber);

var kingNumber1=Math.floor(Math.random()*2+1);
var kingNumber2=Math.floor(Math.random()*2+1);
var kingNumber3=Math.floor(Math.random()*2+1);


console.log(kingNumber1);
console.log(kingNumber2);
console.log(kingNumber3);
function flip(){
// var kingNumber=Math.floor(Math.random()*3);
// console.log(kingNumber);

a.src=kingNumber1+'.jpg';
b.src=kingNumber2+'.jpg';
c.src=kingNumber3+'.jpg';

a.className='hidden';
b.className='hidden';
c.className='hidden';

// var kingNumber=Math.random()*3;
// console.log(kingNumber);


// a.style.width='300px';
}


function reset(){
    a.src='back.jpg';
b.src='back.jpg';
c.src='back.jpg';

a.className='hidden';
b.className='hidden';
c.className='hidden';
}


/////////////////////////////////////////////////////
//1.use only childnode change anchor tag

//2. change ! mark to @




//////////////////////
//Important topic in js

// var body=document.childNodes[1].childNodes[2];

// // console.log(document.childNodes[1].childNodes[2]);

// var element=document.createElement('button');
// console.log(element);

// var textNode=document.createTextNode('delete');
// console.log(textNode);


// element.appendChild(textNode);

// console.log(element);

// body.appendChild(element)



//////////////////////
//Task form field

/*
1.h1 shopping card
2.create input from with add button
3.create empty ul
4.clicking on add button first check if input is filled or not
5.If not filled show message that field is empty
6.make it with text value
*/

console.log(document.childNodes[1].childNodes[2].childNodes[9]);
var ul=document.childNodes[1].childNodes[2].childNodes[9];
var result=document.getElementById('result');
function Todo(){
 if(result.value===''){
     console.log("empty string");
     
 }
 else
    {
        var a=document.createTextNode(result.value);
        var b=document.createElement('li');
        b.appendChild(a);
        ul.appendChild(b);
        result.value=''
        var d=document.createTextNode('delete');
        var c=document.createElement('button');
        c.appendChild(d);
        ul.appendChild(c)

    }
}

/*
Task Make in create method
<p>
    Hello 
    <em></em>
    !
</p>
*/


