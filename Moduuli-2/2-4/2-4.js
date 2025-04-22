'use strict'
var nro = 1

const luvut = []

while (nro !== 0){
  var nro = +prompt('Syötä luku')
  luvut.push(nro)
}
luvut.sort((a,b) => b-a);
for (let n = 0; n < luvut.length; n++){
  console.log(luvut[n])
}