const SECRET_MESSAGE = "hasmirah";
const CLUES = [
    "cuba la",
    "ala senang je",
    "You need to look at anything that is on this page to get a clue : #******#"
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
        window.location.href = `result.html?message=saya sayang awak la hasmirah, please jaga orang tau... orang ni tak betul sangat. saya harap kita kekal sampai jannah okey... iloveyou❤`;
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
