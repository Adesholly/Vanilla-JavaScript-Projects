/*----------------Getting HTML Element------------------*/

const movieEl = document.getElementById('movies');
const containerEl = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');

/*----X------------Getting HTML Element-----------X-------*/

displayLS()

//Storaging the selected movie and price into the local storage
function setMoviesToLS(movieSeatIndex){

    localStorage.setItem('selectedMovieIndex', movieSeatIndex);
    
}

function displayLS(){

    const selectedMovieSeat = JSON.parse(localStorage.getItem('selectedMovieSeat'));

    if(selectedMovieSeat !== null && selectedMovieSeat.length > 0){
        seats.forEach( (seat, index) => {

            if(selectedMovieSeat.indexOf(index) !== -1){
                seat.classList.add('selected');
            }
            
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null){
        movieEl.selectedIndex = selectedMovieIndex;
    }
}


//Increasing the selected and price
function updateCount(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected')

    const seatIndexes = [...selectedSeat].map( seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedMovieSeat', JSON.stringify(seatIndexes));
    
    const ticketPrice = +movieEl.value;
    const count = selectedSeat.length;

    const totalPrice = count * ticketPrice;
    totalEl.innerText = totalPrice
    countEl.innerText = count;
}




/*------------------Adding Event Listeners---------------*/

movieEl.addEventListener('change', e => {
    setMoviesToLS(e.target.selectedIndex)
    updateCount();
})


containerEl.addEventListener('click', e => {
    
    if(e.target.classList.contains('seat') && 
       !e.target.classList.contains('occupied') ){

        e.target.classList.toggle('selected');
        updateCount();
    }
})
updateCount();

