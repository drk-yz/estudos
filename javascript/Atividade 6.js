// // Questão 1
// let frutas = ["banana", "maçã"];
// frutas.unshift("abacaxi");
// console.log(frutas);

// if(frutas[0]==="abacaxi") {
//     console.log("fruta adicionada ao final")
// }
// else {
//     console.log("erro ao adicionar frutas ao final")
// }


// // Questão 2
// let numeros = [10,20,40,50];
// numeros.splice(2,0,30);
// let n = numeros;
// console.log(n);

// if(n[0] < n[1] && n[1] < n[2] && n[2] < n[3] && n[3] < n[4]) {
//     console.log("numero adicionado e em ordem crescente")
// }
// else {
//     console.log("numero adicionado mas não esta em ordem crescente")
// }


// // Questão 3
// let numeros = [2,4];
// let pares = 0
// numeros.push(6,8,10);
// for(let i = 0; i < numeros.length ; i++){
//     if(numeros[i]%2===0) {
//         pares++
//     }
// }
// if (pares === numeros.length) {
//     console.log("todos os numeros são pares")
// }
// else {
//     console.log("nem todos os numeros são pares")
// }


// // Questão 4
// let numeros = [10,15,20];
// let multiplos5 = 0
// numeros.unshift(5);
// for(let i = 0; i < numeros.length; i++) {
//     if(numeros[i]%5===0){
//         multiplos5++
//     }
// }
// if (multiplos5 === numeros.length) {                                                        
//     console.log("todos números são multiplos de 5")
// }
// else {
//     console.log("nem todos os números são multiplos de 5")
// }
// console.log(multiplos5)


// // Questão 5
// let cores = ["azul","verde","amarelo","branco"];
// cores.splice(2,0,"preto");
// if (cores[2]==="preto") {
//     console.log("cor preta no centro")
// }
// else {
//     console.log("cor preta não está no centro")
// }


// // Questão 6
// let frutas = ["maçã","laranja"];
// frutas.unshift("uva");
// if (frutas[0]==="uva"){
//     console.log("uva é a primeira fruta")
// }
// else {
//     console.log("uva não é a primeira fruta")
// }


// // Questão 7
// let letras = ["A", "B", "D", "E"];
// letras.splice(2,0,"C");
// let seq = 0;
// for(let i = 0; i < letras.length; i++){
//     if(letras[i]==="A"){
//         seq++
//     }
//     else if(letras[i]==="B" && seq === 1){
//         seq++
//     }
//     else if(letras[i]==="C" && seq === 2){
//         seq++
//     }
//     else if(letras[i]==="D" && seq === 3){
//         seq++
//     }
//     else if(letras[i]==="E" && seq === 4){
//         seq++
//     }
// } 
// if(seq === letras.length){
//     console.log("A sequencia está na ordem ABCDE")
// }
// else {
//     console.log("A sequencia não está na ordem ABCDE")
// }


// // Questão 8
// let n = [1,3,5];
// n.push(9);
// if(n[3]%2===0){
//     console.log("o ultimo número é par")
// }
// else {
//     console.log("o ultimo número não é par")
// }


// // Questão 9
// let frutas = ["banana"];
// frutas.unshift("uva", "maçã", "melancia");
// if(frutas[0]==="melancia") {
//     console.log("A primeira fruta é melancia")
// }
// else {
//     console.log("A primeira fruta não é melancia")
// }


// // Questão 10
// let letras = ["a", "b", "e"];
// let seq = false
// letras.splice(2,0,"c");
// letras.splice(3,0,"d");
// console.log(letras)
// if(letras[0]==="a"){
//     if(letras[1]==="b"){
//         if(letras[2]==="c"){
//             if (letras[3]==="d"){
//                 if (letras[4]==="e"){
//                     seq = true
//                 }
//             }
//         }
//     }
// }
    
    
// if(seq === true){
//     console.log("A sequencia está na ordem")
// }
// else {
//     console.log("A sequencia não está na ordem")
// }


// // Questão 11
// let n = [50, 75, 125];
// n.splice(2,0,100);
// if( ( n[2] + n[3] ) / 2 === 112.5 ) {
//     console.log("A média entre os dois ultimos números é igual a 112,5")
// }
// else {
//     console.log("A média entre os dois últimos números não é igual a 112,5")
// }


// // Questão 12
// let nomes = ["João","Maria"];
// nomes.push("Lucas");
// if(nomes[2].length === 5) {
//     console.log("O nome tem 5 letras")
// }
// else {
//     console.log("O nome não tem 5 letras")
// }


// // Questão 13
// let n = [30,40];
// n.unshift(20);
// let v = 0
// for(let i = 0; i < n.length; i++) {
//     if (n[i] < 50){
//         v++
//     }
// }
// if(v === n.length) {
//     console.log("Todos são menores que 50")
// }
// else {
//     console.log("Nem todos são menores que 50")
// }


// // Questão 14
// let cores = ["vermelho", "azul","verde"];
// cores.splice(2,0,"roxo");
// console.log(cores);

// if(cores[2]==="roxo") {
//     console.log("Cor do meio é roxo")
// }
// else {
//     console.log("Cor do meio não é roxo")
// }


// // Questão 15
// let n = [10,20,30,50];
// n.splice(3,0,40);
// let v = 0
// for(let i = 0; i < n.length; i++) {
//     if (n[i]%10 === 0){
//         v++
//     }
// }
// if(v === n.length) {
//     console.log("Todos são multiplos de 10")
// }
// else {
//     console.log("Nem todos são multiplos de 10")
// }
