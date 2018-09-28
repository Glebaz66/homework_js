const getAllUsers = document.querySelector(".js-allUsers");
const result = document.querySelector(".result");
const getUserById = document.querySelector(".js-userById");
const getUserByIdBtn = document.querySelector("#js-userById");
const addUser = document.querySelector(".js-addUser");
const addUserBtn = document.querySelector("#js-addUser");
const removeUserBtn = document.querySelector("#js-removeUser");
const removeUser = document.querySelector(".js-removeUser");
const updateUserBtn = document.querySelector("#js-updateUser");
const updateUser = document.querySelector(".js-updateUser");



getAllUsers.addEventListener("submit", handleAllUsersBtn);
getUserById.addEventListener("submit", handleGetUserByIdBtn);
addUser.addEventListener("submit", handleAddUserBtn);
removeUser.addEventListener("submit", handleRemoveUserBtn);
updateUser.addEventListener("submit", handleUpdateUserBtn);


function fetchUserData(id, param){

   return fetch(`https://test-users-api.herokuapp.com/users/${id}`, param)
        .then(response => {
            if(response.ok) return response.json();

            throw new Error('error')
        }).catch(err => console.error(err));
}


function handleAllUsersBtn(evt) {
    evt.preventDefault();
    fetchUserData('').then(data => {
        const names = data.data.reduce((acc, el) => acc + `<tr> <td>${el.id}</td>    <td>${el.name}</td>  <td>${el.age}</td> </tr>`,'');
        result.firstElementChild.innerHTML = `<caption>All users</caption><tr><td>ID</td><td>NAME</td><td>AGE</td></tr>${names}`;
    });
} 

function handleGetUserByIdBtn(evt) {
    evt.preventDefault();

    const inputId = getUserByIdBtn.previousElementSibling;

    fetchUserData(inputId.value).then(data => {
        if (data.status !== 200) {
           return result.lastElementChild.insertAdjacentHTML('beforeend',`<p>Такого пользователя нет!</p>`);
        }
        result.lastElementChild.insertAdjacentHTML('beforeend', `<p>Name: ${data.data.name} Age: ${data.data.age}</p>`)
    });
    getUserByIdBtn.parentNode.reset();
}

function handleAddUserBtn(evt) {
    evt.preventDefault();
    const inputName = addUserBtn.previousElementSibling.previousElementSibling;
    const inputAge = addUserBtn.previousElementSibling;

    fetchUserData('', {method: 'POST',
        body: JSON.stringify({ name: inputName.value , age: Number(inputAge.value)}),
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }}).then(data => {
        if (data.status === 201) {
            return result.lastElementChild.insertAdjacentHTML('beforeend',`<p>Добавление пользователя прошло успешно!</p>`);
         }
    });
    inputName.parentNode.reset();
    inputAge.parentNode.reset();
}

function handleRemoveUserBtn(evt) {
    evt.preventDefault();
    const inputId = removeUserBtn.previousElementSibling;

    fetchUserData(inputId.value, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}).then(data => {
            if (data.status !== 500) {
                return result.lastElementChild.insertAdjacentHTML('beforeend',`<p>Удаление пользователя прошло успешно!</p>`);
             } else {
                return result.lastElementChild.insertAdjacentHTML('beforeend',`<p>Ошибка!</p>`);
             }

    });
    inputId.parentNode.reset();
}

function handleUpdateUserBtn(evt) {
    evt.preventDefault();

    const inputId = updateUserBtn.previousElementSibling.previousElementSibling.previousElementSibling;
    const inputName = updateUserBtn.previousElementSibling.previousElementSibling;
    const inputAge = updateUserBtn.previousElementSibling;

    fetchUserData(inputId.value, {
        method: 'PUT',
        body: JSON.stringify({ name: inputName.value, age: Number(inputAge.value)}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }).then(data => {
        if (data.status === 200) {
            return result.lastElementChild.insertAdjacentHTML('beforeend',`<p>Изменение данных пользователя прошло успешно!</p>`);
         } else {
            return result.lastElementChild.insertAdjacentHTML('beforeend',`<p>Ошибка!</p>`);
         }
    });
    inputId.parentNode.reset();
    inputName.parentNode.reset();
    inputAge.parentNode.reset();
}