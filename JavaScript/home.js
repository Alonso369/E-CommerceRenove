const carregarProdutos = async() =>{
    try {
        const response = await fetch('json/produtos.js');//fazendo uma requisição http para o Json, e retornando uma promisse
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.error("Error ao carregar produtos.", error);
    }
}

//rederização dos produtos
async function renderizarProdutos() {
    const produtosConstainer = document.getElementById('produtosContainer');
    const arrayProdutos = await carregarProdutos();
    arrayProdutos.forEach(prod => {
        const produtoCard = document.createElement('div');
        produtoCard.classList.add('col-lg-3', 'col-md-4', 'col-sm-6');
        produtoCard.innerHTML =
        `
            <div class = "card h-100 mx-2>
                <div class = "card-body">
                <img src = "img/${prod.imagem}" alt = "" class = "img-fluid mb-2">
                    <h2>${prod.nome}</h2>
                    <p>${prod.descricao}</p>
                    <p>${prod.preco}</p>
                    <button data-id = "${prod.id}" class = "btAdicionar btn btn-primary">
                    Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        produtoCard.querySelector('.btAdicionar').addEventListener('click', AdionarItemCarrinho);
        produtosConstainer.appendChild(produtoCard);
    });
    localStorage.setItem('produtos', JSON.stringify(arrayProdutos));
}

window.onload = async() => {
    try {
        renderizarProdutos();
    } catch (error) {
        console.error('Error ao carregar produtos no window.onload', error);
    }
}



