'use strict';

const lista = []

for (let i = 0; i < 6; i++){
  lista[i] = prompt('Anna koirolle nimi!')
}

lista.sort()
const tulostus = document.querySelector('#lista')
for (let k = 5; k > -1; k--){
  tulostus.innerHTML += '<li>' + lista[k] + '</li>'
}