const submit = document.querySelector('#submit');
const nameUser = document.querySelector('#name-user');
const form = document.querySelector('.formulario');
const limit = document.querySelector('.limits');

limit.style.display = "none";

form.addEventListener("change", () => {
    let nickname = nameUser.value;
    let selectOption = form.gamemode.value;

    if(nickname.length >= 3 && selectOption == 2) {
        limit.style.display = "block";
        alert('This mode is not available yet.');
        // submit.removeAttribute('disabled');

    } else if(nickname.length >= 3 && selectOption == 1) {
        limit.style.display = "none";
        submit.removeAttribute('disabled');

    } else {
        limit.style.display = "none";
        submit.setAttribute('disabled', true);
    }

});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const limits = document.getElementById('limit').value;

    if(form.gamemode.value == 2) {

        if(!limits) {
            alert('Tell me how many tries do you need.');
            document.getElementById('limit').style.border = '2px solid red';
            return;
        };

    localStorage.setItem('limit', limits);
    window.location = './game.html';
    }

    if(form.gamemode.value == 1) {
        window.location = './game.html';
    }

    // savePlayers(nameUser.value);
    localStorage.setItem('player', nameUser.value);
});

/* Guardar en Local Storage */
/* function savePlayers(player) {
    let players = [];

    players.push(player);

    localStorage.setItem(players, JSON.stringify(players));
} */