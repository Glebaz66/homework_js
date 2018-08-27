const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];


const createImg = img => {
    const pic = document.createElement('img');
    pic.classList.add('post__image');
    pic.setAttribute('src', img);
    pic.setAttribute('alt', 'some image');

    return pic;
}

const createHeading = title => {
    const heading = document.createElement('h2');
    heading.classList.add('post__title');
    heading.textContent = title;

    return heading;
}

const createPara = text => {
    const para = document.createElement('p');
    para.classList.add('post__text');
    para.textContent = text;

    return para;
}

const createLink = link => {
    const linkTo = document.createElement('a');
    linkTo.classList.add('button');
    linkTo.setAttribute('href', link);
    linkTo.textContent = 'Read more'

    return linkTo;
}
const createPostCards = ({img, title, text, link}) => {
    const postCard = document.createElement('div');
    postCard.classList.add('post');

    postCard.append(createImg(img), createHeading(title), createPara(text), createLink(link));
    return postCard;
}


const createCard = posts => {
    return posts.map(post => createPostCards(post));
}

const cards = createCard(posts);
document.querySelector('.cards').append(...cards);


