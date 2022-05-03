const button = document.querySelector('.button');
const inputText = document.querySelector('input');
const errorIcon = document.querySelector('.error');
const errorMessage = document.querySelector('.error-message');
const cardInput = document.querySelector('.card-input');

const validateEmail = function () {
    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (inputText.value.match(mailformat)) {
        errorIcon.classList.add('hide');
        errorMessage.classList.add('hide');
        cardInput.classList.remove('error-border');
      return true;
    } else if (inputText === "") {
        errorIcon.classList.remove('hide');
        errorMessage.classList.remove('hide');
        cardInput.classList.add('error-border');
    } else {
        errorIcon.classList.remove('hide');
        errorMessage.classList.remove('hide');
        cardInput.classList.add('error-border');
        return false;
    }
  };

button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click!')
    validateEmail();
});