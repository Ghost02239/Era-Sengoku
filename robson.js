// script.js

// Obter o botão
var mybutton = document.getElementById("scrollToTopBtn");

// Quando o usuário rolar para baixo 20px, mostre o botão
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"; // Exibe o botão
    } else {
        mybutton.style.display = "none"; // Esconde o botão
    }
};

// Quando o usuário clicar no botão, role até o topo da página
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // A rolagem será suave
    });
}
