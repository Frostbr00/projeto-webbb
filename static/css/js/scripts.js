// static/js/scripts.js
// Scripts personalizados do Sistema de Gestão

// ── Confirmação antes de excluir ──────────────────────────────────────
// Esta função é chamada por botões de exclusão para pedir confirmação
function confirmarExclusao(mensagem) {
    // window.confirm() abre uma caixa de diálogo com OK e Cancelar
    // Retorna true se o usuário clicar OK, false se clicar Cancelar
    return window.confirm(mensagem || 'Tem certeza que deseja excluir este item?');
}

// ── Alerta automático que desaparece ──────────────────────────────────
// Fecha automaticamente os alertas Bootstrap após 5 segundos
document.addEventListener('DOMContentLoaded', function () {
    // DOMContentLoaded: executa quando o HTML terminou de carregar

    const alertas = document.querySelectorAll('.alert');
    // querySelectorAll: seleciona todos os elementos com a classe 'alert'

    alertas.forEach(function (alerta) {
        // Para cada alerta encontrado, agenda o fechamento após 5 segundos
        setTimeout(function () {
            // bootstrap.Alert.getOrCreateInstance cria (ou reutiliza)
            // a instância Bootstrap do alerta e chama close() para fechar
            const instancia = bootstrap.Alert.getOrCreateInstance(alerta);
            instancia.close();
        }, 5000); // 5000 milissegundos = 5 segundos
    });
});

// ── Destaca o link ativo na navbar ────────────────────────────────────
// Adiciona a classe 'active' ao link que corresponde à URL atual
document.addEventListener('DOMContentLoaded', function () {
    const urlAtual = window.location.pathname;
    // window.location.pathname: retorna o caminho da URL atual (ex: '/produtos')

    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(function (link) {
        if (link.getAttribute('href') === urlAtual) {
            link.classList.add('active');
            // classList.add: adiciona uma classe CSS ao elemento
        }
    });
});