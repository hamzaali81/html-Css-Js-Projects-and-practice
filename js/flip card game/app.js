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