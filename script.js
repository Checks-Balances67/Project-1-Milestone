const form = document.getElementById('contact-form');

const toggleBtn = document.querySelector('#toggle-bio-btn');
const extraBio = document.querySelector('#extra-bio');

toggleBtn.addEventListener('click', ()=> {
  const isHidden = extraBio.hasAttribute('hidden');

  if (isHidden) {
    extraBio.removeAttribute('hidden');
    toggleBtn.textContent = 'Show Less';
    toggleBtn.setAttribute('aria-expanded' , 'true');
  } else {
    extraBio.setAttribute('hidden' ,' ');
    toggleBtn.textContent = 'Show More About Me';
    toggleBtn.setAttribute('aria-expanded', true');
  }
});
  
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

