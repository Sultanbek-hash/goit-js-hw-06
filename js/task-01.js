const ulTag = document.querySelectorAll('ul#categories>li.item');
console.log('Number of categories:' + ' ' + ulTag.length);

ulTag.forEach(elem =>{
    console.log('Category:' + ' ' + elem.firstElementChild.innerHTML);
    console.log('Elements:' + ' ' + elem.lastElementChild.children.length);
});