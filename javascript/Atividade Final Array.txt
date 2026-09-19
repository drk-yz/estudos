// // Questão 1
// let array = [1,2,3,4,5,6,7,8,9,10];


// // Questão 2
// let n = [5,10,15,20];
// console.log(n)
// n.shift()
// console.log(n)


// // Questão 3
// let n = [1,2,3,4,5];
// n.pop();
// console.log(n);


// // Questão 4
// let n = [1,2,3]
// n.unshift(0)
// console.log(n)


// // Questão 5
// let n = [1,2,3];
// n.push(4);
// console.log(n)


// // Questão 6
// let n = [10,20,30,40,50];
// let condicao = false;
// for(let i = 0; i < n.length; i++) {
//     if(n[i] === 30) {
//         condicao = true
//     }
// }
// if (condicao === true) {
//     console.log(`30 está no indice ${n.indexOf(30)}`)
// }
// else {
//     console.log("Não tem 30 no array")
// }


// // Questão 7
// let n = [10,20,30,40,50];
// let metade = n.length/2
// let i = Math.floor(metade)
// n.splice(i, 1)
// console.log(n)


// // Questão 8
// let n = [10,20,30,40]
// n.splice(3,0,35)
// console.log(n)


// // Questão 9
// let array = []
// let n = 0
// while (n <= 20) {
//     if (n % 2 === 0){
//         array.push(n)
//     }
//     n++
// }
// console.log(array)


// // Questão 10
// let array = []
// for(let i = 10; i > 0; i--) {
//     array.push(i)
// }
// console.log(array)


// // Questão 11
// let array = []
// for(let i = 0; i <= 50; i++) {
//     if (i % 5 === 0) {
//         array.push(i)
//     }
// }
// console.log(array)


// // Questão 12
// let array = [2,4,6,8,10]
// let value = 0
// for(let i = 0; i < array.length; i++) {
//     value = value + array[i]
// }
// console.log(value)


// // Questão 13
// let array = []
// for(let i = 0; i <= 100; i++) {
//     if (i % 10 === 0) {
//         array.push(i)
//     }
// }
// console.log(array)


// // Questão 14
// let array = [2,3,4];
// let produto = 1
// for(let i = 0; i < array.length; i++) {
//     produto = produto * array[i]
// }
// console.log(produto)


// // Questão 15
// let array = []
// for(let i = 0; i <= 15; i++) {
//     if (i % 2 === 1) {
//         array.push(i)
//     }
// }
// console.log(array)


// // Questão 16
// let n = [10,55,80,30,60];
// let contar = 0
// for(let i = 0; i < n.length; i++){
//     if(n[i] > 50){
//         contar++
//     }
// }
// console.log(contar)


// // Questão 17
// let array = []
// for(let i = 1; i <= 5; i++) {
//     array.push(i*i)
// }
// console.log(array)


// // Questão 18
// let array = [1,6,2,7,3,8]
// for(let i = 0; i < array.length; i++) {
//     if(array[i] < 5){
//         array.splice(i,1)
//     i--
//     }
// }
// console.log(array)


// // Questão 19
// let n = [10,20,50,80]
// let i = 0
// while(i < n.length){
//     if(n[i] === 50){
//         n.splice(i+1,0,60,70)
//     }
//     i++
// }
// console.log(n)


// // Questão 20
// let n = []
// for(let i = 1; n.length <= 10; i++) {
//     if(i % 7 === 0) {
//         n.push(i)
//     }
// }
// console.log(n)


// // Questão 21
// let a = [1,2,3,4,5]
// let b = []
// let n = 0
// for(let i = 0; i < a.length; i++) {
//     n = a[i] * 2;
//     b.push(n)
// }
// console.log(a,b)


// // Questão 22
// let n = [];
// for (let i = 1; i <= 10; i++) {
//     n.push(i * 4);
// }
// console.log(n);


// // Questão 23
// let n = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 === 0) {
//         n.splice(i, 1);
//         i--;
//     }
// }
// console.log(n);


// // Questão 24
// let n = [90, 150, 120, 80];
// let quantidade = 0;
// for (let i = 0; i < n.length; i++) {
//     if (n[i] > 100) {
//         quantidade++;
//     }
// }
// console.log(quantidade);


// // Questão 25
// let n = [4, 5, 6];
// n.unshift(1, 2, 3);
// console.log(n);


