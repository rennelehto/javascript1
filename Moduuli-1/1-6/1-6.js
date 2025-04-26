'use strict';

let vastaus = confirm('Lasketaanko neliöjuuri? ');

if (vastaus === true) {
  let luku = +prompt('Syötä laskettava luku. ');
  if (luku < 0) {
    document.querySelector('#vastaus').innerHTML = 'Neliöjuurta ei ole määritelty.';
  }
  if (luku > 0) {
    let juuri = Math.sqrt(luku);
    document.querySelector('#vastaus').innerHTML = 'Luvun ' +
        luku + ' neliöjuuri on ' + juuri + '.';
  }
} else {
  document.querySelector('#vastaus').innerHTML = 'Neliöjuurta ei lasketa.';
}