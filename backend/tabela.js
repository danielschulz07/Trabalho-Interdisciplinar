window.onload = function () { //FUNÇAO QUE CARREGA A TABELA AUTOMATICAMENTE

    const main = document.getElementById("main")
    const tabela = document.createElement("table");
    const cabecalho = document.createElement("tr");
    let titulos = ['IDAnimal', 'Raça', 'Produção média diária', 'Dias em lactação', 'Data de início', 'Total Produzido'];
    tabela.appendChild(cabecalho);

    for (let i = 0; i < titulos.length; i++) {
        const th = document.createElement('th');
        th.textContent = titulos[i];  //AQUI VAI PEGAR UM MINI VETOR DE TITULOS E IR COLOCANDO EM FORMA DE TH (COLUNA)
        cabecalho.appendChild(th);  // AQUI ADICIONA ESSES TITULOS NO CORPO DA TABELA, VAZENDO ISSO N PRECISA DE COLOCAR CADA TITULO DE FORMA MANUAL E REPETITIVA
    }

    for (let i = 0; i < vetIDAnimal.length; i++) { //AQUI UM FOR QUE RODA TODA ESTRUTURA DA TABELA

        let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i]; // CALCULO DE PRODUCAO TOTAL
        let producaoMedia = producaoTotal / vetDiasLactacao[i]; // CALCULO DE PRODUCAO MEDIA

        const tr = document.createElement('tr'); // TR CRIA O CABEÇALHO

        const tdIDRaca = document.createElement('td'); // TD PARA CRIAR UMA LINHA
        tdIDRaca.textContent = vetIDAnimal[i]; // AQUI ADICONA OS DADOS PRA TABELA
        tr.appendChild(tdIDRaca); // AQUI JOGA OS DADOS PRA TABELA

        const tdRaca = document.createElement('td');
        tdRaca.textContent = vetRaca[i];
        tr.appendChild(tdRaca);

        const tdProducaoMedia = document.createElement('td');
        tdProducaoMedia.textContent = producaoMedia.toFixed(1);
        tr.appendChild(tdProducaoMedia);

        const tdDiasLactacao = document.createElement('td');
        tdDiasLactacao.textContent = vetDiasLactacao[i];
        tr.appendChild(tdDiasLactacao);

        const tdDataInicio = document.createElement('td');
        tdDataInicio.textContent = vetDataInicio[i];
        tr.appendChild(tdDataInicio);

        const tdTotalProduzido = document.createElement('td');
        tdTotalProduzido.textContent = producaoTotal.toFixed(1) + "L";
        tr.appendChild(tdTotalProduzido);

        tabela.appendChild(tr); // ADD O TR A TABELA
    }
    main.appendChild(tabela) // ADD A TABELA AO MAIN NO HTML
}