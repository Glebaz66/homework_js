const startBtn = document.querySelector('.js-start'); // кнопка старт
const takeLapBtn = document.querySelector('.js-take-lap'); // кнопка для считывание текущего времени
const resetBtn = document.querySelector('.js-reset'); // сброс
const timeDigits = document.querySelector('.js-time'); // 
const lapsTable = document.querySelector('.js-laps'); //

const timer = {
    id: null,
    startTime: null,
    isActive: false,
    isPaused: false,
    start(){
        this.startTime = Date.now();
        this.isActive = true;
        this.isPaused = false;
        this.id = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - this.startTime;
            updateClockface(deltaTime); 

            if(timer.isActive){
                startBtn.textContent = 'Pause';
            } 
            if(startBtn.textContent === 'Pause') {
                startBtn.textContent = 'Continue';
            }
        }, 100)
    },

    reset(){
        clearInterval(this.id);
        const resetTime = this.startTime = '00:00.0';
        // const resetTime = timer.startTime;
        // this.deltaTime = 0;
        timeDigits.textContent = resetTime;
        // document.querySelector('.js-time').nodeValue
        console.log(document.querySelector('.js-time').typeOf);
        
    },

    lap(){
        const lapArr = [];
        lapArr.push(document.querySelector('.js-time').textContent);

        const lists = lapArr.map(el => {
            list = document.createElement('li');
            list.className = 'laps__item';
            list.textContent = el;
            return list;
        })
        document.querySelector('.laps').appendChild(...lists);
    },

}

startBtn.addEventListener('click', timer.start.bind(timer));
resetBtn.addEventListener('click', timer.reset.bind(timer));
takeLapBtn.addEventListener('click', timer.lap.bind(timer));

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
