// Elementos da Troca de Tema e Logo
const botaoTema = document.getElementById('tema');
const html = document.documentElement;
const logo = document.getElementById('logoNike');

// Troca de Tema e Logo
botaoTema.addEventListener('click', () => {
    const temaAtual = html.getAttribute('data-theme');

    if (temaAtual === 'dark') {
        html.setAttribute('data-theme', 'light');
        logo.src = 'imgs/logo.svg';
    } else {
        html.setAttribute('data-theme', 'dark');
        logo.src = 'imgs/logo_nike.svg';
    }
});

// Elementos e Controle do Modal
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.showModal();
    }
}

function fecharModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.close();
    }
}