const a  = document.querySelector('form.login-form');

 a.addEventListener('submit', hundleSubmit);

 function hundleSubmit(evt){
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    if (email.value === "" || password.value === ""){
        return alert('Пожалуста, заполните поле ввода');
    }
    console.log(`Email: ${email.value}, Passord: ${password.value}`);
    evt.currentTarget.reset();
 }
