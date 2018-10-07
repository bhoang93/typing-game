window.addEventListener("load", init);

const difficulty = { easy: 5, normal: 3, hard: 2 };

let mode = difficulty.easy;
let time = mode;
let score = 0;
let highScore = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const easyButton = document.querySelector("#easy-button");
const normalButton = document.querySelector("#normal-button");
const hardButton = document.querySelector("#hard-button");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

function init() {
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  easyButton.addEventListener("click", () => setDifficulty(0));
  normalButton.addEventListener("click", () => setDifficulty(1));
  hardButton.addEventListener("click", () => setDifficulty(2));
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
  seconds.innerHTML = mode;
}

const setDifficulty = diff => {
  switch (diff) {
    case 0:
      mode = difficulty.easy;
      break;
    case 1:
      mode = difficulty.normal;
      break;
    case 2:
      mode = difficulty.hard;
      break;
    default:
      mode = difficulty.easy;
  }
  seconds.innerHTML = mode;
};

const startMatch = () => {
  if (matchWords()) {
    isPlaying = true;
    time = mode + 1;
    showWord(words);
    wordInput.value = "";
    score = score + (6 - mode);
    if (highScore < score) {
      highScore = score;
    }
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
    highScoreDisplay.innerHTML = highScore;
  }
};

const matchWords = () => {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "typing...";
    return false;
  }
};

const showWord = words => {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
};

const countdown = () => {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
};

const checkStatus = () => {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Time's Up!";
    score = -1;
  }
};
