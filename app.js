const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}
const word = words[getRandomInt(words.length)];

const hangman = new Hangman(word, word.length);
const puzzleEl = document.querySelector('#puzzle');
const messageEl = document.querySelector('#message');

const showPuzzle = () => {
    puzzleEl.textContent = hangman.getPuzzle();
}

const getStatusMessage = () => {
    messageEl.textContent = hangman.getStatusMessage();
}

showPuzzle();
getStatusMessage();

window.addEventListener('keypress', (e) => {
    if (hangman.status === 'playing') {
        const guess = String.fromCharCode(e.charCode)
        hangman.makeGuess(guess);
        showPuzzle();
        getStatusMessage();
    }
});