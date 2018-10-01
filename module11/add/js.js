const listItems = [
    { name: 'item 1', count: 2 },
    { name: 'item 2', count: 4 },
    { name: 'item 3', count: 12 },
    { name: 'item 4', count: 29 },
];
const list = document.querySelector('.list').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = listItems.reduce((acc, el) => acc + template(el,), '');

list.insertAdjacentHTML('afterbegin', template);
