const form = document.getElementById('contact-form');

form.addEventListener('submit, (event) =>{
  let isValid = true;

const fields = [
  {input: document.getElementById('full-name'), error: document.getElementById('name-error'), msg: 'Please enter your full name.'},
  {input: document.getElementById('email'), error: document.getElementById('email-error'), msg: 'Please enter a valid email address.' },
  {input: document.getElementById('message'), error: document.getElementById('message-error'), msg: 'Please enter a message before submitting.'}
];

fields.forEach(({ input, error, msg})=>{
  if (!input.checkValidity()) {
    input.setAttribute('aria-invalid', 'true);
    error.texyContent = msg;
    isValid = false;
  }else{
    input.removeAttribute('aria-invalid');
    error.textContent = '';
  }
});

 if (!isValid){
    event.preventDefault();
 }
});

