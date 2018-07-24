const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let login = prompt('Enter login');


const checkLoginValidity = (logins) => {
    if (login.length >= 4 && login.length <= 16){
        console.log(true);
        
    }   else {
        console.log(false);
    }
}
checkLoginValidity();


// const checkIfLoginExists = (logins, login) => {

//         if (logins.includes (login)){
//             return console.log('ok');
//         } else {
//             return console.log('not ok');
//         } 
//     }


    const checkLoginExists = function(login) {
        if (logins.includes(login)) {
          return true;
        } else {
          return false;
        }
      }
checkIfLoginExists();