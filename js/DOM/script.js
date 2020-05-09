var a=document.querySelector('#first');

// var b=Math.floor(Math.random()*6) + 1;
// console.log(b)
// var a=document.querySelector('#first').innerHTML='<b>'+b+'</b';

document.querySelector('.dice').style.display='none';
document.querySelector('.btn').addEventListener('click',function(){

    var dice=Math.floor(Math.random()*6) + 1;
var diceDOM= document.querySelector('.dice');

diceDOM.style.display='block';
diceDOM.src='dice-'+ dice +'.png';

// diceDOM.src='dice-1.png'
// diceDOM.src='dice-2.png';
// diceDOM.src='dice-3.png';
// diceDOM.src='dice-4.png';
// diceDOM.src='dice-5.png';




})

// var a='hamza'
// var b='ali'
// console.log(a+' '+b)