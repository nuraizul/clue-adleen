const SECRET_MESSAGE = "LUQMAN";
const CLUES = [
    "TERUK LA KAU NI",
    "TEKA ELOK SIKIT",
    "NI CLUE TENGOK AH, PAKAI HURUF BESAR AU 'L3333N'"
];

let clueIndex = 0;

function checkGuess() {
    const guess = document.getElementById('guessInput').value;
    const messageElement = document.getElementById('message');
    const clueElement = document.getElementById('clue');

    if (guess.trim() === "") {
        messageElement.textContent = "Please enter a guess.";
        return;
    }

    if (guess.toLowerCase() === SECRET_MESSAGE.toLowerCase()) {
        window.location.href = `result.html?message=can we create a relationship ? : I’ve come to a serious realization: I’ve caught the ‘crush’ bug for you! 😅 Just had to let you know before it turns into an obsession. If you’re up for hanging out and maybe a bit of fun, let me know!`;
    } else {
        messageElement.textContent = `Your guess: "${guess}". Try again!`;
        showClue();
    }
}

function showClue() {
    const clueElement = document.getElementById('clue');
    if (clueIndex < CLUES.length) {
        clueElement.textContent = CLUES[clueIndex];
        clueElement.classList.remove('hidden');
        clueIndex++;
    } else {
        clueElement.textContent = "No more clues available.";
        clueElement.classList.remove('hidden');
    }
}
