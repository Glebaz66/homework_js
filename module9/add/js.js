// --------------------1--------------------
// const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

// const start = document.querySelector('.js-start');
// const stop = document.querySelector('.js-stop');
// const bodyColor = document.querySelector('body');

// const change = () => {
//    let colorChange = Math.floor(Math.random() * (colors.length + 1));
//    bodyColor.style.backgroundColor = colors[colorChange];
//    console.log(bodyColor.style.backgroundColor);
// }

// let setTimer;

// const strt = () => {
//     setTimer = setInterval(change, 1000);
// }
// const stp = () => {
//     clearInterval(setTimer);
// }

// start.addEventListener('click', strt);
// stop.addEventListener('click', stp);
// --------------------1--------------------

// --------------------2--------------------

// function getFormattedTime(time) {
//     let date = new Date(time);

//     const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
//     const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
//     const msec = String(date.getMilliseconds());
//     return `${min}:${sec}.${msec[0]}`
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2

// --------------------2--------------------

// --------------------3--------------------
const startBtn = document.querySelector('.js-timer-start');
const stopBtn = document.querySelector('.js-timer-stop');
const clockface = document.querySelector('.js-clockface');
const clearBtn = document.querySelector('.js-timer-clear');
// const pauseBtn = document.querySelector('.js-timer-pause');

const timer = {
    id: null,
    startTime: null,
    isActite: false,
    start(){
        if(this.isActite) return;

        this.isActite = true;

        this.startTime = Date.now();
            
        this.id = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - this.startTime;
            updateClockface(deltaTime);
        }, 100); 
    },
    stop(){
        // console.log('stop');
        clearInterval(this.id);
    },
    clear(){
        const cleared = this.startTime = '00:00.0';
        clockface.textContent = cleared;
        // console.log(cleared);
    },
    // pause(){
    //     const onPause = Date.now() - deltaTime;
    //     clockface.textContent = onPause;
    // },
};

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
clearBtn.addEventListener('click', timer.clear.bind(timer));
// pauseBtn.addEventListener('click', timer.pause.bind(timer));

function updateClockface (time) {
    const formattedTime = formatTime(time)
    clockface.textContent = formattedTime;
}
function formatTime(time) {
    let date = new Date(time);

    const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const msec = String(date.getMilliseconds());
    return `${min}:${sec}.${msec[0]}`
  }
// --------------------3--------------------