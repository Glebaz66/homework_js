const startBtn = document.querySelector('.js-start'); // кнопка старт
const takeLapBtn = document.querySelector('.js-take-lap'); // кнопка для считывание текущего времени
const resetBtn = document.querySelector('.js-reset'); // сброс
const timeDigits = document.querySelector('.js-time'); // цифры секундомера
const lapsTable = document.querySelector('.js-laps'); // круги

// const timer = {
//     id: null,
//     startTime: 0,
//     isActive: false,
//     isPause: false,
//     deltaTime: 0,

//     start(){
//         if (this.isActive) return;
//         this.isActive = true;

//         this.startTime = Date.now();
//         this.id = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - this.startTime;
//             updateClockface(deltaTime); 
//         }, 100)
//     },

//     reset(){
//         clearInterval(this.id);
//         this.isActive = false;
//         this.deltaTime = 0;
//         // timeDigits.textContent = '00:00.0';
//         // const resetTime = this.startTime = '00:00.0';
//         // timeDigits.textContent = resetTime;
//     },

//     lap(){
//         const lapArr = [];
//         lapArr.push(document.querySelector('.js-time').textContent);

//         const lists = lapArr.map(el => {
//             list = document.createElement('li');
//             list.className = 'laps__item';
//             list.textContent = el;
//             return list;
//         })
//         document.querySelector('.laps').appendChild(...lists);
//     },

// }

// function formatTime(time){
//     let date = new Date(time);
    
//     const mili = String(date.getMilliseconds()).slice(0, 1);
//     const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
//     const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    
//     return `${min}:${sec}.${mili}`
// }

// function updateClockface (time) {
//     const formattedTime = formatTime(time);
//     timeDigits.textContent = formattedTime;
// }

// startBtn.addEventListener('click', timer.start.bind(timer));
// resetBtn.addEventListener('click', onResetButton);
// takeLapBtn.addEventListener('click', lap);

// ---------------------------------------------------------
let id = null;
let startTime = 0;
let isActive = false;
let isPause = false;
let deltaTime = 0;


function startCount(){
    if (isActive) return;
    isActive = true;
    startTime = Date.now() - deltaTime;
    id = setInterval(() =>{
        const currentTime = Date.now();
        deltaTime = currentTime - startTime;
        updateClockface(deltaTime);
    }, 100);
}

function formatTime(time){
    let date = new Date(time);
    
    const mili = String(date.getMilliseconds()).slice(0, 1);
    const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    
    return `${min}:${sec}.${mili}`
}

function updateClockface (time) {
    const formattedTime = formatTime(time);
    timeDigits.textContent = formattedTime;
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

function onStartClick(){
    resetBtn.style.opacity = '1';
    if(!isActive){
        startCount();
        startBtn.textContent = 'Pause';
    } else {
        stopPause();
        startBtn.textContent = 'Continue';
    }
}

function stopPause() {
    clearInterval(id);
    isActive = false;
}


function onResetButton(){
    deleteLap();
    stopPause();
    deltaTime = 0;
    updateClockface(deltaTime)
    startBtn.textContent = 'Start';
}

function deleteLap(){
    const delLaps = document.querySelectorAll('.laps__item');
    delLaps.forEach(lap => {
        lap.remove();
    })
}


startBtn.addEventListener('click', onStartClick);
resetBtn.addEventListener('click', onResetButton);
takeLapBtn.addEventListener('click', lap);
// ------------------------------------------------------------------------