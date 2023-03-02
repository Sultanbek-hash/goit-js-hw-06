const input = document.querySelector('input#name-input');
const text = document.querySelector('span#name-output');

// function textShow (){
//     text.innerHTML = `${input.value}`;
//     if(input.value === ''){
//         return text.innerHTML = 'Anonymous';
//     }
// }

// input.addEventListener('input', textShow);

input.addEventListener('input', e => {
    text.innerHTML = `${e.target.value}`;
    if(e.target.value === ''){
        return text.innerHTML = 'Anonymous';
    }
});