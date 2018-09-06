const startBtn = document.querySelector('.js-start');
const takeLapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const saveLap = document.querySelector('.js-laps');
const timeDigits = document.querySelector('.js-time');

const timer = {
    id: null,
    startTime: null,
    start(){
        this.startTime = Date.now();
        this.id = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - this.startTime;
            // console.log(deltaTime);
            updateClockface(deltaTime);
            
        }, 1)
    },
    reset(){
        clearInterval(this.id);
        const resetTime = this.startTime = '00:00.0';
        timeDigits.textContent = resetTime;
    }
}

startBtn.addEventListener('click', timer.start.bind(timer));
resetBtn.addEventListener('click', timer.reset.bind(timer));

function updateClockface (time) {
    const formattedTime = formatTime(time);
    timeDigits.textContent = formattedTime;
}

function formatTime(time){
    let date = new Date(time);

    const mili = String(date.getMilliseconds()).slice(0, 1);
    const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    return `${min}:${sec}.${mili}`
}