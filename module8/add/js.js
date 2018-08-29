// -----------------------------1-----------------------------
// const clickcounter = document.querySelector('.button-counter');

// clickcounter.addEventListener('click', clickcounterHandler);
// let i = 0;
// function clickcounterHandler(){
//     i++
//     clickcounter.textContent = i;
// }
// -----------------------------1-----------------------------

// -----------------------------2-----------------------------
// const add = document.querySelector('button');

// const num1 = document.querySelector('.num1')

// const num2 = document.querySelector('.num2')

// const result = document.querySelector('.result')

// const onClick = () => {
//     result.textContent = Number(num1.value) + Number(num2.value);
// } 
// add.addEventListener('click', onClick);
// -----------------------------2-----------------------------

// -----------------------------3-----------------------------

// const sub = document.querySelector('.js-sub')
// const value = document.querySelector('.js-value')
// const add = document.querySelector('.js-add')

// let counter = 0;

// const onClickSub = () => {
//     if(counter > 0){
//         counter--
//         value.textContent = counter;
//     }
// }

// const onClickAdd = () => {
//     counter++
//     value.textContent = counter;
// }

// sub.addEventListener('click', onClickSub);
// add.addEventListener('click', onClickAdd);

// -----------------------------3-----------------------------

// -----------------------------4-----------------------------
// const options = document.querySelector('.options');
// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');

// const handleBtnClick = (evt) => {
//     evt.preventDefault();

//     let checked = options.querySelector('input:checked');
//     result.textContent += `${checked.parentNode.textContent}`
// }

// btn.addEventListener('click', handleBtnClick);

// -----------------------------4-----------------------------

// -----------------------------5-----------------------------
// const images = document.querySelector('.images');

// const onImgClick = (evt) => {
//     evt = evt.target;
//     if(evt.nodeName === 'IMG'){
//         alert(`this img src is: ${evt.src}`);
//     } else {return};
// }

// images.addEventListener('click', onImgClick);
// -----------------------------5-----------------------------

// -----------------------------6-----------------------------

// const list = document.querySelector('.list');
// const button = document.querySelector('button');

// const delOnClick = (evt) =>{
//     evt = evt.target;

//     if(evt.nodeName == 'BUTTON'){
//         evt.parentNode.remove();
//     } else {return null};
// }

// list.addEventListener('click', delOnClick);
// -----------------------------6-----------------------------

// -----------------------------7-----------------------------

// const inputs = document.querySelector('.inputs');

// // console.log(inputs);

// const checkLendth = (evt) => {
//     evt = evt.target;
//     const checkDataLendth = Number(evt.dataset.length);
//     // console.log(evt.dataset.length);
    
//     if(evt.value.length !== checkDataLendth){
//         evt.style.outline = "1px solid red";
//     } else {
//         evt.style.outline = "1px solid green";
//     }
// }
// inputs.addEventListener('blur', checkLendth, true);

// -----------------------------7-----------------------------

// -----------------------------8-----------------------------

// const input = document.querySelector('.input');
// const inputValue = document.querySelector('.input-value');

// const inputFocus = () => {
//     console.log('input is in focus');
// }

// const showInputValue = () => {
//     inputValue.textContent = `Current input value: ${input.value}`;
//     if(inputValue.textContent.length > 40){
//         inputValue.style.color = "red"
//     }
// }

// input.addEventListener('focus', inputFocus, true);
// input.addEventListener('input', showInputValue, true);
// -----------------------------8-----------------------------