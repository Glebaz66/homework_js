const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let login = prompt('Enter login');


const checkLoginValidity = (logins) => {
    if (login.length >= 4 && login.length <= 16){
        return console.log(true);
        
    }   else {
        return console.log(false);
    }
}
checkLoginValidity();


const checkIfLoginExists = function (logins, login) {
    
    if (logins.includes(login)){
        return console.log(true);
    } else {
        return console.log(false);
    } 
}

checkIfLoginExists();


