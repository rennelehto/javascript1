const eka = +prompt('Syötä ensimmäinen luku: ');
const toka = +prompt('Syötä toinen luku: ');
const kolmas = +prompt('Syötä kolams luku: ');

const summa = eka + toka + kolmas
const kerto = eka * toka * kolmas
const keski = summa / 3

document.querySelector('#eka').innerHTML = 'Lukujen summa on ' + summa + '.';
document.querySelector('#toka').innerHTML = 'Lukujen tulo on ' + kerto + '.';
document.querySelector('#kolmas').innerHTML = 'Lukujen keskiarvo on  ' + keski + '.';