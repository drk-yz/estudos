// // Questão 1
// let numeros = [10,20,30,40,50];
// numeros.pop();
// numeros.shift();
// numeros.unshift(5,60);
// numeros.push(70,80)
// numeros.reverse; 
// numeros.sort(function(a,b) {return a - b}); console.log(numeros)


// // Questão 2
// let nomes = ["Ana", "Carlos", "Beatriz", "Eduardo","Daniela"];
// nomes[0] = "Marcos"
// nomes.push("Julia")
// let nNomes = nomes.slice(1,4)
// nNomes.reverse()
// let nomess = nNomes.concat(nomes)
// console.log(nomess)


// // Questão 3
// let valores = [3,8,1,6,2,9]
// let maiores5 = valores.filter(function(valores) {return valores > 5}); console.log(maiores5)
// let dobro = maiores5.map(function(maiores5) {return maiores5 * 2})
// let soma = dobro.reduce(function(dobro, valorTotal){return dobro + valorTotal}, 0)
// console.log(soma)
// console.log(typeof soma)
// let original = valores.indexOf(10)
// if(original < 1){
//     console.log("não tem 10 no array")
// }
// else {
//     console.log("tem 10 no array")
// }


// // Questão 4
// let frase = "Hoje o dia está lindo e ensolarado"
// let separa = frase.split(" "); console.log(separa)
// let reverso = separa.reverse(); console.log(reverso)
// let novaFrase = reverso.join(" "); console.log(novaFrase)
// let fraseDnv = novaFrase.replace("lindo", "nublado"); console.log(fraseDnv)
// let upper = fraseDnv.toUpperCase(); console.log(upper)


// // Questão 5 
// let precos = ["10.50","20.30","30.99"]
// let novosPrecos = precos.map((precos) => parseFloat(precos)); console.log(novosPrecos)
// let soma = novosPrecos.reduce((novosPrecos, soma) => novosPrecos + soma, 0); console.log(soma)
// if (isNaN(soma)) {
//     console.log("não é um numero")
// }
// else {
//     console.log("é um numero")
// }


// // Questão 6
// let mensagem = "Aprender JavaScript é essencial para tdo desenvolvedor web"
// let apagar = mensagem.indexOf("JavaScript"); console.log(`indice do javascript: ${apagar}`) // como falaram aq que uma string é um array de caracteres
// let parte = mensagem.substring(apagar,apagar + 10); console.log(parte) // 10 é o tamanho da palavra
// let substituir = mensagem.replace("desenvolvedor","programador"); console.log(substituir)
// let minusculo = mensagem.toLowerCase(); console.log(minusculo)
// let maiusculo = parte.toUpperCase(); console.log(maiusculo)
// console.log(typeof mensagem)


// // Questão 7
// let temperaturas = [22.3,25.7,21.0,24.8,23.5]
// let arredondado = temperaturas.map((temperaturas) => Math.round(temperaturas)); console.log(arredondado)
// let filtro = temperaturas.filter( (temperaturas) => temperaturas > 23 ); console.log(filtro)
// let soma = temperaturas.reduce((temperaturas, valorInicial) => valorInicial + temperaturas, 0 ); console.log(soma)
// let reverso =  temperaturas.reverse(); console.log(reverso)
// let quantidade = temperaturas.length; console.log(quantidade);


// // Questão 8
// let notas = [6,5,8,0,9,5,4,0,7,0]
// let notasFiltradas = notas.filter((notas) => notas >= 7); console.log(notasFiltradas)
// let soma = notas.reduce(function somaF(notas, inicial) {return notas + inicial }, 0);
// let media = soma / notas.length; console.log(media)
// let mediaArredondada = Math.ceil(media); console.log(mediaArredondada)
// let mediaString = `${mediaArredondada}`; console.log(mediaString)
// console.log(notas.length)
// console.log(typeof mediaString)


// // Questão 9 
// let produtos = ["arroz","feijão","macarrão","açucar","sal"]
// let valores = [10.5,5.25,7.3,4.8,3.2]
// produtos.push("óleo"); valores.push(6.4); console.log(produtos, valores)
// produtos.shift(); valores.shift(); console.log(produtos,valores)
// produtos.splice(1,1,"massa"); valores.splice(1,1,8.0); console.log(produtos,valores)
// produtos.reverse(); valores.reverse(); console.log(produtos,valores)
// let produtosString = produtos.join(", "); console.log(produtosString)


// // Questão 10
// let idades = [12,17,18,20,15,25]
// let quantidade = 0
// for (let i = 0; i < idades.length; i++) {
//     if(idades[i] >= 18){
//         quantidade++
//     }
// }
// console.log(`quantidade de pessoas maiores de idade: ${quantidade}`)
// let maioresDeIdade = idades.filter((idades) => idades >= 18); console.log(maioresDeIdade)
// let soma = idades.reduce((idades,inicial) => idades + inicial, 0); console.log(soma)
// let media = Math.round(soma / idades.length); console.log(media)


// // Questão 11
// let nomes = ["carlos","ana","beatriz","joao","camila","bruno"]
// let nomesOrdem = nomes.sort(); console.log(nomesOrdem)
// let nomesReverso = nomesOrdem.reverse(); console.log(nomesReverso)
// let nomes3 = nomesReverso.slice(0,3); console.log(nomes3)
// nomes3.pop(); console.log(nomes3)
// let joao = nomes3.indexOf("joao")
// if(joao < 0 ) {
//     console.log("não tem nenhum joao")
// }
// else {
//     console.log("tem ao menos um joao")
// }
// let resultado = nomes3.join(", "); console.log(resultado)


