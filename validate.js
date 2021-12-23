const contactForm = document.getElementById('contact-form');
const { email } = contactForm.elements;
const regex = /[A-Z]/g;
const errorMsg = document.querySelector('.error-message');

email.addEventListener('click', () => {
  errorMsg.style.display = 'none';
});

contactForm.addEventListener('submit', (e) => {
  if (email.value.match(regex).length !== 0) {
    e.preventDefault();
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Invalid Email: your Email should be in lower case';
  }
});