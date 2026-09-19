// // Questão 1
// for (let i=1; i<=20; i++){
//     if (i%2!==0 && i%3===0) {
//         console.log(`Número: ${i}. É impar e multiplo de 3`)
//     }
// }
// let i = 1
// while (i <= 20) {
//     if (i%2!==0 && i%3===0){
//         console.log(`Número: ${i}. É impar e multiplo de 3`)
//     }
//     i++
// }


// // Questão 2
// let i = 10;
// while(i >= 0){
//     if (i%5===0 || i%2===0){
//         console.log("Numero par ou multiplo de 5: ", i)
//     }
//     i--
// }


// // Questão 3
// for (let idade = 15;idade<=90; idade++){
//     if (idade%5===0 && idade!== 50){
//     console.log("idade é multiplo de 5 e diferente de 50:",`Idade: ${idade}`)
//     }
// }


// // Questão 4
// for (let n = 1; n<=100; n++){
//     if (n%3===0 && n%4===0){
//         console.log(`Número: ${n}. É divisivel por 3 e 4 ao mesmo tempo`)
//     }
// }


// // Questão 5
// for (let ano = 1900; ano <= 2025; ano++) {
//     if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
//         console.log(`Ano: ${ano}. É um ano bissexto`)
//     }
// }


// // Questão 6
// let n = 1
// let soma = 0
// while (n < 50) {
//     if (n%7===0) {
//         soma = soma + n
//         console.log("Número: ", n)
//     }
//     n++
// }
// console.log(`Soma dos números: ${soma}`)


// // Questão 7
// let valor = 1000
// let anos = 0
// while(valor <= 2000){
//     valor = valor * 1.05
//     anos++
// }
// console.log(`Será necessário ${anos} anos para o valor ultrapassar 2000 reais.`)


// // Questão 8
// let n = 1
// let fatorial = 1
// while (n < 6) {
//     fatorial = fatorial * (n + 1);
//     n++
// }
// console.log("Fatorial de 6 = ", fatorial)


// // Questão 9
// for (let n = 0; n<=90; n++){
//     if (n%2!==0){
//         console.log(`${n} é impar`)
//     }
//     if (n%2===0){
//     console.log(`${n} é par`)
//     }
// }


// // Questão 10
// let idade = 15
// while (idade <= 80) {
//     if (idade < 16) {
//         console.log(`Idade ${idade}: não vota`)
//     } else if (idade === 16 || idade === 17 || idade > 70) {
//         console.log(`Idade ${idade}: voto opcional`)
//     } else {
//         console.log(`Idade ${idade}: voto obrigatório`)
//     }
//     idade++
// }


// // Questão 11
// for (let n = 2; n<=30; n++){
//     if (n%2===0 && n%3===0){
//     console.log(`${n} é par e divisivel por 3`)
//     }
// }


// // Questão 12
// let recuperacao = 0
// for (let nota = 0; nota <= 100; nota++) {
//     if (nota >= 30 && nota <= 59) {
//         recuperacao++
//     }
// }
// console.log(`Quantidade de alunos em recuperação: ${recuperacao}`)


// // Questão 13
// let idade = 18
// let contribuicao = 0
// while (contribuicao < 35 && idade < 65) {
//     idade++
//     contribuicao++
// }
// console.log(`Idade: ${idade}`)
// console.log(`Anos de contribuição: ${contribuicao}`)


// // Questão 14
// for (let n = 1; n <= 100; n++) {
//     if ((n % 5 === 0 || n % 9 === 0) && !(n % 5 === 0 && n % 9 === 0)) {
//         console.log(n)
//     }
// }


// // Questão 15
// let soma = 1
// let n = 2
// while (soma <= 1000){
//     soma = soma + n
//     n++
// }
// console.log(`Número final: ${n}`)
