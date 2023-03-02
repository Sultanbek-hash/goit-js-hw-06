const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const plusValue = document.querySelector('#value');
let counterValue = 0;
console.log(decrement.innerHTML);

decrement.addEventListener('click',()=>{
    counterValue -= 1;
    plusValue.innerHTML = counterValue;
});

increment.addEventListener('click',()=>{
    counterValue += 1;
    plusValue.innerHTML = counterValue; 
});