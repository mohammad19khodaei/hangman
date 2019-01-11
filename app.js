const game1 = new Hangman('mohammad khodaei', 4)
const puzzleEl = document.querySelector('#puzzle');
const messageEl = document.querySelector('#message');

const showPuzzle = () => {
    puzzleEl.textContent = game1.getPuzzle();
}

const getStatusMessage = () => {
    messageEl.textContent = game1.getStatusMessage();
}

showPuzzle();
getStatusMessage();

window.addEventListener('keypress', (e) => {
    if (game1.status === 'playing') {
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess);
        showPuzzle();
        getStatusMessage();
    }
});