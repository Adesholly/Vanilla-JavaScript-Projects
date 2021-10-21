/*----------------Getting HTML Element------------------*/

const movieEl = document.getElementById('movies');
const containerEl = document.querySelector('.container');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');



//Storaging the selected movie and price into the local storage



function setMoviesToLS(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Increasing the selected and price
function updateCount(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected')
    
    

    
    const ticketPrice = +movieEl.value;
    const count = selectedSeat.length;

    const totalPrice = count * ticketPrice;
    totalEl.innerText = totalPrice
    countEl.innerText = count;
}




/*------------------Adding Event Listeners---------------*/

movieEl.addEventListener('change', e => {
    updateCount();
})


containerEl.addEventListener('click', e => {
    
    if(e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied') ){

        e.target.classList.toggle('selected');
        updateCount();
    }
})


