/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

const invitedEmail = [
	'cicciopasticcio@gmail.com',
	'chimichanga@icloud.com',
	'pincopallino@hotmail.com',
];

const btnEmail = document.querySelector('.button-email');
btnEmail.addEventListener('click', checkList);
const firstCard = document.getElementById('first-card');

function checkList(e) {
	let invited = '';
	const search = document.getElementById('email').value;
	for (let i = 0; i < invitedEmail.length; i++) {
		if (invitedEmail[i] === search) {
			invited = invitedEmail[i];
		}
	}
	if (invited) {
		firstCard.innerHTML += `<h1>la tua email è nella lista, Benvenuto</h1>`;
	} else {
		firstCard.innerHTML += `<img class="pt-3" src="./img/tunonpuoipassare.gif" alt="">`;
	}
}

let myNumber = (document.getElementById('demo').innerHTML += Math.floor(Math.random() * 6) + 1);

let gameNumber = (document.getElementById('demo2').innerHTML += Math.floor(Math.random() * 6) + 1);

let winner = document.querySelector('.winner');

if (myNumber > gameNumber) {
	winner.innerHTML += `HAI VINTO`;
} else if (myNumber < gameNumber) {
	winner.innerHTML += `HA VINTO IL GIOCO`;
} else {
	winner.innerHTML += `PAREGGIO`;
}

/* MI FERMO PERHCE NON STO MOLTO BENE */
