'use strict';

const luku = +prompt('Kuinka monta osallistujaa?')

const osallistujat = []
for (let i = 0; i < luku; i++) {
  osallistujat[i] = prompt('Anna osallistujan nimi')
}
const tyypit = document.querySelector('#lista')

osallistujat.sort()

for (let n = 0; n < osallistujat.length; n++){
tyypit.innerHTML += '<li>' + osallistujat[n] + '</li>'
}