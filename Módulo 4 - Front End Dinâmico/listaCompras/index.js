let produtos = [];
let id = 1;
let limiteGasto = 0;

function adcionarProduto() {
    const btnAdcionar = document.getElementById("add");

    btnAdcionar.addEventListener("click", () => {
        const limitePreco = parseFloat(
            document.getElementById("limite").value.trim()
        );
        const produto = document.getElementById("produto").value.trim();
        const valor = parseFloat(document.getElementById("valor").value);

        if (!verificarCamposVazios(limitePreco, produto, valor)) {
            return console.log("Campo(s) vazio(s)");
        }
        limiteGasto = limitePreco;
        armazenarListaArray(id, produto, valor);
        id++;
        listarProdutos();

        indicarLimiteCompraEstourao(limitePreco);
        selecionarProdutosDeletar();
    });
}

function listarProdutos() {
    const ul = document.getElementById("lista");
    const li = document.createElement("li");

    produtos.forEach((produto) => {
        li.innerHTML = `
        <input class='checkbox' type='checkbox' id='checkbox_produto_${produto.Id}'>
        <spam> ${produto.Produto}</spam>  <spam>R$ ${produto.Valor}</spam>
        `;
    });
    ul.append(li);
}

function selecionarProdutosDeletar() {
    const checkboxes = document.querySelectorAll("li .checkbox");

    checkboxes.forEach((box) => {
        box.addEventListener("click", () => {
            const estaSelecionado = box.checked;
            //parentElement pega todos os filhos diretos do elemento pai do checkbox
            //querrySelectoAll pega somente os spans
            box.parentElement.querySelectorAll("spam").forEach((el) => {
                el.style.textDecoration = estaSelecionado
                    ? "line-through"
                    : "none";
            });
        });

        btnRemover(box);
    });
}

function indicarLimiteCompraEstourao(valorLimite) {
    const spamSoma = document.querySelector("span#soma");
    let somaProdutos = produtos
        .reduce((valor, produto) => (valor += produto.Valor), 0)
        .toFixed(2);
    mostrarSomaProdutos(somaProdutos);
    if (valorLimite < somaProdutos) {
        spamSoma.className = "checado";
        return;
    }
    spamSoma.removeAttribute("class");
}

function mostrarSomaProdutos(total) {
    somaParcial = document.getElementById("soma");
    somaParcial.innerText = `Soma: ${total}`;
}

function verificarCamposVazios(valorLimite, produto, valorProduto) {
    if (!valorLimite) {
        alert("Valor limite inválido");
        return false;
    }
    if (!produto) {
        alert("Produto inválido");
        return false;
    }
    if (!valorProduto) {
        alert("Valor do produto inválido");
        return false;
    }

    return true;
}

function armazenarListaArray(id, produto, valor) {
    produtos.push({
        Id: id,
        Produto: produto,
        Valor: valor,
    });
}

function btnRemover(box) {
    const btnRemover = document.getElementById("remover");

    btnRemover.addEventListener("click", () => {
        if (!produtos.length > 0) {
            alert("Adicione algum produto primeiro para poder remover");
            return console.error("Array vazio, impossível remover algo");
        }
        box.parentElement.remove();
    });
}

adcionarProduto();
