const validInput = document.querySelector('input#validation-input');

// a.addEventListener('blur', (e) =>{
// if(e.target.getAttribute(['data-length']) > e.currentTarget.value.length){
//     e.target.classList.remove('valid');
//     e.target.classList.add('invalid');
// }else{
//     e.target.classList.remove('invalid');
//     e.target.classList.add('valid');
// }
// });

validInput.addEventListener('blur', function(){
    console.log(this.value.length);
    if(this.value.length < this.getAttribute('data-length')){
        this.classList.remove('valid');
        this.classList.add('invalid');
    }else{
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
});