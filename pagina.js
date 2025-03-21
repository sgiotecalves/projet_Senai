let nome = prompt("Qual é o seu nome?"); 
let saudacao = document.createElement('h1'); 
saudacao.textContent = `Seja bem-vindo(a) ${nome}`; 
document.body.appendChild(saudacao); 
saudacao.style.textAlign = 'center';
saudacao.style.opacity = '0'; 
saudacao.style.transition = 'opacity 1s ease'; 


window.addEventListener('load', function() {
    saudacao.style.opacity = '1';  
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {  
        saudacao.style.opacity = '1'; 
    } else {
        saudacao.style.opacity = '0'; 
    }
});
