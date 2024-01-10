const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal');
console.log(btnOpenModal);
const openModal= function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
 function closeModal(params) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}
for (let index = 0; index < btnOpenModal.length; index++) {
    const element = btnOpenModal[index];
    element.addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);
document.addEventListener('keydown',function(e){
    console.log(e.key);
    if (e.key==='Escape'&& !modal.classList.contains('hidden')) {
        closeModal();
    }
})