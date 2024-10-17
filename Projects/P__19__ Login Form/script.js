let emailField = document.querySelector('#email');
let passField = document.querySelector('#password');
let show = document.querySelector('#show');


show.addEventListener('click', ()=>{


    let type = passField.getAttribute('type') === 'password' ?'text' : 'password';

    passField.setAttribute('type',type);

    
    
    show.querySelector('i').classList.toggle('fa-eye');

});


