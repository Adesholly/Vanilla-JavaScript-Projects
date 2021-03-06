const addUserBtn = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double');
const showMillionaireBtn = document.getElementById('show-millionaire');

const sortBtn = document.getElementById('sort');
const totalWealthBtn = document.getElementById('wealth');

const mainEl = document.getElementById('main');



let data = [];

getRandomUser()



async function getRandomUser(){
    const respond = await fetch('https://www.randomuser.me/api');

    const respondData = await respond.json();

    const user = respondData.results[0];
    
    //Creating a constructor from user data
    const newUser = {
        name:   `${user.name.first} ${user.name.last}`,
        money:  Math.floor(Math.random() * 1000000)
    };
    
    addUser(newUser);

}


//Updating the DOM user information
function updateDOM(availableData = data){
   
    //clear the main div first
    mainEl.innerHTML = `
        <h2><strong>Person</strong> Wealth</h2>
    `;
    availableData.forEach((item) => {
        const person = document.createElement('div');
        person.classList.add('person');

        person.innerHTML = `
            <strong>${item.name}</strong> ${formatMoney(item.money)}
        `;
        mainEl.appendChild(person);
    });

}


//Adding User to the DOM
function addUser(obj){
    data.push(obj);

    updateDOM()
}

//Addung Double Money functionality
function doubleMoney(){
    
    data = data.map((item) => {
      return {...item, money: item.money * 2}
    })

    updateDOM()
}


//Filtering out the none millionaires
function showOnlyMillionaires(){
    data = data.filter((item) => {
        return item.money > 1000000
    })

    updateDOM();
}


//Sorting the user by the richest person
function sortByRichest(){
    data = data.sort((a, b) => {
        return b.money - a.money;
    })
    updateDOM();
}

//Adding all the money together
function calculateTotalWealth(){
    const totalWealth = data.reduce((acc, item) => 
        (acc += item.money), 0);
    updateDOM();
    const totalWealthEl = document.createElement('div');
    totalWealthEl.innerHTML = `
        <h3><strong>Total wealth: </strong>  ${formatMoney(totalWealth)}</h3>
    `;
    mainEl.appendChild(totalWealthEl);
   

}

//Format the money to look like currency
function formatMoney(money){
    return '$' + (money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  
 
 }


//Event Listerners
addUserBtn.addEventListener('click', getRandomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
showMillionaireBtn.addEventListener('click', showOnlyMillionaires);
sortBtn.addEventListener('click', sortByRichest);
totalWealthBtn.addEventListener('click', calculateTotalWealth);
