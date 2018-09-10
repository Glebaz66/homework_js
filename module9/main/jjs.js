const clockface = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const listOfLaps = document.querySelector('.js-laps');
let isActive = false;
let id = null;
let startTime = 0;
let deltaTime = 0;
resetBtn.setAttribute('disabled', '');
resetBtn.style.opacity = '0.5';
resetBtn.style.cursor = 'no-drop';

function startTimer() {
  if (isActive) return;

  isActive = true;
  startTime = Date.now() - deltaTime;
  id = setInterval(() => {
    const currentTime = Date.now();
    deltaTime = currentTime - startTime;
    updateClockface(deltaTime);
  }, 100);

}

function getFormattedTime(time) {
  const newDate = new Date(time);

  let minutes = newDate.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = newDate.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const mseconds = String(newDate.getMilliseconds()).slice(0, 1);

  return `${minutes}:${seconds}.${mseconds}`;
}

function updateClockface(time) {
  const formattedTime = getFormattedTime(time);
  clockface.textContent = formattedTime;
}

function lap(){
  const lapArr = [];
  lapArr.push(document.querySelector('.js-time').textContent);

  const lists = lapArr.map(el => {
      list = document.createElement('li');
      list.className = 'laps__item';
      list.textContent = el;
      return list;
  })
  document.querySelector('.laps').appendChild(...lists);
}

function handleOnstartTimer() {
  resetBtn['disabled'] = false;
  resetBtn.style.opacity = '1';
  resetBtn.style.cursor = 'auto';
    if (!isActive) {
    startTimer();
    startBtn.textContent = 'Pause';

  } else {
    stopPauseTimer();
    startBtn.textContent = 'Continue';
  }

}

function stopPauseTimer() {
  clearInterval(id);
  isActive = false;
}

function handleOnReset() {
 deleteListOfLaps ();  
  stopPauseTimer();
  deltaTime = 0;
  updateClockface(deltaTime);
  startBtn.textContent = 'Start';
  resetBtn.setAttribute('disabled', '');
  resetBtn.style.opacity = '0.5';
  resetBtn.style.cursor = 'no-drop';
}

// function handleOnLap(){
//   const lap = document.createElement('li');
//   lap.textContent = clockface.textContent;
//   listOfLaps.append(lap);
// }

function deleteListOfLaps (){
  const laps = document.querySelectorAll('li');
  laps.forEach(lap => {
    lap.remove();
  })
}

startBtn.addEventListener('click', handleOnstartTimer);
resetBtn.addEventListener('click', handleOnReset);
lapBtn.addEventListener('click', lap);