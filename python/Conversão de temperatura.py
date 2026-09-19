while True:
    print("1 - Celcius para Fahrenheit")
    print("2 - Fahrenheit para Celcius\n")
    operacao = input("Escolha a operação: ")

    if operacao == "1" :
        grauc = float(input("Informe a temperatura em ºC para transformar em Fahrenheit: "))
        grauf = grauc*1.8+32
        print(f"Resultado em ºF: {grauf} ")

    elif operacao == "2" :
        grauf = float(input("Informe a temperatura em ºF para transformar em Celsius: "))
        grauc = (grauf-32)/1.8
        print(f"Resultado em ºC {grauc} \n")
    
