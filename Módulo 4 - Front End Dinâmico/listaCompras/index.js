let produtos = [];
let id = 2;
let limiteGasto = 0;

function adcionarProduto() {
    const btnAdcionar = document.getElementById("add");

    btnAdcionar.addEventListener("click", () => {
        const limitePreco = document.getElementById("limite").value.trim();
        const produto = document.getElementById("produto").value.trim();
        const valor = document.getElementById("valor").value.trim();
        limiteGasto = parseFloat(limitePreco);
        produtos.push({
            Id: id,
            Produto: produto,
            Valor: valor,
        });
        id++;
        listarProdutos();
        riscarProdutoLista();
        verificarGastoMaximo(limitePreco);
    });
}

function listarProdutos() {
    const ul = document.getElementById("lista");
    const li = document.createElement("li");

    produtos.forEach((produto) => {
        li.innerHTML = `
        <input class='checkbox' type='checkbox' id='checkbox_produto_${produto.Id}'>
        <p> ${produto.Produto} - R$ ${produto.Valor}</p>
        `;
    });
    ul.append(li);
}

function riscarProdutoLista() {
    const checkboxes = document.querySelectorAll("li .checkbox");

    checkboxes.forEach((box) => {
        box.addEventListener("click", () => {
            const estaSelecionado = box.checked;
            //parentElement pega todos os filhos diretos do elemento pai do checkbox
            //querrySelectoAll pega somente os spans
            box.parentElement.querySelectorAll("p").forEach((el) => {
                el.style.textDecoration = estaSelecionado
                    ? "line-through"
                    : "none";
            });
        });
    });
}

function indicaLimiteEstourao(valorLimite) {
    const spamSoma = document.getElementById("soma");
    let somaProdutos = produtos.reduce(
        (valor, produto) => (soma += produto.Valor),
        0
    );

    if (valorLimite < somaProdutos) {
        spamSoma.className = ".checado";
    }
    spamSoma.className = "none";
}

adcionarProduto();
