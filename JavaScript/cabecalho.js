async function renderizarCabecalho() {
    const cabecalhoConstainer = document.getElementById('cabecalhoContainer');

    const cabecalhoCard = document.createElement('div');
    cabecalhoCard.innerHTML = ` 
        <header>
        <nav class="cabeçalho">
            <div>
                <img class="logo" src="../Galeria/Logo.png" alt="Logo da empresa do site" title="Logo da empresa">
            </div>
            <div class="pesquisa">
                <input class="search-input" placeholder="Pesquisar..." type="text " name="q">
                <button class="search-button"><i class="fa fa-search "></i>
                        Buscar</button>
            </div>
            <div>
                <ul>
                    <li class="icone">
                        <a href="/pages/carrinho.html"><i class="carrinho text-warning fa fa-shopping-cart"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <a class="text-link-menu navbar-brand font-weight-bold" href="#">Tintas</a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="text-link-menu nav-item nav-link active text-dark" href="/pages/home.html">Home <span class="sr-only">(Página atual)</span></a>
                    <a class="text-link-menu nav-item nav-link" href="/pages/cadastro.html">Cadastro</a>
                    <a class="text-link-menu nav-item nav-link" href="/pages/produto.html">Produto</a>
                    <a class="text-link-menu nav-item nav-link disabled" href="#">Desativado</a>
                </div>
            </div>
        </nav>
    </header>
    `;
    //adiciona o conteúdo criado ao elemento cabeçalhoContainer
    cabecalhoConstainer.appendChild(cabecalhoCard);
}

window.onload = async => {
    try {
        renderizarCabecalho();
    } catch (error) {
        console.error("Error ao carregar o cabeçalho.", error);
    }
}