const submit = document.querySelector('#submit');
const nameUser = document.querySelector('#name-user');

nameUser.addEventListener("input", function() {
    let nickname = nameUser.value;

    if(nickname.length >= 4) {
        submit.removeAttribute('disabled');
    }
    if(nickname.length <= 3) {
        submit.setAttribute('disabled', true);
    }
});


submit.addEventListener('click', function(e) {
    e.preventDefault();

    // savePlayers(nameUser.value);
    localStorage.setItem('player', nameUser.value);

    window.location = './game.html';
});

/* Guardar en Local Storage */
/* function savePlayers(player) {
    let players = [];

    players.push(player);

    localStorage.setItem(players, JSON.stringify(players));
} */