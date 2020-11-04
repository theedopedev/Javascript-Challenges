//Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born... good friend?');
    var age = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(' You are ' + age + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//Challenge 2 - Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}
function reset(){
    window.location.reload();
}
//Challenge 3 - Rock Paper Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(ranToRpsInt());
    console.log('Computer:', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function ranToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[humanChoice][botChoice]
    var botScore = rpsDatabase[botChoice][humanChoice]

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'Its a tie', 'color': 'gold'};
    } else {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();    
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var buttonDiv = document.createElement('button');

    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px goldenrod;'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size=60 px padding= 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red;'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge 4 - Change the color of buttons

var all_buttons = document.getElementsByTagName('button');


var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]); 
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    }
    else if (buttonThingy.value === 'green') {
        buttonsGreen();
    }
    else if (buttonThingy.value === 'blue') {
        buttonsBlue();
    }
    else if (buttonThingy.value === 'yellow') {
        buttonsYellow();
    }
    else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    }
    else if (buttonThingy.value === 'random') {
        randomColours();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}
function buttonsBlue() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary')
    }
}function buttonsYellow() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning')
    }
}
function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColours() {
    var choices = ['btn-primary', 'btn-warning', 'btn-success', 'btn-danger', 'btn-info']
    
    for (let i=0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber ]);
    }
}



//Challenge 5 = Black Jack
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div':'#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div':'#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11]},
    'player1': 0,
    'player2': 0,
    'draws': 0,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

//Sounds
const hitSound = new Audio('Static/sounds/swish.mp3')
const awwSound = new Audio('Static/sounds/aww.mp3')
const ohyes = new Audio('Static/sounds/ohyes.mp3')
const ohno = new Audio('Static/sounds/oh no.mp3')
const click = new Audio('Static/sounds/cash.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);


// Functions of BlackJack
let = document.getElementById('container5');

function blackjackHit() {        let cards = randomCard();
        console.log(cards);
        showCard(cards, YOU);
        updateScore(cards, YOU);
        showScore(YOU); 
    }

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(cards, activePlayer) {
    if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `Static/images/${cards}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function blackjackDeal() {
    let winner = computeWinner();
    showResult(winner);
    //showResult(computeWinner());
    
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (i=0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for (i=0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = 'white';
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').style.color = 'white';
}

function updateScore(cards, activePlayer) {
if (cards === 'A') {
    if (activePlayer['score']+ blackjackGame['cardsMap'][cards][1] <= 21) {
         activePlayer['score'] += blackjackGame['cardsMap'][cards][1];
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][cards][0];
    }
}else {
    activePlayer['score'] += blackjackGame['cardsMap'][cards];
    }
}

function showScore(activePlayer){
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        awwSound.play();
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function dealerLogic() {
    blackjackGame['isStand'] = true;
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
}


//Winner Results
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            blackjackGame['player1']++;
            winner = YOU

        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['player2']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
        }

    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackjackGame['player2']++;
        winner= DEALER;

    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }

    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (winner === YOU) {
        document.querySelector('#player1').textContent = blackjackGame['player1'];
        message = 'Player 1 Won!';
        messageColor = 'goldenrod';
        ohyes.play();
    } else if (winner === DEALER) {
        document.querySelector('#player2').textContent = blackjackGame['player2'];
        message = 'Player 1 Lost!';
        messageColor = 'red';
        ohno.play();
    } else {
        document.querySelector('#draws').textContent = blackjackGame['draws'];
        message = 'Draw!!!';
        messageColor = 'orange';
        click.play()
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
} 

