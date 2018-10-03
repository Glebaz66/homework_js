// -------------------------------------1---------------------------------------
// const lists = document.querySelector(".list").innerHTML.trim();
// const template = Handlebars.compile(lists);
// const listItems = [
//     { name: "item 1", count: 2 },
//     { name: "item 2", count: 4 },
//     { name: "item 3", count: 12 },
//     { name: "item 4", count: 29 }
// ];
// const markup = listItems.reduce((acc, list) => acc + template(list), "");
// document.querySelector('.listRoot').insertAdjacentHTML('afterbegin', markup) ;
// -------------------------------------1---------------------------------------
// -------------------------------------2---------------------------------------
const posts = [
    { title: "post 1", text: "text 1", isFav: true },
    { title: "post 2", text: "text 2", isFav: false },
    { title: "post 3", text: "text 3", isFav: true },
    { title: "post 4", text: "text 4", isFav: false }
  ];
const postsData = document.querySelector('.post').innerHTML.trim();
const postTmp = Handlebars.compile(postsData);
const postMarkup = posts.reduce((acc, post) => acc + postTmp(post), '');
document.querySelector('.post-root').innerHTML = postMarkup;
// -------------------------------------2---------------------------------------
// -------------------------------------3---------------------------------------
// -------------------------------------3---------------------------------------

