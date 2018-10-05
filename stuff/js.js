const galleryItems = [
    { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
    { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
    { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
    { img: 'https://placeimg.com/300/150/people', text: 'people' },
    { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
    { img: 'https://placeimg.com/300/150/any', text: 'random' }
  ];
  
  const container = document.querySelector('.gallery-content');
  const source = document.querySelector('#gallery-item').innerHTML.trim();
  const template = Handlebars.compile(source);
  
  const markup = galleryItems.reduce((acc, item) => acc + template(item), '');
  container.innerHTML = markup;
  
  
  