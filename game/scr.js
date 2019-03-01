const cards = document.querySelectorAll(".card");
const restart = document.querySelector("button[type=reset]");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

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

// ---get ready
const getReadyTitle = document.querySelector('.get-ready');

let getReadyTitleColor = function() {
  return Math.floor(Math.random() * 255)
};
let getReadyTitleSize = function() {
  if(getReadyTitle.style.fontSize == '50' + 'px'){
    getReadyTitle.style.fontSize = '45' + 'px';
  }
  else {
    getReadyTitle.style.fontSize = '50' + 'px';
  }
    return getReadyTitle.style.fontSize;
};
setInterval(function() {
  getReadyTitle.style.color = 'rgb(' + getReadyTitleColor() + ',' + getReadyTitleColor() + ',' + getReadyTitleColor() + ')';
  getReadyTitle.style.fontSize = getReadyTitleSize() + 'px';
}, 1000);
setTimeout(() => {
  document.querySelector('.couter').style.display = 'flex';
  document.querySelector('.get-ready').style.display = 'none';
  document.querySelector('.wrap').style.display = 'flex';
  document.querySelector('.btn').style.display = 'block';

}, 5000); //delay for starting countdown for 30sec

// ---get ready
// ----------timer-------------
const time = document.querySelector(".js-couter-time");
setTimeout(() => {
  (function timerStart() {
    let currentCount = 31;
    const startCounter = setInterval(function() {
      if (currentCount === 1) clearInterval(startCounter);
      currentCount--;
      // console.log(time.textContent);
      return time.textContent = `Time left: ${currentCount} seconds` ;
    }, 1000); 
  })();
}, 5000) //delay for starting countdown for 30sec

// ----------timer-------------
const stopGame = () =>{
  if(time.textContent === 'Time left: 0 seconds'){
   return resetBoard();
  } 

}
  