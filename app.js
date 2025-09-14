// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um novo amigo e atualizar a exibição na tela
function adicionarAmigo() {
    // 1. Capturar o valor do campo de entrada
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim(); // .trim() remove espaços extras

    // 2. Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return; // Interrompe a função
    }

    // Validação extra: verifica se o nome já foi adicionado
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        amigoInput.value = '';
        return; // Interrompe a função
    }

    // 3. Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista de nomes visível na página
    atualizarLista();

    // 4. Limpar o campo de entrada
    amigoInput.value = '';
}

// Função responsável por exibir os nomes na tela
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar os nomes novamente

    // Cria um elemento <li> para cada amigo no array e o adiciona à lista no HTML
    for (let amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return; // Interrompe a função se não houver amigos
    }

    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar o resultado na tela
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

