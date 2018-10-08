const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const refs = {
    filterForm: document.querySelector('.js-form'),
    checkboxes: document.querySelectorAll('.js-form input[type=checkbox]'),
    result: document.querySelector('.js-result'),
    template: document.querySelector('.js-template'),
    reset: document.querySelector('button[type=reset]'),
}
// console.log(refs.reset);


let filter = {
    size: [],
    color: [],
    release_date: [],
}

const handleSizeForm = (evt) => {
    evt.preventDefault();
    
    Array.from(refs.checkboxes).reduce((acc, el) => {
      const name = el.getAttribute('name');
      const ternNumb = name == 'color' ? el.value : Number(el.value);
      el.checked ? filter[name].push(ternNumb) : acc;
      console.log(name);
      
      // filter[name] == filter[name] ? filter[name].pop(ternNumb) : acc;
    }, '');
    
    const filtered =  Object.keys(filter).reduce((acc,key) => {
      if(filter[key].length) {
        return  acc.filter(el => filter[key].includes(el[key]))
      }
      return acc;
    }, laptops);
    
    // console.log(filtered);
    const source = refs.template.innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = filtered.reduce((acc, el) => acc + template(el),'');
    
    refs.result.innerHTML = markup;
  }
  
  const clear = (evt) => {
    evt.preventDefault(); 
    window.location.reload();
  }
  // console.log(clear);

refs.filterForm.addEventListener('submit', handleSizeForm);
refs.reset.addEventListener('onclick', clear);
// console.log(refs);