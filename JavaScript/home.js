// Função para carregar o JSON de produtos
async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json');
        const produtos = await response.json();
        exibirProdutos(produtos);
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// Função para exibir os produtos na página
    function exibirProdutos(produtos) {
        const listaProdutos = document.getElementById('product-list');

        produtos.forEach(produto => {
            const produtoCard = document.createElement('div');
            produtoCard.classList.add('product');

            produtoCard.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <div class="price">${produto.preco}</div>
                <button>Comprar</button>
            `;

            listaProdutos.appendChild(produtoCard);
        });
    }

    // Chama a função para carregar os produtos ao iniciar a página
    carregarProdutos();