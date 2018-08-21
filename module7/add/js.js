// --------------------------1-----------------------------
// const cat = document.querySelector('.categories');
// console.log('Название категории ' + cat.firstElementChild.lastElementChild.previousSibling.textContent);
// console.log('Количество вложенных li ' + cat.firstElementChild.lastElementChild.children.length);


// console.log('Название категории ' + cat.firstElementChild.nextElementSibling.lastElementChild.previousSibling.textContent);
// console.log('Количество вложенных li ' + cat.firstElementChild.nextElementSibling.lastElementChild.children.length);

// console.log('Название категории ' + cat.lastElementChild.lastElementChild.previousSibling.textContent);
// console.log('Количество вложенных li ' + cat.lastElementChild.lastElementChild.children.length);
// --------------------------1-----------------------------

// --------------------------2-----------------------------

// const red = document.querySelector('.list').firstElementChild;

// red.style.color = 'red';

// const blue = document.querySelector('.list').lastElementChild;

// blue.style.color = 'blue';

// const green = document.querySelector('.list').children[2];

// console.dir(document.querySelector('.list'));


// green.style.color = 'green';

// --------------------------2-----------------------------

// --------------------------3-----------------------------

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];


// const lists = elements.map(el => {
//     list = document.createElement('li');
//     list.textContent = el;
//     return list;
// })

// document.querySelector('.list1').append(...lists);

// --------------------------3-----------------------------

// --------------------------4-----------------------------

// while(true){
//     const addItem = prompt('Сейчас будут списки ', '');

//     if(!addItem){
//         break
//     }

//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(addItem));
//     document.querySelector('.list1').appendChild(li);

// }
// --------------------------4-----------------------------

// --------------------------5-----------------------------

// const checked = document.querySelectorAll('input[type=checkbox]:checked');

// const getInputsData = inputs => {
//    const arr = Array.from(inputs);
//     arr.map(el => console.log(el.value));
//     //  arr.reduce((acc, val) => {
//     //     return console.log(val.value)
//     // }, [])
// }

// getInputsData(checked);

// --------------------------5-----------------------------

// --------------------------6-----------------------------

// --------------------------6-----------------------------

const createPostCard = () => {
    const card = document.createElement('div');
    card.classList.add('post');

    const img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute('src', 'https://tpc.googlesyndication.com/daca_images/simgad/12209345999605189778');
    img.setAttribute('alt', 'asd');

    const heading = document.createElement('h2');
    heading.classList.add('post__title');
    heading.textContent = 'Lorem ipsum dolor';

    const para = document.createElement('p');
    para.classList.add('post__text');
    para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';

    const link = document.createElement('a');
    link.classList.add('button');
    link.setAttribute('href', '#');
    link.textContent = 'Read more'

    card.append(img, heading, para, link);

    return document.querySelector('.cards').append(card);
}
createPostCard();