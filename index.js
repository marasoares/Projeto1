//// Desafio Detetive - Projeto 1
console.log('Responda Sim ou Não para as perguntas abaixo: ');

const sim = 1
const nao = 0

let p1 = +prompt('Telefonou para a vítima? 1/Sim ou 0/Não');
let p2 = +prompt('Esteve no local do crime? 1/Sim ou 0/Não');
let p3 = +prompt('Mora perto da vítima? 1/Sim ou 0/Não');
let p4 = +prompt('Devia para a vítima? 1/Sim ou 0/Não');
let p5 = +prompt('Já trabalhou para a vítima? 1/Sim ou 0/Não');

let cont1 = 0
let cont2 = 0

if(p1 === 1){
  cont1 = cont1 + 1
}else 
cont2 = cont2

if(p2 === 1){
  cont1 = cont1 + 1
}else 
cont2 = cont2

if(p3 === 1){
  cont1 = cont1 +  1
}else 
cont2 = cont2

if(p4 === 1){
  cont1 = cont1 + 1
}else 
cont2 = cont2

if(p5 === 1){
  cont1 = cont1 + 1
}else 
cont2 = cont2


if(cont1 === 2){
  console.log("Voce é suspeito")
}else if(cont1 ==  3 && 4){
 console.log("Voce é Cumplice")
}else if(cont1 === 5){
 console.log("Voce é culpado")
}else {
console.log("Voce é inocente")
}













////console.log('Você é Suspeito.')

// else if(somaResp >= 3 == 4)
//   console.log('Você é Cúmplice.')

// else(somaResp === 5)
//  console.log('Você é Culpado.')



