'use strict';

const nimi = prompt('Mikä on nimesi?')

let tupa = Math.floor(Math.random()*5)

if (tupa === 0) {
  document.querySelector('#jako').innerHTML = nimi + ',' + ' olet rohkelikko!';
}
else if (tupa === 1) {
  document.querySelector('#jako').innerHTML = nimi + ',' + ' olet luihuinen!';
}
else if (tupa === 2){
  document.querySelector('#jako').innerHTML = nimi + ',' + ' olet puuhkupuh!';
}
else{
  document.querySelector('#jako').innerHTML = nimi + ',' + ' olet korpinkynsi!';
}