// // Questão 12
// let frase = "Programar em JavaScript é muito legal"
// let fraseSeparada = frase.split(" "); console.log(fraseSeparada)
// let quantPalavras = fraseSeparada.length; console.log(quantPalavras)
// let substituir = frase.replace("legal","desafiador"); console.log(substituir)
// let minuscula = frase.toLowerCase(); console.log(minuscula)
// let maiuscula = frase.replace( "JavaScript", fraseSeparada[fraseSeparada.indexOf("JavaScript")].toUpperCase() ) ; console.log(maiuscula)


// // Questão 13
// let precos = ["12.50","25.75","19.30","8.99","15.00"]
// function float(array) {return array.map(parseFloat) }
// function arredondar(array) {return array.map(Math.ceil)}
// function filtrar(array) {return array.filter( (array) => array > 20 )}
// function reduzir(array) {return array.reduce( (array, valorInicial) => valorInicial + array, 0 )}
// let resultado = reduzir(filtrar(arredondar(float(precos)))); console.log(resultado)
// console.log(typeof resultado)


// // Questão 14 
// let palavras = ["sol","lua","céu","vento","mar","areia"]
// function reverso(array) {return array.reverse()}
// console.log(reverso(palavras))

// function add(array) {array.unshift("nuvem"); array.push("estrela"); return array}
// console.log(add(reverso(palavras)))

// function splice(array) { array.splice( array.indexOf("mar"), 1 , "oceano" ); return array }
// console.log(splice(add(reverso(palavras))))

// function vento(array) {return array[array.indexOf("vento")].length}
// console.log(`vento tem ${vento(palavras)} letras`)


// // Questão 15 
// let valores = [3.7,6.1,9.4,2.5,8.3]
// function arredondar(array) {return array.map(Math.floor)}

// function pares(array) {return array.filter( (array) => array % 2 === 0 ) }

// function soma(array) {return array.reduce( (array,valorInicial) => array + valorInicial, 0)}

// function reverso(array) {return array.reverse()}

// function tamanho(array) {return array.length}

// function tem4(array) {return array.indexOf(4)}

// let verificacao = tem4(reverso(pares(arredondar(valores))))
// if (verificacao < 0){
//     console.log("não tem 4")
// }
// else {
//         console.log("tem 4")
// }

// console.log(`soma: ${soma(pares(arredondar(valores)))}`)
// console.log( `array: ${reverso(pares(arredondar(valores)))}` )
// console.log( `tamanho array: ${tamanho(reverso(pares(arredondar(valores))))}` )


// // Questão 16
// let texto = "Desenvolver é transformar ideias em código"
// let separado = texto.split(" "); console.log(separado)
// let extrair = texto.substring(texto.indexOf("transformar"),texto.indexOf("transformar") + 11); console.log(extrair)
// let quantidade = texto.length; console.log(`tem ${quantidade} caracteres na frase`)
// let maiuscula = texto.replace( "código", separado[separado.indexOf("código")].toUpperCase() ) ; console.log(maiuscula)
// let substituir = maiuscula.replace("ideias","soluções"); console.log(substituir)


// // Questão 17
// let dados = [2, "3", "quatro", 5, "6.5", "sete"]
// let validos = dados.filter( (dados) => !isNaN(dados) ); console.log(validos)
// let convertidos = validos.map( (validos) => parseFloat(validos) ); console.log(convertidos)
// convertidos.pop(); console.log(convertidos)
// let reverso = convertidos.reverse(); console.log(reverso)
// for (let i = 0; i < reverso.length; i++) {
//     console.log(`${reverso[i]} é do tipo ${typeof reverso[i]}`)
// }


// // Questão 18
// let numeros = [1, 2, 3, 4, 5]
// let vezes10 = numeros.map( (numeros) => numeros * 10 ); console.log(vezes10)
// let maiores20 = vezes10.filter( (vezes10) => vezes10 > 20 ); console.log(maiores20)
// let total = maiores20.reduce( (maiores20, valorInicial) => maiores20 + valorInicial, 0 ); console.log(total)
// let frase = `o total da soma é ${total}`; console.log(frase)
// console.log(typeof total)


// // Qeustão 19
// let frutas = ["banana", "maçã", "laranja", "abacaxi", "uva"]
// frutas.unshift("manga"); frutas.push("kiwi"); console.log(frutas)
// frutas.shift(); console.log(frutas)
// frutas.reverse(); console.log(frutas)
// frutas.sort(); console.log(frutas)
// frutas.splice(frutas.indexOf("laranja"), 1, "limão"); console.log(frutas)
// let frutasString = frutas.join(" - "); console.log(frutasString)


// // Questão 20
// let n = [10, 20, 30, 40, 50]
// let quantidade = n.length;
// let soma = n.reduce((n, valorInicial) => n + valorInicial, 0);
// let media = soma / quantidade;
// let mediaArredondada = Math.round(media);
// console.log(typeof mediaArredondada)
// console.log(`quantidade: ${quantidade}, soma: ${soma}, média: ${media}, média arredondada: ${mediaArredondada}`)
