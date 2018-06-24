
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

// const ADMIN_LOGIN = 'admin';
// const ADMIN_PASSWORD = '123';
// const cancel = 'Отменено пользователем!';
// const ban = 'Доступ запрещен!';
// const welcome = 'Добро пожаловать!';


// const log = prompt('Введите ваш логин');

// if (log === null) {
//     alert(cancel);
// } else if (log !== ADMIN_LOGIN) {
//     alert(ban);
// } else {
//     let pass = prompt('Введите пароль');

//     if (pass === null) {
//         alert(cancel);
//     } else if (pass !== ADMIN_PASSWORD) {
//         alert(ban);
//     } else {
//         alert(welcome);
//     }
// }