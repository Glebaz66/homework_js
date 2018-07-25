const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let enterLogin = prompt('Enter login');


const checkLoginValidity = (logins) => {
    if (enterLogin.length >= 4 && enterLogin.length <= 16){
        return true
        
    }   else {
        return false
    }
}
checkLoginValidity(enterLogin);


const checkIfLoginExists = (logins, enterLogin) => {
    
    if (logins.includes(enterLogin)){
        return true
         
    } else {
        return false
    } 
}

checkIfLoginExists(logins, enterLogin);


const addLogin = (logins, enterLogin) => {

    checkLoginValidity(logins, enterLogin);

    if(checkLoginValidity(logins, enterLogin) === true){
        checkIfLoginExists(logins, enterLogin);
        
        if(checkIfLoginExists(logins, enterLogin) === false){
                logins.push(enterLogin);
                alert('Логин успешно добавлен');
            } else {
                alert('Логин уже существует');
        }
    }   else {
        alert('Логин должен содержать от 4 до 16 символов');
    }
} 
addLogin(logins, enterLogin);

console.log(logins);


