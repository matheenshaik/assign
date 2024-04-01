//password

let toggleIcon = document.getElementById('toggleIcon')
let password  = document.getElementById('password')

toggleIcon.addEventListener('click' , ()=>{
    if(password.type == 'password'){
        password.type = 'text'
        toggleIcon.src = 'openP.png'
    }
    else{
        password.type = 'password'
        toggleIcon.src = 'hideP.png'
    }
})

