//js file
let username = document.getElementById('username');
let form = document.querySelector('.form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirm = document.getElementById('confirmPassword');
let btn = document.querySelector('.btn');
let small = document.querySelector('small');

function validform() {
    check([username, email, password, confirm])
    passwordLength(password, 6, 10)
    check_mail(email)
    confirm_pass(password, confirm)
}

// check empty
function check(elements) {
    elements.forEach((element) => {
        if (element.value == '') {
            // element.parentElement.classList = 'form-control err'
            showError(element, "Input Required")
        } else {
            showSuccess(element)
        }
    })
}

// show error
function showError(input, message) {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control err'
    let small = parentElement.querySelector('small');
    small.innerHTML = message;

    let successIcon = parentElement.querySelectorAll('i')[0]
    let errorIcon = parentElement.querySelectorAll('i')[1]

    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden'

}

// show success
function showSuccess(input) {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success'

    let successIcon = parentElement.querySelectorAll('i')[0]
    let errorIcon = parentElement.querySelectorAll('i')[1]

    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible'

}

// check password length
function passwordLength(input, min, max) {

    if (input.value.length < min) {
        showError(input, `Password Must Be at least ${min} Char`)
    } else if (input.value.length > max) {
        showError(input, `Password Must Be Less then ${max} Char`)
    } else {
        showSuccess(input)
    }
}

// checking email
function check_mail(input) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (reg.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'Invalid Email')
    }
}

// confirm pass
function confirm_pass(pass, confirm) {
    if (confirm.value != pass.value) {
        showError(confirm, 'Password Is Not Match')
    }
}