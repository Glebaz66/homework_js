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
// const posts = [
//     { title: "post 1", text: "text 1", isFav: true },
//     { title: "post 2", text: "text 2", isFav: false },
//     { title: "post 3", text: "text 3", isFav: true },
//     { title: "post 4", text: "text 4", isFav: false }
//   ];
// const postsData = document.querySelector('.post').innerHTML.trim();
// const postTmp = Handlebars.compile(postsData);
// const postMarkup = posts.reduce((acc, post) => acc + postTmp(post), '');
// document.querySelector('.post-root').innerHTML = postMarkup;
// -------------------------------------2---------------------------------------
// -------------------------------------3---------------------------------------
const pattern = /^(([а-яА-Я])+([а-яА-Я]))/gmi;
// const pattern2 = /(([а-яА-Я]))/gmi;

const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const submitBtn = document.querySelector('#submit-btn');


const validResult = {
  first_name: false,
  last_name: false,
};

function validate(evt) {
  evt.preventDefault();
  
  // document.querySelector('.results').insertAdjacentHTML('afterbegin', result);
  // console.log(/^(([а-яА-Я])+([а-яА-Я]))/gm.test(firstname.value));
  console.log('firstname true1', pattern.test(firstName.value));
  
  if(pattern.test(firstName.value) == true){
    validResult.first_name = true;
  } else {
    validResult.first_name = false;
  }
  console.log('firstname value1', firstName.value);
  
  console.log('lastname true2', pattern.test(lastName.value));
  if(pattern.test(lastName.value == true)){
    validResult.last_name = true;
  } else {
    validResult.last_name = false;
  }
  console.log('lastname value2', lastName.value);
  return console.log(validResult);
}

submitBtn.addEventListener("click", validate);

// -------------------------------------3---------------------------------------
