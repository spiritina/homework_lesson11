'use strict';
let array = [],
    myinput = document.getElementById('input'),
    mybutton = document.getElementById('button');
myinput.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        addElement();
    }
});
button.addEventListener('click', (e)=>{
    addElement();
    console.log(array);
})

function addElement(){
if (myinput.value){
    array.push(myinput.value);
    myinput.value = '';
}else{
    if (array.length>=3){
        array.splice(1,1);
        showArray();
    } else{
        alert('I need more data!')}
}    
}

function showArray(){
    if(document.querySelector('ul')){document.querySelector('ul').remove()}
    let ul = document.createElement('ul');
    for(let i=0; i<array.length; i++){
        let li = document.createElement('li');
        li.innerText = array[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    array = [];
}