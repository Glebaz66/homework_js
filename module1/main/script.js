
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = '123';


// let passwordEnter;
let loginEnter = prompt('Введите ваш логин:');


if (loginEnter === null) {
    alert('Отменено пользователем') 
}   else if(loginEnter !== ADMIN_LOGIN) {
    alert('Доступ запрещен')
}     else {
    let passwordEnter = prompt('Введите ваш пароль:')
    if (passwordEnter === null) {
        alert('Отменено пользователем')
    }  else if(passwordEnter !== ADMIN_PASSWORD) {
        alert('Доступ запрещен')
    } else {
        alert('Welocome ' + ADMIN_LOGIN) 
    }
}


// ---------------------------------------------additional taks-----------------------------------------------
const sharm = 15;
const hurgada = 25;
const taba = 6;

let vacantPlace;

const seatNum = prompt('Введите число необходимых мест');

if ((seatNum % 1) !== 0) {
    alert('Ошибка ввода')
} else if (seatNum <= 0) {
    alert('Ошибка ввода')
} else {
    if (taba >= seatNum) {
        vacantPlace = confirm('есть место в группе Taba, согласны ли вы быть в этой группе?');

        if (vacantPlace === true) {
            alert('Приятного путешествия в группе Taba')
        } else {
            alert('Нам очень жаль, приходите еще!')
        }

    } else if (sharm >= seatNum) {
        vacantPlace = confirm('есть место в группе Sharm, согласны ли вы быть в этой группе?')

        if (vacantPlace === true) {
            alert('Приятного путешествия в группе Sharm')
        } else {
            alert('Нам очень жаль, приходите еще!')
        }

    } else if (hurgada >= seatNum) {
        vacantPlace = confirm('есть место в группе Hurgada, согласны ли вы быть в этой группе?')

        if (vacantPlace === true) {
            alert('Приятного путешествия в группе Hurgada')
        } else {
            alert('Нам очень жаль, приходите еще!')
        }

    } else {
        alert('Извините, столько мест нет ни в одной группе!');
    }
}


// ---------------------------------------------additional taks-----------------------------------------------