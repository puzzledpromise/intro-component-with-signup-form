const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password= document.getElementById('password');

const form = document.getElementById('form');
const btnClaim = document.getElementById('btn-claim');

// showError
function showError(input){
    input.classList.add('error');
    input.parentElement.querySelector('small').classList.add('error');
    input.parentElement.querySelector('i').classList.add('error');
}

// showSuccess
function showSuccess(input){
    input.classList.remove('error');
    input.parentElement.querySelector('small').classList.remove('error');
    input.parentElement.querySelector('i').classList.remove('error');
}

// Check if field is empty and set Error
function isEmpty(input){
    if(input.value.length < 1){
        showError(input);
    }else{
        showSuccess(input);
    }
}

// Check for valid email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input);
    }
}

// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    isEmpty(firstName);
    isEmpty(lastName);
    checkEmail(email);
});

firstName.onblur =function(e) {isEmpty(firstName);};
lastName.onblur =function(e) {isEmpty(lastName);};
email.onblur = function(e){checkEmail(email)};



