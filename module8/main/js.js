const galleryItems = [
    { preview: 'img/1.jpg', fullview: 'img/1F.jpg', alt: "alt text 1" },
    { preview: 'img/2.jpg', fullview: 'img/2F.jpg', alt: "alt text 2" },
    { preview: 'img/3.jpg', fullview: 'img/3F.jpg', alt: "alt text 3" },
    { preview: 'img/4.jpg', fullview: 'img/4F.jpg', alt: "alt text 4" },
    { preview: 'img/5.jpg', fullview: 'img/5F.jpg', alt: "alt text 5" },
    { preview: 'img/6.jpg', fullview: 'img/6F.jpg', alt: "alt text 6" },
  ];
  

  document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.js-image-gallery'); 
    
    const createFullview = ({fullview,alt}) => {
      return `<div class="fullview"><img src="${fullview}" alt="${alt}" class="fullImg" width=1200 height=500></div>`
    };
  
    const previewLi = galleryItems.reduce((acc,{preview,fullview,alt}) =>
    acc + `<li><img src="${preview}" class="image" data-fullview="${fullview}" alt="${alt}" width=200 height=150></li>`,'');
    const createPreview = () => {
      return `<ul class="preview">${previewLi}</ul>`
    };
  
    gallery.insertAdjacentHTML('afterbegin', createPreview());
    gallery.insertAdjacentHTML('afterbegin', createFullview(galleryItems[0]));
  
    const previewImg = gallery.querySelector('.image');
    previewImg.classList.add('clickElem');
  
    const handleImgClick = (event) => {
      event.preventDefault();
  
      if(event.target.nodeName !== 'IMG') return;
  
      const fullImg = gallery.querySelector('.fullImg');
      const datasetFullview = event.target.dataset.fullview;
      const altFullview = event.target.alt;
      
      fullImg.setAttribute('src', datasetFullview);
      fullImg.setAttribute('alt', altFullview);
  
      const clickElem = gallery.querySelector('.image.clickElem');
      clickElem.classList.remove('clickElem');
      
      event.target.classList.add('clickElem');
    };
  
    gallery.lastElementChild.addEventListener('click', handleImgClick);
})