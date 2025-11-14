// URL do backend no Render - SUBSTITUA pela URL do seu backend
const API_URL = '';

// Elementos do DOM
const btnChamar = document.getElementById('btnChamar');
const loadingDiv = document.getElementById('loading');
const resultadoDiv = document.getElementById('resultado');

// Função para chamar a API
async function chamarAPI() {
    try {
        // Desabilita o botão e mostra loading
        btnChamar.disabled = true;
        loadingDiv.style.display = 'block';
        resultadoDiv.style.display = 'none';
        resultadoDiv.className = 'resultado';

        console.log('Fazendo requisição para:', API_URL);

        // Faz a requisição para o backend
        const resposta = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Erro HTTP! Status: ${resposta.status}`);
        }

        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Exibe o resultado com sucesso
        exibirResultado(dados, true);

    } catch (erro) {
        console.error('Erro ao chamar API:', erro);
        
        // Exibe mensagem de erro
        exibirResultado({
            erro: erro.message,
            detalhes: 'Verifique se o backend está rodando e se a URL está correta.'
        }, false);
    } finally {
        // Reabilita o botão e esconde loading
        btnChamar.disabled = false;
        loadingDiv.style.display = 'none';
    }
}

// Função para exibir o resultado na tela
function exibirResultado(dados, sucesso) {
    resultadoDiv.style.display = 'block';
    
    if (sucesso) {
        resultadoDiv.className = 'resultado sucesso';
        resultadoDiv.innerHTML = `
            <h3>✅ Sucesso!</h3>
            <p><strong>Mensagem do Backend:</strong></p>
            <pre>${JSON.stringify(dados, null, 2)}</pre>
        `;
    } else {
        resultadoDiv.className = 'resultado erro';
        resultadoDiv.innerHTML = `
            <h3>❌ Erro na Requisição</h3>
            <p><strong>Detalhes:</strong></p>
            <pre>${JSON.stringify(dados, null, 2)}</pre>
            <p style="margin-top: 15px;"><strong>Dica:</strong> Certifique-se de que:</p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>O backend está rodando no Render</li>
                <li>A URL da API está correta no código</li>
                <li>O CORS está configurado no backend</li>
            </ul>
        `;
    }
}

// Event listener do botão
btnChamar.addEventListener('click', chamarAPI);

// Adiciona um teste de conexão ao carregar a página
window.addEventListener('load', () => {
    console.log('Página carregada! Pronta para fazer requisições.');
    console.log('URL da API configurada:', API_URL);
    
    const versaoElement = document.getElementById('versao');
    if (versaoElement) {
        versaoElement.textContent = 'v1.0.0';
    }
});