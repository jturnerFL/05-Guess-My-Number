'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Winner Winner 🐔 dinner!!';

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 40;
// console.log(document.querySelector('.quess').value);

let secretNumber = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message)  {  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = '❌ No Number !';
        displayMessage('❌ No Number !');
        //When player win
    
}    else if(guess > 20) {
    // document.querySelector('.message').textContent = 'Pick a number between 1-20!';
    displayMessage('Pick a number between 1-20!')

}   else if(guess===secretNumber) {
        // document.querySelector('.message').textContent = 'Winner Winner 🐔 dinner!!';
        displayMessage('Winner Winner 🐔 dinner!!')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if( score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //Guess is wrong
    }   else if(guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost 👎!!';
            displayMessage('You lost 👎!!')
            document.querySelector('.score').textContent = 0;
    }
    //     //when guess is too high
    // }   else if(guess > secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!';
    //     score --;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost 👎!!';
    //         document.querySelector('.score').textContent = 0;

    //         document.querySelector('body').style.backgroundColor = '#dc143d';
    //         document.querySelector('.number').style.width = '30rem';
    //     }

    //     //Guess is too low
    // } else if(guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!';
    //     score --;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost 👎!!';
    //         document.querySelector('.score').textContent = 0;

    //         document.querySelector('body').style.backgroundColor = '#dc143d';
            
    //     }
}});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() *20) + 1;

    // document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
});