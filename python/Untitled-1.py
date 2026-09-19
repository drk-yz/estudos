continuar = input()
input(continuar(input("Adicionar tarefas? (s/n) ")))
while continuar == "s":
        tarefa = input("Digite uma tarefa: \n")
        print(f"Tarefa adicionada: {tarefa}")
        print("Deseja adicionar outra tarefa? (s/n)")
        continuar = input()
        if continuar == "s":
            True
        elif continuar == "n":
            break
        else:
            print("Escolha uma operação valida")
            True
while continuar == "n":
        print("Die monster, you don't belong to this world")       
print("Lista de Tarefas\n")
print(tarefa)