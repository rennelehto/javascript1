'use strict'

const ehdolla = +prompt(`Syötä ehdokkaiden lukumäärä:`)
const ehdokkaat =[]
for (let e = 0; e < ehdolla; e++){
  const ehd = prompt(`Syötä ${e+1}. ehdokkaan nimi:`)
  ehdokkaat[e] = {
    nimi:ehd,
    nnet:0,
  }
}
const voters = +prompt(`Syötä äänestäjien lukumäärä:`)

for (let a = 1; a <= voters; a++){
  const ni = prompt(`Kirjoita ehdokkaasi nimi:`)
  for (let y = 0; y < ehdokkaat.length; y++){
    if (ehdokkaat[y].nimi === ni){
      ehdokkaat[y].nnet += 1;
    }
  }
}

ehdokkaat.sort((a, b) => b.nnet - a.nnet)

console.log(`Äänestyksen voittaja on ${ehdokkaat[0].nimi}, saatuaan ääniä ${ehdokkaat[0].nnet} kpl.`);

for (let r = 0; r < ehdokkaat.length; r++){
  console.log(`${ehdokkaat[r].nimi}: ääniä ${ehdokkaat[r].nnet} kpl.`);
}
