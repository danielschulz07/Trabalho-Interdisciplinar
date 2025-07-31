// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos do DOM
    const btnFiltroHeader = document.getElementById('btnFiltroHeader');
    const btnRelatorioHeader = document.getElementById('btnRelatorioHeader');
    const filtrosSection = document.getElementById('filtrosSection');
    const relatoriosSection = document.getElementById('relatoriosSection');
    const btnLimparFiltros = document.getElementById('btnLimparFiltros');
    const totalRegistros = document.getElementById('totalRegistros');
    
    // Elementos das estatísticas do banner
    const totalAnimais = document.getElementById('totalAnimais');
    const producaoTotal = document.getElementById('producaoTotal');
    const mediaLactacao = document.getElementById('mediaLactacao');
    
    // Inicialização
    init();
    
    function init() {
        calcularEstatisticas();
        atualizarTotalRegistros();
        configurarEventos();
    }
    
    // Calcula as estatísticas para o banner
    function calcularEstatisticas() {
        if (typeof vetIDAnimal !== 'undefined' && vetIDAnimal.length > 0) {
            // Total de animais
            totalAnimais.textContent = vetIDAnimal.length;
            
            // Produção total diária
            let producaoDiaria = 0;
            for (let i = 0; i < vetLitrosPorDia.length; i++) {
                producaoDiaria += vetLitrosPorDia[i];
            }
            producaoTotal.textContent = producaoDiaria.toFixed(1);
            
            // Média de dias em lactação
            let somaDias = 0;
            for (let i = 0; i < vetDiasLactacao.length; i++) {
                somaDias += vetDiasLactacao[i];
            }
            const mediaDias = somaDias / vetDiasLactacao.length;
            mediaLactacao.textContent = Math.round(mediaDias);
        }
    }
    
    // Atualiza o contador de registros na tabela
    function atualizarTotalRegistros() {
        if (typeof vetIDAnimal !== 'undefined') {
            totalRegistros.textContent = `${vetIDAnimal.length} animais cadastrados`;
        }
    }
    
    // Configura os eventos dos botões
    function configurarEventos() {
        // Botão de filtros no header
        if (btnFiltroHeader) {
            btnFiltroHeader.addEventListener('click', function() {
                toggleSection(filtrosSection, relatoriosSection);
                this.classList.toggle('active');
                if (btnRelatorioHeader) {
                    btnRelatorioHeader.classList.remove('active');
                }
            });
        }
        
        // Botão de relatórios no header
        if (btnRelatorioHeader) {
            btnRelatorioHeader.addEventListener('click', function() {
                toggleSection(relatoriosSection, filtrosSection);
                this.classList.toggle('active');
                if (btnFiltroHeader) {
                    btnFiltroHeader.classList.remove('active');
                }
            });
        }
        
        // Botão limpar filtros
        if (btnLimparFiltros) {
            btnLimparFiltros.addEventListener('click', limparFiltros);
        }
    }
    
    // Alterna a visibilidade das seções
    function toggleSection(sectionToShow, sectionToHide) {
        if (sectionToShow && sectionToHide) {
            // Esconde a outra seção
            sectionToHide.classList.add('hidden');
            
            // Alterna a seção atual
            if (sectionToShow.classList.contains('hidden')) {
                sectionToShow.classList.remove('hidden');
                // Scroll suave para a seção
                sectionToShow.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } else {
                sectionToShow.classList.add('hidden');
            }
        }
    }
    
    // Limpa todos os filtros
    function limparFiltros() {
        const inBuscarRaca = document.getElementById('inBuscarRaca');
        const inAnoInicioLactacao = document.getElementById('inAnoInicioLactacao');
        const inVolumeMinimo = document.getElementById('inVolumeMinimo');
        const inVolumeMaximo = document.getElementById('inVolumeMaximo');
        const outSaida = document.getElementById('outSaida');
        
        if (inBuscarRaca) inBuscarRaca.value = '';
        if (inAnoInicioLactacao) inAnoInicioLactacao.value = '';
        if (inVolumeMinimo) inVolumeMinimo.value = '';
        if (inVolumeMaximo) inVolumeMaximo.value = '';
        if (outSaida) outSaida.innerHTML = '';
        
        // Feedback visual
        if (outSaida) {
            outSaida.innerHTML = '<p style="color: #28a745; font-weight: 600;"><i class="fas fa-check-circle"></i> Filtros limpos com sucesso!</p>';
            setTimeout(() => {
                outSaida.innerHTML = '';
            }, 2000);
        }
    }
    
    // Função para formatar números
    function formatarNumero(numero) {
        return numero.toLocaleString('pt-BR', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        });
    }
    
    // Função para animar números (efeito contador)
    function animarNumero(elemento, valorFinal) {
        const valorInicial = 0;
        const duracao = 2000; // 2 segundos
        const incremento = valorFinal / (duracao / 16); // 60 FPS
        let valorAtual = valorInicial;
        
        const timer = setInterval(() => {
            valorAtual += incremento;
            if (valorAtual >= valorFinal) {
                valorAtual = valorFinal;
                clearInterval(timer);
            }
            elemento.textContent = Math.round(valorAtual);
        }, 16);
    }
    
    // Adiciona efeitos visuais aos botões ativos
    const style = document.createElement('style');
    style.textContent = `
        .btn-primary.active,
        .btn-secondary.active {
            background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%) !important;
            box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4) !important;
            transform: translateY(-2px) !important;
        }
        
        .filtros-section,
        .relatorios-section {
            transition: all 0.3s ease;
        }
        
        .filtros-section:not(.hidden),
        .relatorios-section:not(.hidden) {
            animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Função global para recalcular estatísticas (pode ser chamada por outros scripts)
function recalcularEstatisticas() {
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
}

