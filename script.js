const ta = ['Práctica de JavaScript', 'Ir al supermercado', 'Pasear al perro', 'Lavar los trastos'];

const ta_1 = ['ta1', 'ta2', 'ta3', 'ta4'];

const li = document.getElementById('lista-tareas');

const li_d = document.createElement('ul');

li.appendChild(li_d);

for (let i = 0; i < ta.length; i++) {

    const li_li = document.createElement('li');
  
    li_d.appendChild(li_li);

    const input = document.createElement('input');
  
    li_li.appendChild(input);

    input.setAttribute('type', 'checkbox');
  
    input.setAttribute('id',li[i]);

    const label = document.createElement('label');
  
    li_li.appendChild(label);
  
    label.setAttribute('for', ta_1[i]);
  
    label.innerHTML = ta[i];
}