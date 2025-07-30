const inBuscarRaca = document.getElementById("inBuscarRaca");
const inAnoInicioLactacao = document.getElementById("inAnoInicioLactacao");
const inVolumeMinimo = document.getElementById("inVolumeMinimo");
const inVolumeMaximo = document.getElementById("inVolumeMaximo");
const btFiltro = document.getElementById("btFiltro");
const outSaida = document.getElementById("outSaida");

const btMostrarTabela = document.getElementById("btMostrarTabela");


btMostrarTabela.addEventListener('click', function () {

    if (document.querySelector('table')) {
        alert('tabela ja criada')
    } else {



        //vou ter que criar um verificação para n criar varias tabelas

        const tabela = document.createElement('table');
        const cabecalho = document.createElement('tr');
        //: IDAnimal, Raça, Produção média diária, Dias em lactação, Data de início, Total Produzido (calculado)
        let titulos = ['IDAnimal', 'Raça', 'Produção média diária', 'Dias em lactação', 'Data de início', 'Total Produzido'];

        tabela.appendChild(cabecalho);

        //Esses dados não devem ser armazenados em um vetor fixo, mas deverá ser calculado dinamicamente no sistema.


        for (let i = 0; i < titulos.length; i++) {
            const th = document.createElement('th');
            th.textContent = titulos[i];
            cabecalho.appendChild(th);
        }

        for (let i = 0; i < vetIDAnimal.length; i++) {

            let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i];
            let producaoMedia = producaoTotal / vetDiasLactacao[i];

            const tr = document.createElement('tr');

            const tdIDRaca = document.createElement('td');
            tdIDRaca.textContent = vetIDAnimal[i];
            tr.appendChild(tdIDRaca);

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

            tabela.appendChild(tr);
        }
        document.body.appendChild(tabela);
    }
})



btFiltro.addEventListener('click', function () {

    // fazer verificação pros tres campus



    let raca = inBuscarRaca.value;
    let stringRaca = "";
    const dtInicioLactacaoPesq = new Date(inAnoInicioLactacao.value + "T00:00:00");
    let stringAnoLactacao = "";
    let volumeMinimo = Number(inVolumeMinimo.value);
    let volumeMaximo = Number(inVolumeMaximo.value);
    let stringProducaoTotal = "";

    for (let i = 0; i < vetRaca.length; i++){
        if (vetRaca[i].toUpperCase().includes(raca.toUpperCase())) {
            stringRaca += vetRaca[i] + ", ";
        }
    };

    for (let i = 0; i < vetDataInicio.length; i++){

        let vetDDMMAAAA = vetDataInicio[i].split('/');  //retorna para vetDDMMAAAA um vetor [0]=dia, [1]=mês e [2]=ano
        let strDtInicioLactacao = vetDDMMAAAA[2] + '-' + vetDDMMAAAA[1] + '-' + vetDDMMAAAA[0] + "T00:00:00";
        let dtInicioLactacao = new Date(strDtInicioLactacao);

        if (dtInicioLactacao > dtInicioLactacaoPesq) {

            stringAnoLactacao += dtInicioLactacao.toLocaleDateString() + "<br>";
        }
    };

    for (let i = 0; i < vetLitrosPorDia.length; i++){
        let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i];
        producaoTotal.toFixed(0);

        if (
            (volumeMinimo == 0 || volumeMinimo < producaoTotal) &&
            (volumeMaximo == 0 || volumeMaximo > producaoTotal)
        ) {
            stringProducaoTotal += producaoTotal.toFixed(0) + "<br>";
        }
    }


    outSaida.innerHTML = stringRaca.slice(0, -2) + "<br>" + stringAnoLactacao + stringProducaoTotal;



})



//Aprimorar o filtro, deixando igual a tabela
// quando mostrar o nome da vaca podera mostrar qual é o id dessa vaca




//Filtro por “Ano de Início de Lactação”, em que o usuário pode digitar um determinado ano, e a listagem de vacas é atualizada, 
//mostrando apenas os animais com lactação iniciada a partir daquele ano.


//Filtro por “Volume Total Produzido”, em que o usuário pode digitar o valor mínimo, o valor máximo ou ambos,
//  e a listagem de vacas é atualizada, mostrando apenas os animais que apresentaram um total produzido dentro da faixa de valores indicada 
// (baseado no dado calculado de Total Produzido).