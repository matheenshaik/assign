let toggleIcon = document.getElementById('toggleIcon')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let errorMsg = document.getElementById('error-msg')
let storePasswordButton = document.getElementById('storePassword')
let passwordDisplay = document.getElementById('passwordDisplay')

toggleIcon.addEventListener('click', () => {
    if (password.value.trim() !== '') {
        if (password.type === 'password') {
            password.type = 'text'
            confirmPassword.type = 'text'
            toggleIcon.src = 'openP.png'
        } else {
            password.type = 'password'
            confirmPassword.type = 'password'
            toggleIcon.src = 'hideP.png'
        }
    } else {
        errorMsg.textContent = 'Password is empty'
    }
})

confirmPassword.addEventListener('input', () => {
    isValidPassword()
})

const isValidPassword = () => {
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    if (passwordValue !== '' && confirmPasswordValue !== '') {
        if (passwordValue !== confirmPasswordValue) {
            errorMsg.textContent = 'Passwords do not match'
        } else {
            errorMsg.textContent = ''
        }
    }
}

storePasswordButton.addEventListener('click', () => {
    validStore()
})

const validStore = () => {
    if (password.value.trim() !== '') {
        let enteredPassword = password.value.trim()
        passwordDisplay.textContent = `Entered Password: ${enteredPassword}`
        localStorage.setItem('password', enteredPassword)

        setTimeout(() => {
            localStorage.removeItem('password');
            passwordDisplay.textContent = ''
        }, 10000)
    } else {
        errorMsg.textContent = "Password is empty"
    }
}

window.addEventListener('load', () => {
    let storedPassword = localStorage.getItem('password')
    if (storedPassword) {
        passwordDisplay.textContent = `Stored Password: ${storedPassword}`
        
        setTimeout(() => {
            localStorage.removeItem('password')
            passwordDisplay.textContent = 'Password time out'
        }, 10000)
    }
    
})
