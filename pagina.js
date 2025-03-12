let nome = prompt("Qual é o seu nome?");  // Captura o nome do usuário
let saudacao = document.createElement('h1'); // Cria um elemento <h1>
saudacao.textContent = `Seja bem-vindo(a) ${nome}`; // Define o conteúdo do <h1>
document.body.appendChild(saudacao);  // Adiciona o <h1> ao corpo da página
saudacao.style.textAlign = 'center';
saudacao.style.opacity = '0'; // Inicialmente invisível
saudacao.style.transition = 'opacity 1s ease'; // Define a transição de opacidade para 1 segundo

// Evento para verificar o scroll da página
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {  // Quando o usuário rolar mais de 0px para baixo
        saudacao.style.opacity = '1'; // Torna o <h1> visível
    } else {
        saudacao.style.opacity = '0'; // Faz o <h1> desaparecer se o scroll for no topo
    }
});
