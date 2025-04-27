'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const sel = document.querySelector('#target');

for (let z = 0; z < students.length; z++) {
  const t = document.createTextNode(`<option value="${students[z].id}">${students[z].name}</option>`);
  const i = document.createElement('option');
  i.appendChild(t);
  sel.appendChild(i);
}