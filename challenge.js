
var gamePlaying = true;
var scores,roundScore, activePlayer;
var lastDice;
var winningScore;
var input;
initialization();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {   
    var dice1, dice2;
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
            
    document.getElementById('dice-1').style.display = 'block'; 
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
        if(dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        
    }
});


document.querySelector('.btn-hold').addEventListener('click',function() {
    
   if(gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
     
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }
    
    
    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';

        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
   }
});



document.querySelector('.btn-new').addEventListener('click',function() {
    initialization();
});

function initialization() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
   
    input = document.getElementById('winning-score').value;
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;
}


function nextPlayer() {
     
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}

