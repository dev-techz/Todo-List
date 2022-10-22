console.log("Scripts.js Loaded");

let ultag = document.querySelector('div');
let text = document.querySelector('input');

ultag.addEventListener('click',e=>{
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('tline');
    }
    if (e.target.parentElement.tagName == 'LI') {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('add-new-todo')) {
        if(text.value != '')
        {
        let li = document.createElement('li'); 
        li.innerText = `${text.value}`;
        li.innerHTML += '<button class="cross">X</button>';
        ultag.prepend(li);
        text.value='';
        }
    }
});
