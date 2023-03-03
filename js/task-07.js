const fontSizeControl = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

fontSizeControl.addEventListener('input', function(){
    spanText.style.fontSize = this.value + 'px';  
});