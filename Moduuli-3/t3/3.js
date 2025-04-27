'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let y =0; y < names.length; y++){
  document.querySelector('#target').innerHTML += `<li>${names[y]}</li>`;
}
