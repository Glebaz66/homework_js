const cards = document.querySelectorAll(".card");
const restart = document.querySelector("button[type=reset]");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


startGame = () => {
  card.addEventListener("click", timerStart);
  return console.log(cards);
  
}
console.log(startGame);

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add("flip");
  
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    
    return;
  }
  
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.char === secondCard.dataset.char;
  
  isMatch ? disableCards() : unflipCards();
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    
    resetBoard();
  }, 1000);
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

restartBtn = () => {
  window.location.reload();
};

cards.forEach(card => card.addEventListener("click", flipCard));
restart.addEventListener("click", restartBtn);

// ----------timer-------------
const time = document.querySelector(".js-couter-time");
console.log(time);

function timerStart() {
  let currentCount = 30;
  const startCounter = setInterval(function() {
    time.textContent = `Time left: ${currentCount}`
    if (currentCount == 0) clearInterval(startCounter);
    currentCount--;
    
  }, 1000);
};
cards.addEventListener('click', timerStart);
console.log(cards);


// ----------timer-------------
