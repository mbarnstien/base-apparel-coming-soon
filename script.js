const button = document.querySelector('.button');
const input = document.getElementById('email').value;
const errorIcon = document.querySelector('.error');
const errorMessage = document.querySelector('.error-message');
const cardInput = document.querySelector('.card-input');

function checkEmail(input) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        return (true)
    }
    return (false)
};

button.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click!')
    if (input === "") {
        errorIcon.classList.remove('hide');
        errorMessage.classList.remove('hide');
        cardInput.classList.add('error-border');

    } else if (!checkEmail(input)) {
        errorIcon.classList.remove('hide');
        errorMessage.classList.remove('hide');
        cardInput.classList.add('error-border');
    } else {
        errorIcon.classList.add('hide');
        errorMessage.classList.add('hide');
        cardInput.classList.remove('error-border');
    }
});