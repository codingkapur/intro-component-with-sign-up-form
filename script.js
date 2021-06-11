'use strict'

const firstNameInput = document.querySelector('.first-name');
const lastNameInput = document.querySelector('.last-name');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const submitFormBtn = document.querySelector('.submit-btn');

const errorMessage1 = document.querySelector('.first-name-error');
const errorMessage2 = document.querySelector('.last-name-error');
const errorMessage3 = document.querySelector('.email-error');
const errorMessage4 = document.querySelector('.password-error');

const errorIcon1 = document.querySelector('.error1');
const errorIcon2 = document.querySelector('.error2');
const errorIcon3 = document.querySelector('.error3');
const errorIcon4 = document.querySelector('.error4');

const validateFirstName = function(){
    const firstName= firstNameInput.value;
    if(firstName.trim() ===""){
        firstNameInput.style.border= "1px solid red"
        errorMessage1.style.opacity= "1";
        errorIcon1.style.opacity="1";
        firstNameInput.value="";
    } 
    else 
    firstNameInput.style.border="1px solid #52dd50";
    errorMessage1.style.opacity= "0";
        errorIcon1.style.opacity="0";
}
const validateLastName = function(){
    const lastName= lastNameInput.value;
    if(lastName.trim() ===""){
        lastNameInput.style.border= "1px solid red"
        errorMessage2.style.opacity= "1";
        errorIcon2.style.opacity="1";
        lastNameInput.value="";
    } 
    else 
    lastNameInput.style.border="1px solid #52dd50";
    errorMessage2.style.opacity= "0";
        errorIcon2.style.opacity="0";
}
const validateEmail = function(){
    const email= emailInput.value;
    if(email.split("").includes("@")) {
        emailInput.style.border= "1px solid #52dd50"
        errorMessage3.style.opacity= "0";
        errorIcon3.style.opacity="0";
        emailInput.style.color= "#000";
    }
    else {
        emailInput.style.border= "1px solid red"
        errorMessage3.style.opacity= "1";
        errorIcon3.style.opacity="1";
        emailInput.style.color= "red";
    } 
}
const validatePassword = function(){
    const password= passwordInput.value;
    if(password.trim() ===""){
        passwordInput.style.border= "1px solid red"
        errorMessage4.style.opacity= "1";
        errorIcon4.style.opacity="1";
        passwordInput.value="";
    } 
    else 
    passwordInput.style.border="1px solid #52dd50";
    errorMessage4.style.opacity= "0";
        errorIcon4.style.opacity="0";
}

submitFormBtn.addEventListener('click', function(){
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
})

