const vuosi = prompt('Syötä vuosiluku: ')

const nelj = vuosi%4
const sata = vuosi%100
const sata4 = vuosi%400

if (nelj === 0) {
  document.querySelector('#hehe').innerHTML = 'Vuosi on karkausvuosi.';
}
else if (sata === 0 && sata4 === 0){
    document.querySelector('#hehe').innerHTML = 'Vuosi on karkausvuosi.';
}

else {
  document.querySelector('#hehe').innerHTML = 'Vuosi ei ole karkausvuosi.';
}