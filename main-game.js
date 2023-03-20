// pantalla juego
const game = document.querySelector('#gameplay');
// generate btn
const dice = document.querySelector('#dice-btn');
// input ans
const attemptInput = document.querySelector('#attempt-input');
// send ans
const send = document.querySelector('#send-answer');
// counter
const count = document.querySelector('#count');

let randomNumber;

dice.addEventListener('click', startGame);

function startGame() {
    attemptInput.removeAttribute('disabled');
    attemptInput.removeAttribute('title');
    attemptInput.focus();

    // For Restart
    attemptInput.value = '';
    i = 0;
    count.innerHTML = `${i}`;

    const spaceWrite = document.querySelector('.win-die');
    const p = spaceWrite.querySelector('p');
    const a = spaceWrite.querySelector('a');
    if(p && a) {
        spaceWrite.removeChild(p);
        spaceWrite.removeChild(a);
    }

    // Genera numero aleatorio
    randomNumber = parseInt(Math.random() * 101);

    alert('Game started.');

    // remove disable de btn accept.
    send.removeAttribute('disabled');

    // desactiva el botón
    dice.setAttribute('disabled', true);
}

send.addEventListener('click', function() {
    attemptInput.focus();
    if(attemptInput.value === '' || attemptInput.value > 100) {
        return
    } else {
        sendedNumber(attemptInput.value, randomNumber);
    };

});

// agrega num con ENTER;
attemptInput.addEventListener('keypress', function(ev) {
    if(ev.key === 'Enter') {
        if(!attemptInput.value || attemptInput.value > 100) return;

        sendedNumber(attemptInput.value, randomNumber);
    }
});

let i = 0;

function sendedNumber(playerNum, randomNumber) {
    i++;

    if(Number(playerNum) === randomNumber) {
        writeMsg('You Win', true);

    } else if(Number(playerNum) < randomNumber) {
        alert('The number is BIGGER than yours.');

    } else if(Number(playerNum) > randomNumber) {
        alert('The number is SMALLER than yours.');

    }

    count.innerHTML = `${i}`;
}

function writeMsg(msg, win) {
    const spaceWrite = document.querySelector('.win-die');
    const p = document.createElement('p');

    const a = document.createElement('a');
    a.innerText = 'Main Menu';
    a.setAttribute('href', "./index.html");
    a.setAttribute('id', 'back-index');
    
    if(win) {
        p.innerText = msg;

        spaceWrite.appendChild(p);
        spaceWrite.appendChild(a);

        stopGame();
    } else {
        p.innerText = msg;

        spaceWrite.appendChild(p);
        spaceWrite.appendChild(a);

        stopGame();
    }
}

function stopGame() {
    attemptInput.setAttribute('disabled', true);
    attemptInput.setAttribute('title', "You must generate a random number first.");

    // send btn
    send.setAttribute('disabled', true);
    // random num active
    dice.removeAttribute('disabled');
}