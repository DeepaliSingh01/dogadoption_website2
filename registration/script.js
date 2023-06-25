const logregbox = document.querySelector('.logreg-box');
const logiLink = document.querySelector('login-Link');
const registerLink = document.querySelector('register-Link');

registerLink.addEventListener('click',() =>{
 logregbox.classList.add('active');
});

loginLink.addEventListener('click',() =>{
    logregbox.classList.remove('active');
   });