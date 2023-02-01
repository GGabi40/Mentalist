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

dice.addEventListener('click', function() {
    // Genera numero aleatorio
    randomNumber = parseInt(Math.random() * 101);
    // console.log(randomNumber);
    alert('Game started.');

    // remove disable de btn accept.
    send.removeAttribute('disabled');

    // desactiva el botón
    dice.setAttribute('disabled', true);
});

send.addEventListener('click', function() {
    // Envía resp y suma intentos

    if(attemptInput.value === '') {
        return
    } else {
        sendedNumber(attemptInput.value, randomNumber);
    };

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

    const btnReset = document.createElement('button');
    btnReset.id = 'start';
    btnReset.innerText = 'Reset';

    p.innerText = msg;

    if(win) {
        spaceWrite.appendChild(p);
        // spaceWrite.appendChild(btnReset);
    } /* else {
        spaceWrite.appendChild(p);
    } */
}