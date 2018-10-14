const form =  document.querySelector('form');
const submitBtn = document.querySelector('button[type=submit]');
const template = document.querySelector('.js-template');

// const regUrl = /^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

// const source = template.innerHTML.trim();
// const temp = Handlebars.compile(source);


const fetchUrl = function() {

    const apiKey = '5bc324a761e829167cc8accc959198587364ce47e85f1';
    const apiUrl = 'https://www.google.com';

	return fetch(`http://api.linkpreview.net/?key=${apiKey}q=${apiUrl}`)
	.then(response => {
		if(response.ok) return response.json();
		throw new Error('error');

    }).catch(err => console.log('fetch err', err));
}
submitBtn.addEventListener('click', fetchUrl);