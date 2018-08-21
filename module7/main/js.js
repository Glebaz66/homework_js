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
    const img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute('src', img);
    img.setAttribute('alt', 'asd');

    return img;
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
    const link = document.createElement('a');
    link.classList.add('button');
    link.setAttribute('href', link);
    link.textContent = 'Read more'

    return link;
}

const createPostCard = ({img, title, text, link}) => {
    const PostCard = document.createElement('div');
    PostCard.classList.add('post');

    PostCard.append(createImg(img), createHeading(title), createPara(text), createLink(link));

}

const createCard = posts => {
    return posts.map(post => createPostCard(post));
}

const cards = createCard(posts);
document.querySelector('.cards').append(...cards);

createPostCard();