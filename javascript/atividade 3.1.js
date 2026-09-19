// // Questão 1
// let triangulo = {l1:5, l2:5, l3:5}
// let t = triangulo
// let equilatero = t.l1 == t.l2 && t.l2 == t.l3 && t.l3 == t.l1
// let ladosValidos = t.l1 > 0 && t.l2 > 0 && t.l3 > 0
// if (equilatero && ladosValidos) {
//     console.log("É equilátero com lados validos")
// }
// else if (ladosValidos) {
//     console.log("Lados validos, mas sem lados iguais")
// }
// else if (equilatero) {
//     console.log("Lados iguais, mas não são lados validos")
// }
// else {
//     console.log("Não tem lados iguais, nem lados validos")
// }


// // Questão 2
// let n1 = 49
// let intervalo = n1 > 100 && n1 < 200
// let multiplode7 = n1 % 7 == 0
// if (intervalo && multiplode7) {
//     console.log("Está entre 100 e 200")
// }
// else if (intervalo) {
//     console.log("Está no intervalo de 100 e 200, mas não é multiplo de 7")    
// }
// else if (multiplode7) {
//     console.log("É multiplo de 7, mas nao está entre 100 e 200")
// }
// else {
//     console.log("Não se encaixa em nenhum dos requisitos")
// }


// // Questão 3
// let n1 = 64
// let positivo = n1 > 0
// let multiplode4 = n1 % 4 == 0
// if (positivo && multiplode4) {
//     console.log("É positivo e multiplo de 4")
// }
// else if (positivo) {
//     console.log("É positivo, mas não multiplo de 4")    
// }
// else if (multiplode4) {
//     console.log("É multiplo de 4, mas não é positivo")
// }
// else {
//     console.log("Não se encaixa em nenhum dos requisitos")
// }


// // Questão 4
// let idade = 25
// let doenca = false
// let verificacao = idade >= 18 && idade <=60 && doenca == false
// if (verificacao) {
//     console.log("Está apto a doação de sangue")
// }
// else {
//     console.log("Não está apto a doação de sangue")
// }

// // Questão 5
// let ano = 2024
// let bissexto = ano % 4 === 0 && ano % 100 > 0 || ano % 400 === 0
// if (bissexto) {
//     console.log("O ano é bissexto")
// }
// else {
//     console.log("O ano não é bissexto")
// }


// // Questão 6
// let anoNasc = 1990
// let anoAtual = 2025
// let verificacao = anoAtual - anoNasc > 00 && anoAtual - anoNasc <= 130
// if (verificacao) {
//     console.log("A idade é válida")
// }
// else {
//     console.log("A idade não é válida")
// }


// // Questão 7
// let alunos = [{nome: "Derick", nota: 10 },{nome: "Davi", nota: 8}]
// let aprovados = alunos[0].nota >= 7 && alunos[1].nota >= 7
// let alguemAprovado = alunos[0].nota >= 7 || alunos[1].nota >= 7
// let nota10 = alunos[0].nota == 10 || alunos[1].nota == 10
// if (aprovados && nota10) {
//     console.log("Todos alunos foram aprovados e pelo menos um tirou nota máxima")
// }
// else if (aprovados) {
//     console.log("Todos os alunos foram aprovados")
// }
// else if (alguemAprovado) {
//     console.log("Pelo menos uma pessoa foi aprovada")
// }
// else {
//     console.log("Nenhum aluno foi aprovado")
// }


// // Questão 8
// let idade = 60
// let tempoCont = 36
// let podeAposentar = idade >=65 || tempoCont >= 35
// if (podeAposentar) {
//     console.log("Pode aposentar")
// } else {
//     console.log("Não pode aposentar")
// }


// // Questão 9
// let notas = [5,7,8]
// let pesos = [2,3,5]
// let mediaPonderada = 
//     ((notas[0]*pesos[0]) + 
//      (notas[1]*pesos[1]) +
//      (notas[2]*pesos[2])) /
//     (pesos[0] + pesos[1] + pesos[2])
// let aprovado = mediaPonderada >=6
// if (aprovado) {
//     console.log("Aprovado")
// }
// else {
//     console.log("Não aprovado")
// }


// // Questão 10
// let n1 = 27
// let impar = n1 % 2 === 1
// let menor50 = n1 < 50
// let multiplode3 = n1 % 3 == 0
// if (impar && menor50 && multiplode3) {
//     console.log("O número é ímpar, menor que 50 e múltiplo de 3")
// }
// else if (impar && menor50) {
//     console.log("O número só é ímpar e menor que 50")
// }
// else if (impar && multiplode3) {
//     console.log("O número só é ímpar e múltiplo de 3")
// }
// else if (menor50 && multiplode3) {
//     console.log("O número só é menor que 50 e múltiplo de 3")
// }
// else if (impar) {
//     console.log("O número só é ímpar")
// }
// else if (menor50) {
//     console.log("O número só é menor que 50")
// }
// else if (multiplode3) {
//     console.log("O número só é múltiplo de 3")
// }
// else {
//     console.log("O número não se encaixa em nenhum dos requisitos")
// }
