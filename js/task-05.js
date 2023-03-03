const input = document.querySelector('input#name-input');
const text = document.querySelector('span#name-output');

input.addEventListener('input', e => {
    text.innerHTML = `${e.target.value}`;
    if(e.target.value.trim() === ''){
        return text.innerHTML = 'Anonymous';
    }
});