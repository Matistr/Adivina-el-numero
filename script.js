let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const userInput = document.getElementById('userInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attempts = document.getElementById('attemptsLeft');

function checkGuess() {
    const userGuess = Number(userInput.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        return;
    }

    attemptsLeft--;
    attempts.textContent = attemptsLeft;

    if (userGuess === randomNumber) {
        message.textContent = '¡Felicidades! Adivinaste el número.';
        guessButton.disabled = true;
    } else if (attemptsLeft === 0) {
        message.textContent = `Lo siento, no te quedan más intentos. El número era ${randomNumber}.`;
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Intenta un número más alto.';
    } else {
        message.textContent = 'Intenta un número más bajo.';
    }
}

guessButton.addEventListener('click', checkGuess);
