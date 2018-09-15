const usersList = document.querySelector('.js-get-users-list');
const userId = document.querySelector('.js-get-user-id');
const createUser = document.querySelector('.js-create-user');
const deleteUser = document.querySelector('.js-delete-user');
const updateUser = document.querySelector('.js-update-user');

const result = document.querySelector('.list-users');
const table = document.querySelector('table');
const input = document.querySelector('input');


// function getAllUsers(evt){
//     evt.preventDefault();

//     fetch('https://test-users-api.herokuapp.com/users/')
//     .then(resp => {
//         if(resp.ok){
//             return resp.json();
//         }
//         throw new Error('fetch error');
//     })
//     .then(data => {
//         const usersListData = data.data.reduce((acc, elem) => acc + 
//         `<tr class="list-users-row">
//             <td>${elem.age}</td>
//             <td>${elem.name}</td>
//             <td>${elem.id}</td>
//         </tr>
//         `, '')
//         result.innerHTML = `${usersListData}`;
//         table.style.display = 'block';
//     })
//     .catch(error => {
//         console.log('error2', error);
//     })
// }

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
        
        const inputValue = input.value;
        const id = data.data.find(elem => elem.id === inputValue);
        
        const userId = document.createElement('div');
        userId.className('.user-id-text');
        console.log(userId);
        
        return userId.appendChild(user-id-text) += `${id}`;
        
    })
    .catch(error => {
        console.log('Person not found', error);
        
    })
}
// usersList.addEventListener('click', getAllUsers);
userId.addEventListener('click', getUserById);