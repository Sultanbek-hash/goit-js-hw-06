const a = document.querySelector('input#font-size-control');
const b = document.querySelector('span#text');

a.addEventListener('input', function(){
    b.style.fontSize = this.value + 'px';  
});