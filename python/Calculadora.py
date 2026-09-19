while True:
    print(" Calculadora de 2 números\n")
    numero1 = int(input(" Digite o primeiro número: \n "))
    numero2 = int(input(" Digite o segundo número: \n "))

    print(" Qual operação deseja fazer?")
    print(" Adição (+)\n " "Subtração (-)\n " "Multiplicação (*)\n" " Divisão (/)\n")

    while True:
        operacao = input(" Escolher operação (+ - * /): ")
        if operacao == "+":
            resultado = numero1+numero2
            print(f"Resultado é igual a: {resultado}")
            break
            
        elif operacao == "-":
            resultado = numero1-numero2
            print(f"Resultado é igual a: {resultado}")
            break 

        elif operacao == "*":
            resultado = numero1*numero2
            print(f"Resultado é igual a: {resultado}")
            break

        elif operacao == "/":
            resultado = numero1/numero2
            print(f"Resultado é igual a: {resultado}")
            break

        else:
            print(" Operação Invalida, tentar novamente. \n") 

        