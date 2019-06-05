const countries = ['Canada', 'USA', 'France', 'United Kingdom', 'Germany', 'Spain'];
const population = [34242000, 310241000, 65447000, 62008000, 81802000, 46073000];

if (countries.length==population.length){
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Show tabel using FOR';
    document.body.appendChild(h2);
    let table1 = drawTabelHeader();
    console.log(table1);
    document.body.appendChild(drawTabel1(table1));
    console.log(table1);
    let h22 = document.createElement('h2');
    h22.innerHTML = 'Show tabel using FOR IN';
    document.body.appendChild(h22);
    let table2 = drawTabelHeader();
    document.body.appendChild(drawTabel2(table2));
}else{showError()};

function showError(){
    let p = document.createElement('p');
    p.innerText = "Countries array and population array have different lenght!"
    p.classList.add('error');
    document.body.appendChild(p);
}

function drawTabelHeader(){
    let table = document.createElement('table'),
    tr = document.createElement('tr');
    tr.innerHTML = '<th>Countries</th><th>Population</th>'
   table.appendChild(tr);
    return table;
}

function drawTabel1(table){
for(let i=0; i<countries.length; i++)
    {
        tr = document.createElement('tr');
        tr.innerHTML = `<td>${countries[i]}</td><td>${population[i].toLocaleString('fr')}</td>`;
        table.appendChild(tr);
    }
return table;    
}
function drawTabel2(table){
for(let key in countries)
    {
        tr = document.createElement('tr');
        tr.innerHTML = `<td>${countries[key]}</td><td>${population[key].toLocaleString('fr')}</td>`;
        table.appendChild(tr);
    }
return table;    
}