/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var score1=0;
// var score2=0;
var scores,activePlayer,roundScore;
init();
// var dice= 6;
// var dice=Math.floor(Math.random() * 6) + 1;
// console.log(dice)
// console.log(Math.floor(Math.random()*6+1));


//  document.querySelector('#current-' + activePlayer).textContent=dice;
// document.querySelector('#current-'+ activePlayer).innerHTML='<em>' + dice + '</em>';
// document.querySelector('#current-'+ activePlayer).textContent='<em>' + dice + '</em>';


// var x=document.querySelector('#score-0').textContent;

// console.log(x)

// document.querySelector('.dice').style.display='none';

// document.getElementById('score-0').textContent='0';
// document.getElementById('score-1').textContent='0';
// document.getElementById('current-0').textContent='0';
// document.getElementById('current-1').textContent='0';

// function btn(){
//     console.log('Hello world')
// }
// btn();



// document.querySelector('.btn-roll').addEventListener(typeofEvent,happenEvent)
document.querySelector('.btn-roll').addEventListener('click',function(){

//1. Random Number
var dice=Math.floor(Math.random() * 6)+1;

//2.Display the result

var diceDOM= document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-' + dice + '.png';
//3.Update the round state IF the rolled number, was not a 1
if(dice !== 1){
    //Add Score
    //roundScore=roundScore+1;
    roundScore +=dice;
    document.querySelector('#current-'+ activePlayer).textContent=roundScore;
}
else{
    //Next player
nextPlayer();
}
})


document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add CURRENT score to GLOBAL scores
scores[activePlayer]+=roundScore;
scores[activePlayer]=scores[activePlayer]+roundScore;
    //Update the UI
document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    //Check if player won the game
if(scores[activePlayer]>20){
    document.querySelector('#name-'+activePlayer).textContent='winner';
     document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add='winner'
    document.querySelector('.player-'+activePlayer+'-panel').classList.add='active'

}
else{
    nextPlayer();
}
     //Next player

nextPlayer();

})



function nextPlayer(){
        //Next player

        activePlayer === 0 ? activePlayer =1: activePlayer =0
        roundScore=0;   
        // if(activePlayer===0){activePlayer=1}
            //else{activeplayer=0}
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
    // document.querySelector('.dice').style.display='none';
    
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click', init)


function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;

    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove='winner';
document.querySelector('.player-1-panel').classList.remove='winner';
document.querySelector('.player-0-panel').classList.remove='active';
document.querySelector('.player-1-panel').classList.remove='active';
document.querySelector('.player-0-panel').classList.add='active';


}










 













