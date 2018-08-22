const page = document.querySelector('.page');
const openModalBnt = document.querySelector('.js-open-modal');
const closeModalBnt = document.querySelector('button[data-action="close-modal"]');

openModalBnt.addEventListener('click', HandleOpenModal);
closeModalBnt.addEventListener('click', HandleCloseModal);

function HandleOpenModal() {
    page.classList.add('show-modal');
    window.addEventListener('keydown', handleModalEcsPress);
}
function HandleCloseModal() {
    page.classList.remove('show-modal');
    window.removeEventListener('keydown', handleModalEcsPress);
}

function handleModalEcsPress(evt) {
    const code = evt.code;
    if(code === 'Escape'){
        HandleCloseModal();
    }
}