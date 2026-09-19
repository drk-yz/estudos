nome = input("Digite seu nome:")
sobrenome = input("Digite seu sobrenome:")
print("Olá, " + nome + " " + sobrenome + "! Seja bem-vindo")
print("Continuar Cadastro? (s/n)")
resposta = input()
if resposta == "s":
    email = input("Digite seu email:")
    if "@" in email and "." in email:
        print("Cadastro realizado com sucesso!")
    elif "@" not in email:
        print("Email inválido: falta o símbolo '@'")
    elif "." not in email:
        print("Email inválido: falta o símbolo '.'")
elif resposta == "n":
    print("Cadastro cancelado")