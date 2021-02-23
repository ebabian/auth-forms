const login = document.getElementsByClassName('login-title')[0]
const signUp = document.getElementsByClassName('signup-title')[0]
const body = document.querySelector('body');
const signUpForm = document.getElementsByClassName('signup-form')[0]
const loginForm = document.getElementsByClassName('login-form')[0]


login.addEventListener('click', function(event) {
    login.style.textDecoration = 'underline'
    signUp.style.textDecoration = 'none'

    // if  text decoration === 'underline'
    if(login.style.textDecoration === 'underline') {
        // display login form 
        signUpForm.style.display = 'none'
        loginForm.style.display = 'block'
    }

})

signUp.addEventListener('click', function(event) {
    login.style.textDecoration = 'none'
    signUp.style.textDecoration = 'underline'

    // if signUp text decoration === 'underline'
    if(signUp.style.textDecoration === 'underline') {
        // display sign up form 
        signUpForm.style.display = 'block'
        loginForm.style.display = 'none'
    } 
})

