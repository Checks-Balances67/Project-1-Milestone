const form = document.getElementById('contact-form');

form.addEventListener('submit, (event) =>{
  let isValid = true;

const fields = [
  {input: document.getElementById('full-name'), error: document.getElementById('name-error'), msg: 'Please enter your full name.'},
  {input: document.getelementById('email')
