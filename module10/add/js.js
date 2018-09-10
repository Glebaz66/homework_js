// -------------------------1------------------------
const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const apiUrl = "https://restcountries.eu/rest/v2/name/";


/*
@param {FormEvent} evt
*/

function fetchCountryData (event) {
    event.preventDefault();
    fetch(`${apiUrl}${input.value}`)
    .then(response => {
        if (response.ok) return response.json();
        throw new Error("Error fetching data");
        
    })
    .then(data => {
        console.log("data inside then: ", data);
        result.innerHTML = 
        `Country ${data[0].name} <br>
        Capital ${data[0].capital} <br>
        Region ${data[0].region} <br>
        Flag <img src="${data[0].flag}"> <br>
        Language ${data[0].languages[0].name} <br>
        Currencie ${data[0].currencies[0].name} <br>
        Population ${data[0].population} <br>`
        result.c
    })
    .catch(error => {
        console.error("Error: ", error);
    });
    
};
submitBtn.addEventListener("click", fetchCountryData);
// -------------------------1------------------------