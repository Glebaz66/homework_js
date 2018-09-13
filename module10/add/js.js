// -------------------------1------------------------
// const input = document.querySelector("input");
// const submitBtn = document.querySelector(".js-submit");
// const result = document.querySelector(".js-result");
// const apiUrl = "https://restcountries.eu/rest/v2/name/";

// function fetchCountryData (evt) {
//     evt.preventDefault();
//     fetch(`${apiUrl}${input.value}`)
//     .then(response => {
//         if (response.ok) return response.json();
//         throw new Error("Error fetching data");
//     })
//     .then(data => {
//         console.log("data inside then: ", data);
//         result.innerHTML = 
//         `Country ${data[0].name} <br>
//         Capital ${data[0].capital} <br>
//         Region ${data[0].region} <br>
//         Flag <img src="${data[0].flag}"> <br>
//         Language ${data[0].languages[0].name} <br>
//         Currencie ${data[0].currencies[0].name} <br>
//         Population ${data[0].population} <br>`
//         // result.c
//     })
//     .catch(error => {
//         console.error("Error: ", error);
//     });
// };
// submitBtn.addEventListener("click", fetchCountryData);
// -------------------------1------------------------

// -------------------------2------------------------

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// const apiUrl = "https://api.github.com/users/";


// function fetchUserData(evt) {
//     evt.preventDefault();

//     fetch(`${apiUrl}${input.value}`)

//     .then(response => {
        
//         if(response.ok) return response.json();
//         throw new Error('fetch error');
        
//     })

//     .then(data => {
//         console.log(data);
//         result.innerHTML = 
//         `<div class="ava">Avatar: <img src="${data.avatar_url}" class="image"></div>
//         <div class="user">Username: ${data.name}"</div>
//         <div class="bio">Bio: ${data.bio}</div>
//         <div class="repo">Public repos: ${data.public_repos}</div>
//         `
//     })
    
//     .catch(error => {
//         console.error('Error2: ', error);
        
//     });
// }

// submitBtn.addEventListener("click", fetchUserData);
// -------------------------2------------------------

// -------------------------3------------------------
const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");



function fetchUsers(evt) {
    evt.preventDefault();
    
    fetch('https://test-users-api.herokuapp.com/users/')

    .then(responce => {
        if(responce.ok) {
            console.log(responce);
        }return responce.json();
            
        
        throw new Error('fetch error');
    })

    .then(data => {
        console.log('тут then2', data.data);

        
        const arrData = data.data.reduce((acc, elem) => acc + `<tr> <td>${elem.id}</td> <td>${elem.name}</td> <td>${elem.age}</td></tr>`, '')
        
        result.innerHTML = `<table>${arrData}</table>`
        console.log('тут массив data', arrData);
    })

    .catch(error => {
        console.log('erro2', error);
        
    })
}
getBtn.addEventListener("click", fetchUsers);
// -------------------------3------------------------