class Hangman {
    /**
     * hangman constructor
     * 
     * @param {string} word 
     * @param {int} numberOfGuess 
     */
    constructor(word, numberOfGuess) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = numberOfGuess;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    /**
     * get puzzle
     * 
     * @returns {void}
     */
    getPuzzle() {
        let puzzle = '';
        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        });
        return puzzle;
    }
    /**
     * guess a letter
     * 
     * @param {string} guess
     */
    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (isUnique) {
            this.guessedLetters.push(guess);

            if (isBadGuess) {
                this.remainingGuesses--;
            }
        }

        this.calculateStatus();
    }
    /**
     * calculate status of game
     */
    calculateStatus() {
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else {
            // remove spaces from word
            const letters = this.word.filter((letter) => letter !== ' ');
            // return true if all letters were guessed
            const finished = letters.every((letter) => {
                return this.guessedLetters.includes(letter);
            });
            if (finished) {
                this.status = 'finished';
            }
        }
    }
    /**
     * 
     */
    getStatusMessage() {
        let output;
        if (this.status === 'finished') {
            output = 'Great work! You guessed the word';
        } else if (this.status === 'failed') {
            output = `Nice try! The word was ${this.word.join('')}`;
        } else {
            output = `Guesses left : ${this.remainingGuesses}`
        }

        return output;
    }
}