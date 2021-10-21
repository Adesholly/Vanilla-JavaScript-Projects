



const movieEl = document.getElementById('movies');
const containerEl = document.querySelector('.container');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');




//Increasing the selected and price
function updateCount(){
    const selected = document.querySelectorAll('.row .seat.selected')
    
    
    const ticketPrice = +movieEl.value;
    const count = selected.length;


    const totalPrice = count * ticketPrice;
    totalEl.innerText = totalPrice
    countEl.innerText = count;
}



//Adding Event Listener

containerEl.addEventListener('click', e => {
    
    if(e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied') ){

        e.target.classList.toggle('selected');
        
        updateCount();
    }
})




