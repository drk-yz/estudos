while True:
    tentativas = 3
    perm = False
    while tentativas > 0:
        senha = input("Insira a senha: ")
        if senha != "93263910@":
            print("Senha incorreta\n")
            tentativas -= 1
        else:
            print("Acesso permitido")
            perm = True
            break
    if perm == True:
        break
    elif tentativas == 0:
        print("Acesso bloqueado")
        break