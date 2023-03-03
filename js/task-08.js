const userForm  = document.querySelector('form.login-form');

 userForm.addEventListener('submit', hundleSubmit);

 function hundleSubmit(evt){
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    if (email.value.trim() === "" || password.value.trim() === ""){
        return alert('Пожалуста, заполните поле ввода');
    }
    const user = {
        Email: email.value, 
        Passord: password.value
    }
    console.log(user);
    evt.currentTarget.reset();
 }
