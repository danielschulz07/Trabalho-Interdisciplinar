const inBuscarRaca = document.getElementById("inBuscarRaca");
const inAnoInicioLactacao = document.getElementById("inAnoInicioLactacao");
const inVolumeMinimo = document.getElementById("inVolumeMinimo");
const inVolumeMaximo = document.getElementById("inVolumeMaximo");
const btFiltro = document.getElementById("btFiltro");
const outSaida = document.getElementById("outSaida");


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

        const producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i]; // CALCULO DE PRODUCAO TOTAL
        const producaoMedia = producaoTotal / vetDiasLactacao[i]; // CALCULO DE PRODUCAO MEDIA

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







btFiltro.addEventListener('click', function () {

    // fazer verificação pros tres campus

    let raca = inBuscarRaca.value;
    let stringRaca = "";
    const dtInicioLactacaoPesq = new Date(inAnoInicioLactacao.value + "T00:00:00");
    let stringAnoLactacao = "";
    let volumeMinimo = Number(inVolumeMinimo.value);
    let volumeMaximo = Number(inVolumeMaximo.value);
    let stringProducaoTotal = "";



    if(inAnoInicioLactacao == "" || (volumeMinimo == 0 || volumeMinimo < producaoTotal) &&
                (volumeMaximo == 0 || volumeMaximo > producaoTotal)) {
        
    

        for (let i = 0; i < vetRaca.length; i++) {
            if (vetRaca[i].toUpperCase().includes(raca.toUpperCase())) {
                stringRaca += vetRaca[i] + ", ";
            }
        };
     }




        for (let i = 0; i < vetDataInicio.length; i++) {

            let vetDDMMAAAA = vetDataInicio[i].split('/');  //retorna para vetDDMMAAAA um vetor [0]=dia, [1]=mês e [2]=ano
            let strDtInicioLactacao = vetDDMMAAAA[2] + '-' + vetDDMMAAAA[1] + '-' + vetDDMMAAAA[0] + "T00:00:00";
            let dtInicioLactacao = new Date(strDtInicioLactacao);

            if (dtInicioLactacao > dtInicioLactacaoPesq) {

                stringAnoLactacao += dtInicioLactacao.toLocaleDateString() + "<br>";
            }
        };

         outSaida.innerHTML = stringAnoLactacao



 

        for (let i = 0; i < vetLitrosPorDia.length; i++) {
            let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i];
            producaoTotal.toFixed(0);

            if (
                (volumeMinimo == 0 || volumeMinimo < producaoTotal) &&
                (volumeMaximo == 0 || volumeMaximo > producaoTotal)
            ) {
                stringProducaoTotal += producaoTotal.toFixed(0) + "<br>";
            }
        }

    



 

   // outSaida.innerHTML = stringRaca.slice(0, -2) + "<br>" + stringAnoLactacao + stringProducaoTotal;

})



//Aprimorar o filtro, deixando igual a tabela
// quando mostrar o nome da vaca podera mostrar qual é o id dessa vaca




//Filtro por “Ano de Início de Lactação”, em que o usuário pode digitar um determinado ano, e a listagem de vacas é atualizada, 
//mostrando apenas os animais com lactação iniciada a partir daquele ano.


//Filtro por “Volume Total Produzido”, em que o usuário pode digitar o valor mínimo, o valor máximo ou ambos,
//  e a listagem de vacas é atualizada, mostrando apenas os animais que apresentaram um total produzido dentro da faixa de valores indicada 
// (baseado no dado calculado de Total Produzido).