// // Questão 26
// let n = [];
// for (let i = 100; i >= 90; i--) {
//     n.push(i);
// }
// console.log(n);


// // Questão 27
// let n = [10, 20, 30, 40, 50];
// n.pop();
// n.pop();
// console.log(n);


// // Questão 28
// let n = ["sol", "lua", "estrela", "céu"];
// let quantidade = 0;
// for (let i = 0; i < n.length; i++) {
//     if (n[i].length > 3) {
//         quantidade++;
//     }
// }
// console.log(quantidade);


// // Questão 29
// let n = [1, 2, 3, 4, 5];
// let novo = [];
// for (let i = 0; i < n.length; i++) {
//     novo.push(`Item ${n[i]}`);
// }
// console.log(novo);


// // Questão 30
// let n = [];
// for (let i = 0; i <= 30; i++) {
//     if (i % 3 === 0) {
//         n.push(i);
//     }
// }
// console.log(n);


// // Questão 31
// let n = ["CASA", "SOL", "LUA", "CARRO", "ÁRVORE"];
// for (let i = 0; i < n.length; i++) {
//     n[i] = n[i].toLowerCase();
// }
// console.log(n);


// // Questão 32
// let n = ["a", "b", "c", "d"];
// while (n.length > 0) {
//     n.pop();
// }
// console.log(n);


// // Questão 33
// let n = [5, 10, 15, 20, 25];
// let n2 = [];
// for (let i = 0; i < n.length; i++) {
//     if (n[i] > 15) {
//         n2.push(n[i]);
//     }
// }
// console.log(n2);


// // Questão 34
// let n = [100, 200, 300];
// n.reverse();
// console.log(n);


// // Questão 35
// let n = [];
// for (let i = 1; i <= 50; i++) {
//     if (i % 7 === 0) {
//         n.push(i);
//     }
// }
// console.log(n);


// // Questão 36
// let n = [2, 4, 6, 8, 10, 12];
// let soma = 0;
// let i = 0;
// while (i < n.length) {
//     soma = soma + n[i];
//     i++;
// }
// console.log(soma);


// // Questão 37
// let n = [10, 20];
// n.push(30, 40, 50);
// console.log(n);


// // Questão 38
// let n = [];
// for (let i = 0; i <= 100; i++) {
//     if (i % 10 === 0) {
//         n.push(i);
//     }
// }
// console.log(n);


// // Questão 39
// let n = [7, 8, 9, 10];
// n.shift();
// console.log(n);


// // Questão 40
// let n = ["a", "b", "c"];
// n.push("a", "b", "c");
// console.log(n);


// // Questão 41
// let n = [];
// for (let i = 1; i <= 10; i++) {
//     n.push(i * i);
// }
// console.log(n);


// // Questão 42
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 !== 0) {
//         n.splice(i, 1);
//         i--;
//     }
// }
// console.log(n);


// // Questão 43
// let n = [1, 2, 3, 4, 5];
// n.reverse();
// console.log(n);


// // Questão 44
// let n = ["a", "b", "a", "c", "a", "d"];
// let quantidade = 0;
// for (let i = 0; i < n.length; i++) {
//     if (n[i] === "a") {
//         quantidade++;
//     }
// }
// console.log(quantidade);


// // Questão 45
// let n = [];
// let numero = 102;
// while (n.length < 10) {
//     n.push(numero);
//     numero = numero + 2;
// }
// console.log(n);


// // Questão 46
// let n = ["a", "b", "c", "d", "e"];
// n.shift();
// n.shift();
// n.unshift("x", "y");
// console.log(n);


// // Questão 47
// let n = [];
// let numero = 3;
// while (n.length < 10) {
//     if (numero % 2 !== 0) {
//         n.push(numero);
//     }
//     numero = numero + 3;
// }
// console.log(n);


// // Questão 48
// let n = [10, 20, 30, 40, 50];
// for (let i = 0; i < n.length; i++) {
//     if (n[i] === 30) {
//         n.splice(i, 1);
//     }
// }
// console.log(n);


// // Questão 49
// let n = [];
// for (let i = 1; i <= 10; i++) {
//     n.push(9 * i);
// }
// console.log(n);


// // Questão 50
// let n = ["sol", "lua", "estrela"];
// for (let i = 0; i < n.length; i++) {
//     n[i] = n[i].toUpperCase();
// }
// console.log(n);

