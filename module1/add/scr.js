// --------------------------------------------1----------------------------------------------

let guest;
let name = 'Mango';

guest = name;

console.log(guest);

// --------------------------------------------1----------------------------------------------

// --------------------------------------------2----------------------------------------------

let day = 02;
let month = 01;
const year = 2017;

if(day < 9){
   day = '0' + day
} 
if(month < 9) {
   month = '0' + month
}

const date = `${day}/${month}/${year}`;

console.log(date); 

// --------------------------------------------2----------------------------------------------

// --------------------------------------------3----------------------------------------------

let youName = prompt('Enter your name: ');
alert(youName);

// --------------------------------------------3----------------------------------------------

// --------------------------------------------4----------------------------------------------

const name = 'Mango';
const date = '14/08/2031';
const roomType = 'люкс';

const message = `${name} прибывает на отдых ${date} в ${roomType}.`;

console.log(message);

// --------------------------------------------4----------------------------------------------

// --------------------------------------------5----------------------------------------------

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = (Number.parseInt (padding) + Number.parseInt (border) + Number.parseInt (contentWidth));

console.log(totalWidth + 'px');

// --------------------------------------------5----------------------------------------------

// --------------------------------------------6----------------------------------------------

let whatYear = prompt('Какой сейчас год?');

if (whatYear == 2018) {
    alert('Все верно')
} else {
    alert('Но ведь на вдоре 2018!')
}

// --------------------------------------------6----------------------------------------------

// --------------------------------------------7----------------------------------------------
let intNumber = prompt('Enter a number');

if (intNumber = null) {
    alert('please come again')
    if (intNumber = Number.parseInt){
    alert('ok')
    }
} else {
    alert('Введите целое число')
}

let int = prompt('Введите произвольное целое число');

if (int === null) {
    alert('Приходите еще!');
} else if ((int % 1) !== 0 ) {
    alert('Необходимо было ввести целое число!')
} else if ((int % 1) === 0){
      alert('Спасибо!') 
} 

// --------------------------------------------7----------------------------------------------

// --------------------------------------------8----------------------------------------------
const num = Number.parseInt(Math.random() * 100);

let type;
if(num % 2){
    type = ('odd')
} else {
    type = ('even')
}

console.log(`${num} is ${type}`);

// --------------------------------------------8----------------------------------------------

// --------------------------------------------9----------------------------------------------
let hours = 8;
let minutes = 3;
let seconds = 42;

if (hours < 9) {
    hours = '0'+ hours
}
if (minutes < 9) {
    minutes = '0'+ minutes
}
if (seconds < 9) {
    seconds = '0'+ seconds
}

const time = `${hours}:${minutes}:${seconds}`;
console.log('Time is: ', time);
// --------------------------------------------9----------------------------------------------

// --------------------------------------------10----------------------------------------------

const hotelNum = prompt('Введите число от 1 до 5');

if (hotelNum === null) {
   alert('Очень жаль, приходите еще')
} else if (hotelNum > 5 || hotelNum < 1) {
    alert('Неверный ввод, возможные варианты 1-5')
} else {
    switch (hotelNum) {
        case '1' :
            alert("Каталог хостелов");
            break;
        case '2' :
            alert("Каталог бюджетных отелей");
            break;
        case '3' :
            alert("Каталог отелей ***");
            break;
        case '4' :
            alert("Каталог отелей ****");
            break;
        case '5':
            alert("Каталог лучших отелей");
            break;
        default: 
            alert('Неверный ввод, возможные варианты 1-5!')
    }
}
// --------------------------------------------10----------------------------------------------


