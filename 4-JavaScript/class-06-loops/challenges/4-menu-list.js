const listItens = [];

while (true) {
    console.log(listItens);

    const menuOption = prompt(
    `Digite a opção desejada:

        1 - Cadastrar item
        2 - Ver itens cadastrados
        3 - Remover item cadastrado
        4 - Sair do programa
    `
    );
    if (menuOption === "4" || menuOption === null) {
        break;
    }

    if (menuOption === "") {
        alert("Por favor escolha uma das opções!");
        continue;
    }

    switch (menuOption) {
        case "1":
            console.log("Opção 1");
            while (true) {
                let addItem = prompt("Digite o nome do item para adicionar:");

                if (addItem === null) {
                    break;
                }

                addItem = addItem.trim();
                
                if (addItem.trim() === "") {
                    alert("Por favor, digite um nome para cadastrar");
                }

                if (listItens.includes(addItem)) {
                    alert("Item já cadastrado!");} else {
                    listItens.push(addItem);
                    alert(`${addItem} cadastrado(a) com sucesso!`)
                }
            }
            break;
        case "2":
            console.log("Opção 2");
            if (listItens.length === 0) {
                alert("Lista vazia!")   
            } else {
                alert(listItens.join("-"));
            }
            break;
        case "3":
            console.log("Opção 3");
            break;
    
        default:
            alert("Opção inválida!")
    }
}