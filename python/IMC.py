altura = float(input("Insira sua altura(m): "))
peso = float(input("Insira seu peso(kg): "))
idade = int(input("Insira sua idade: "))
imc = peso / (altura * altura)

print("Seu IMC é igual a:", imc)

if idade > 20:
    if imc > 30:
        print("Obesidade")
    elif imc > 25:
        print("Sobrepeso")
    elif imc > 18.5:
        print("Normal")
    else:
        print("Abaixo do peso")

elif idade > 16:
    if imc > 28.9:
        print("Obesidade")
    elif imc > 23.9:
        print("Sobrepeso")
    elif imc > 16.5:
        print("Normal")
    else:
        print("Abaixo do peso")

else:  # idade <= 16
    if imc > 25.9:
        print("Obesidade")
    elif imc > 21.9:
        print("Sobrepeso")
    elif imc > 15.5:
        print("Normal")
    else:
        print("Abaixo do peso")
    
