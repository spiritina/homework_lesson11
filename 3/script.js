'use strict';
let week = ['sunday','monday','tuesday','wednesday', 'thirsday','friday', 'saturday'];

let select = document.querySelector('select');
select.addEventListener('change', (e)=>{
    if(document.querySelector('p')){document.querySelector('p').remove();}
    let number = week.indexOf(select.value);
    let p = document.createElement('p');
    p.innerText = `${select.value} is ${number+1} day of the week.`
    document.body.appendChild(p);
})