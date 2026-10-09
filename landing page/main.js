// ===== BOTÃO DE TROCAR COR =====
const botaoTema = document.getElementById('btn-tema');

// Ao carregar, aplica o tema salvo (se houver)
try {
    if (localStorage.getItem('tema') === 'claro') {
        document.body.classList.add('tema-claro');
    }
} catch (e) {}

botaoTema.addEventListener('click', () => {
    const claro = document.body.classList.toggle('tema-claro');
    try {
        localStorage.setItem('tema', claro ? 'claro' : 'escuro');
    } catch (e) {}
});

// ===== MENU SANDUÍCHE =====
const botaoMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

function fecharMenu() {
    menu.classList.remove('aberto');
    botaoMenu.classList.remove('aberto');
    botaoMenu.setAttribute('aria-expanded', 'false');
}

botaoMenu.addEventListener('click', (evento) => {
    evento.stopPropagation();
    const aberto = menu.classList.toggle('aberto');
    botaoMenu.classList.toggle('aberto', aberto);
    botaoMenu.setAttribute('aria-expanded', aberto);
});

// Fecha ao clicar em um link do menu
menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharMenu);
});

// Fecha ao clicar fora do menu
document.addEventListener('click', (evento) => {
    if (!menu.contains(evento.target)) fecharMenu();
});

// Fecha com a tecla Esc
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') fecharMenu();
});

// ===== ENVIO DO FORMULÁRIO =====
const form = document.getElementById('form-contato');
const statusForm = document.getElementById('status-form');

form.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    // Exige o reCAPTCHA marcado
    if (typeof grecaptcha === 'undefined' || !grecaptcha.getResponse()) {
        statusForm.textContent = 'Confirme que você não é um robô.';
        return;
    }

    statusForm.textContent = 'Enviando...';

    try {
        const resposta = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' }
        });

        if (resposta.ok) {
            statusForm.textContent = 'Mensagem enviada! Obrigado pelo contato.';
            form.reset();
        } else {
            statusForm.textContent = 'Erro ao enviar. Tente novamente.';
        }
    } catch (erro) {
        statusForm.textContent = 'Falha de conexão. Tente novamente.';
    }

    grecaptcha.reset();
});