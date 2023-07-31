
//Despliege de administrador y cliente
document.addEventListener('DOMContentLoaded', () =>{
    const loginLink = document.querySelector('.login-link');
    const loginSubmeno = document.querySelector('.login-submenu');

    loginLink.addEventListener('click', (event)=>{
        event.preventDefault();
        loginSubmeno.classList.toggle('active');
    });
});

