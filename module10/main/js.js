const usersList = document.querySelector('.js-get-users-list');
const userId = document.querySelector('.js-get-user-id');
const createUser = document.querySelector('.js-create-user');
const deleteUser = document.querySelector('.js-delete-user');
const updateUser = document.querySelector('.js-update-user');

const result = document.querySelector('.list-users');
const table = document.querySelector('table');
const input = document.querySelector('input');

usersList.addEventListener('click', getAllUsers);
userId.addEventListener('click', getUserById);

function getAllUsers(evt){
    evt.preventDefault();

    fetch('https://test-users-api.herokuapp.com/users/')
    .then(resp => {
        if(resp.ok){
            return resp.json();
        }
        throw new Error('fetch error');
    })
    .then(data => {
        const usersListData = data.data.reduce((acc, elem) => acc + 
        `<tr class="list-users-row">
            <td>${elem.age}</td>
            <td>${elem.name}</td>
            <td>${elem.id}</td>
        </tr>
        `, '')
        result.innerHTML = `${usersListData}`;
        table.style.display = 'block';
    })
    .catch(error => {
        console.log('error2', error);
    })
}

function getUserById(evt){
    evt.preventDefault();

    fetch('https://test-users-api.herokuapp.com/users/')
    .then(resp => {
        if(resp.ok) {
            return resp.json();
        }
        throw new Error('fetch error');
    })
    .then(data => {
        // console.log(data.data[0].id);
        console.log(data.data.name);
        
        const inputValue = input.value;
        const id = data.data.find(elem => elem.id || elem.id == elem.name === inputValue);
        console.log(id);
        
        const userId = document.querySelector('.user-id');
        console.log('id',id.id);
        if(inputValue == id) {
            return userId.innerHTML = `Personal id: ${id}`;
        } else {return null};
    })
    .catch(error => {
        console.log('Person not found', error);
        
    })
}

