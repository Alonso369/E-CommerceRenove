const carregarProdutos = async() => {
    try {
        const response = await fetch('../json/produtos.js');
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.error('Error ao carregar produtos.', error);
    }
};

carregarProdutos().then(produtos => console.log(produtos)).catch(error => console.error(error));

//rederização dos produtos
async function renderizarProdutos() {
    const produtosConstainer = document.getElementById('produtosContainer');//seleciona um produto html produrado pelo ID = product-list
    const arrayProdutos = await carregarProdutos();//retorna um array de produtos e a função await permite que o código aguarde a resolução da função assícrona
    arrayProdutos.forEach(prod => {
        const produtoCard = document.createElement('div');
        produtoCard.classList.add('col-lg-2', 'col-md-4', 'col-sm-3');
        produtoCard.innerHTML =
        `
            <div class="card h-100 mx-2>
                <div class="card-body">
                    <img src="../galeria/${prod.imagem}" alt="" class=" img-cards img-fluid mb-2">
                    <h5>${prod.nome}</h5>
                    <p>${prod.descricao}</p>
                    <p>${prod.preco}</p>
                    <button data-id="${prod.id}" class="btAdicionar btn btn-primary">
                    Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        produtoCard.querySelector('.btAdicionar').addEventListener('click', AdicionarItemCarrinho);
        produtosConstainer.appendChild(produtoCard);
    });
    localStorage.setItem('produtos', JSON.stringify(arrayProdutos));//adiciona o produto no local storage
}

window.onload = async() => {
    try {
        renderizarProdutos();
    } catch (error) {
        console.error('Error ao carregar produtos no window.onload', error);
    }
}

function AdicionarItemCarrinho(e) {
    const produtoId = e.target.getAttribute('data-id');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtos = JSON.parse(localStorage.getItem('produtos')); //lista de produtos
    const produtoSelecionado = produtos.find(prod => prod.id === Number(produtoId));
    if (produtoSelecionado) {
        carrinho.push(produtoSelecionado);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert("Produto adicionado ao carrinho");
    } else {
        alert('Produto encontrado.');
    }
}



