const inBuscarRaca = document.getElementById("inBuscarRaca");
const inAnoInicioLactacao = document.getElementById("inAnoInicioLactacao");
const inVolumeMinimo = document.getElementById("inVolumeMinimo");
const inVolumeMaximo = document.getElementById("inVolumeMaximo");
const btFiltro = document.getElementById("btFiltro");
const outSaida = document.getElementById("outSaida");

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