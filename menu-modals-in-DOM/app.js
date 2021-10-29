const toggle = document.getElementById('toggle');
const modal = document.getElementById('modal-container'); 
const start = document.getElementById('start');

const closeEl = document.getElementById('close');



toggle.addEventListener('click', () => document.body.classList.toggle('show-nav') );

start.addEventListener('click', () => modal.classList.add('show-modal') );


closeEl.addEventListener('click', () => modal.classList.remove('show-modal') );

window.addEventListener('click', e => {
    e.target == modal ? modal.classList.remove('show-modal') :false
});