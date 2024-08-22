import { produtos } from "../Json/produtos";
// Função para exibir os produtos na página
function exibirProdutos(produtos) {
    try {
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
    } catch (error) {
        
    }
}

// Chama a função para carregar os produtos ao iniciar a página
exibirProdutos(produtos);