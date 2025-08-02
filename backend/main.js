window.addEventListener('load', function () {

    const btnFiltroHeader = document.getElementById('btnFiltroHeader');
    const btnRelatorioHeader = document.getElementById('btnRelatorioHeader');
    const filtrosSection = document.getElementById('filtrosSection');
    const relatoriosSection = document.getElementById('relatoriosSection');
    const btnLimparFiltros = document.getElementById('btnLimparFiltros');

        configurarEventos();
    
    // Configura os eventos dos botões
    function configurarEventos() {
        // Botão de filtros no header
        if (btnFiltroHeader) {
            btnFiltroHeader.addEventListener('click', function () {
                toggleSection(filtrosSection, relatoriosSection);
                this.classList.toggle('active');
            });
        }

        // Botão de relatórios no header
        if (btnRelatorioHeader) {
            btnRelatorioHeader.addEventListener('click', function () {
                toggleSection(relatoriosSection, filtrosSection);
                this.classList.toggle('active');
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

    }
});