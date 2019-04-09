const cards = document.querySelectorAll(".card");
const restart = document.querySelector("button[type=reset]");

const cardClick = document.querySelectorAll('.back');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let isCardClicked = false;

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


document.querySelectorAll('.back').onclick = function(e) {
  let target = e.target;
  console.log(e.target);
  
  if (target.classList != '.back') return;
  let cnt = target.closest('li').querySelector('.cnt');
  cnt.innerText = parseInt(cnt.innerText, 10)+1;
}();

// let click = '';
// console.log(cardClick);

// const moveCount = function(cardClick) {
//   e.target = '';
//   e.preventDefault();
//   let currentCount;
//   if(cardClick.classList === 'back'){
//     currentCount++;
//     console.log(currentCount);
    
//   }
//   return console.log(e.target);
  
// }
// cardClick.addEventListener("click", moveCount);



function checkForMatch() {
  const isMatch = firstCard.dataset.char === secondCard.dataset.char;
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

const getReadyTitleColor = function() {
  return Math.floor(Math.random() * 255)
};
const getReadyTitleSize = function() {
  if(getReadyTitle.style.fontSize == '50' + 'px'){
    getReadyTitle.style.fontSize = '45' + 'px';
  }
  else {
    getReadyTitle.style.fontSize = '50' + 'px';
  }
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

}, 1000); //delay for starting countdown for 30sec

// ---get ready
// ----------timer-------------
// const time = document.querySelector(".js-couter-time");
// time.textContent = 'Time left: 30 seconds';
// setTimeout(() => {
//   (function timerStart() {
//     let currentCount = 30;
//     const startCounter = setInterval(function() {
//       if (currentCount === 1) clearInterval(startCounter);
//       currentCount--;
//       return time.textContent = `Time left: ${currentCount} seconds` ;
//     }, 1000); 
//   })();
// }, 5000) //delay for starting countdown for 30sec

// ----------timer-------------
// const stopGame = function(){
//  const lose = document.querySelector('.lose-popup');
 
//  setTimeout(() => {
//    if(time.textContent === 'Time left: 0 seconds'){
//      lose.style.display = 'flex';
//     }
//   }, 36000);
// }();

// const win = document.querySelector('.win-popup'); in progress

// ===============================
// moves count



