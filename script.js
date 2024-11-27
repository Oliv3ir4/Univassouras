// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('nav a');

// Adiciona um evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o ID do alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        // Rola suavemente até o elemento alvo
        targetElement.scrollIntoView({
            behavior: 'smooth' // Define o comportamento da rolagem
        });
    });
});




function abrirModal(personagem) {
    var modal = document.getElementById(personagem + "Modal");
    if (modal) {
        modal.style.display = "block"; // Mostra o modal
    }
}

function fecharModal() {
    var modais = document.getElementsByClassName("modal");
    for (var i = 0; i < modais.length; i++) {
        modais[i].style.display = "none"; // Oculta todos os modais
    }
}

// Adicionar um evento para fechar o modal ao clicar fora dele
window.onclick = function(event) {
    var modais = document.getElementsByClassName("modal");
    for (var i = 0; i < modais.length; i++) {
        if (event.target == modais[i]) {
            modais[i].style.display = "none"; // Oculta o modal
        }
    }
}

