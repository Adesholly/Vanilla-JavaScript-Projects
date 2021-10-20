

//Getting the html Element

const formEl = document.getElementById('form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const password2El = document.getElementById('password2');





/*-------Variables---------*/




/*-----Functions-------*/

function showError(input, message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText  = message;
  
}

function showSuccess(input){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach((input) => {

        if(input.value === ''){

            showError(input, `${getIdName(input)} is required`);
            isRequired = true;

          
        }  else {
            showSuccess(input);
        }
        
    });
    
}



function getIdName(input){
    const word = input.id.charAt(0).toUpperCase() + input.id.slice(1)
    return word;
} 


function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        showSuccess(input);

    }else {
        showError(input, 'The email is invalid');
    }
    
}


function checkLength(input, min, max) {

    if(input.value.length < min){
        showError(input, `${getIdName(input)} must be more than ${min} characters`);

    } else if(input.value.length > max) {
        showError(input, `${getIdName(input)} can't be greater than ${max} `);

    } else{
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match');
        
    } else{
        showSuccess(input2);
    }
}

/*--------Events Listeners-----------*/

formEl.addEventListener('submit', (e) => {
    e.preventDefault();


    if(!checkRequired([usernameEl, emailEl, passwordEl, password2El]) ){

        checkEmail(emailEl);
        checkLength(usernameEl, 3, 10);
        checkLength(passwordEl, 8, 50);
        checkPasswordMatch(passwordEl, password2El);
    }
});


