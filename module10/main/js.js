const refs = {
    url: "https://test-users-api.herokuapp.com/users",
    formAllUsers: document.querySelector(".js-all-users"),
    btnAllUsers: document.querySelector(".js-btn-all-users"),
    tBody: document.querySelector(".result-all-users"),
    formUserById: document.querySelector(".js-user-by-id"),
    inputUserById: document.querySelector(".user-by-id"),
    btnUserById: document.querySelector(".js-btn-user-by-id"),
    resultUserById: document.querySelector(".result-user-by-id"),
    formAddUser: document.querySelector(".js-add-user"),
    inputNewName: document.querySelector(".new-name"),
    inputNewAge: document.querySelector(".new-age"),
    resultNewUser: document.querySelector(".result-new-user"),
    formRemoveUser: document.querySelector(".js-remove-user"),
    inputRemoveUser: document.querySelector(".id-remove"),
    resultRemoveUser: document.querySelector('.result-remove-user'),
    formUpdate: document.querySelector('.js-update-user'),
    inputUpdateId: document.querySelector('.input-update-id'),
    inputUpdateName: document.querySelector('.input-update-name'),
    inputUpdateAge: document.querySelector('.input-update-age'),
    resultUpdate: document.querySelector('.result-update'),
  };
  //все пользователи в БД.
  
  refs.formAllUsers.addEventListener("submit", handleGetAllUsers);
  
  function handleGetAllUsers(e) {
    e.preventDefault();
    fetchUsers().then(updateView);
  }
  
  function updateView (users) {
    const arr = users.data;
    const htmlString = arr.reduce((acc, user) => acc + createTableRow(user), "");
    refs.tBody.innerHTML = htmlString;
    document.querySelector('.result-all-users').style.display = 'block';
  }
  
  function createTableRow({
    id,
    name,
    age
  }) {
    return `
      <tr class="list-row">
      <td class="list-item">${id}</td>
      <td class="list-item">${name}</td>
      <td class="list-item">${age}</td>
      </tr>
      `;
  }
  
  function fetchUsers() {
    return fetch (refs.url)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error ("Error fetching data");
      })
      .catch(error => {
        console.error("Error: ", error);
      });
  }
  
  //- функция возврата пользователя по переданному id.
  
  refs.formUserById.addEventListener ("submit", handleGetUserById);
  
  function handleGetUserById(e) {
    e.preventDefault();
    fetchUsers().then(findUserById);
  }
  
  function findUserById (info) {
    const array = info.data;
    const user = array.find (el => el.id === refs.inputUserById.value);
    if (user === undefined) {
        document.querySelector('.result-user-by-id').style.background = 'red';
      refs.resultUserById.textContent = `Такого пользователя нет!`;
    } else
    document.querySelector('.result-user-by-id').style.background = 'aquamarine';
    refs.resultUserById.innerHTML = `<ul class="user-id-list">
    <li class="user-id-list-item"><span class="bold">ID:</span> ${user.id}</li>
    <li class="user-id-list-item"><span class="bold">Name:</span> ${user.name}</li>
    <li class="user-id-list-item"><span class="bold">Age:</span> ${user.age}</li>
    </ul>`;
  }
  
  // - функция создания в БД юзера с полями name и age.
  
  refs.formAddUser.addEventListener ("submit", handleAddNewUser);
  
  function handleAddNewUser(e) {
    e.preventDefault();
    fetchNewUser();
    updateData();
  }
  
  function updateData() {
    refs.resultNewUser.textContent = `Пользователь ${refs.inputNewName.value} успешно добавлен`;
    document.querySelector('.result-new-user').style.background = 'aquamarine';

  }
  
  function fetchNewUser() {
    fetch (refs.url, {
        method: 'POST',
        body: JSON.stringify({
          name: `${refs.inputNewName.value}`,
          age: `${refs.inputNewAge.value}`,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then (response => response.json())
      .catch(error => console.log ('ERROR' + error));
  }
  
  //- функция удаления из БД юзера по указанному id.
  
  refs.formRemoveUser.addEventListener("submit", handleRemoveUser);
  
  function handleRemoveUser(e) {
    e.preventDefault();
    fetchUsers().then (findUserForRemove);
  }
  
  function findUserForRemove(info) {
    const arr = info.data;
    const user = arr.find(el => el.id === refs.inputRemoveUser.value);
  
    if (user === undefined) {
      refs.resultRemoveUser.textContent = `User ${refs.inputRemoveUser.value} isn't found`;
    } else {
      fetchRemoveUser();
      updateAfterRemoving();
    }
  }
  
  function updateAfterRemoving() {
    refs.resultRemoveUser.textContent = `User ${refs.inputRemoveUser.value} successfully deleted`;
  }
  
  function fetchRemoveUser() {
    fetch(`https://test-users-api.herokuapp.com/users/${refs.inputRemoveUser.value}`, {
        method: "DELETE"
      })
      .then(response => response.json())
      .catch(error => console.log('ERROR' + error));
  }
  
  //  - функция обновления данных пользователя по id. 
  
  refs.formUpdate.addEventListener ("submit", handleUpdate);
  
  function handleUpdate(e) {
    e.preventDefault();
    fetchUsers().then(findUserForUpdate);
  }
  
  function findUserForUpdate (info) {
    const arr = info.data;
    const user = arr.find(el => el.id === refs.inputUpdateId.value);
  
    if (user === undefined) {
      refs.resultUpdate.textContent = `User ${refs.inputUpdateId.value} isn't found`;
    } else {
      fetchUpdate();
      updateUser();
    }
  }
  
  function updateUser() {
    refs.resultUpdate.textContent = `New user ${refs.inputUpdateId.value} successfully updated`;
  }
  
  function fetchUpdate() {
    fetch(`https://test-users-api.herokuapp.com/users/${refs.inputUpdateId.value}`, {
        method: "PUT",
        body: JSON.stringify({
          name: `${refs.inputUpdateName.value}`,
          age: `${refs.inputUpdateAge.value}`
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .catch(error => console.log('ERROR' + error));
  }