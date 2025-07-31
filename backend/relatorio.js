window.addEventListener('load', function () {
    const outRelatorio = document.getElementById("outRelatorio");
    let maior = -Number.MAX_VALUE
    let indiceMaior = 0;

    for (let i = 1; i < vetIDAnimal.length; i++) {
        let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i];

        if (producaoTotal > maior) {
            maior = producaoTotal; // declarar as variaveis de forma mais clara
            indiceMaior = i;
        }
    }
    outRelatorio.innerHTML = "Raça: " + vetRaca[indiceMaior] +
        " | Total Produzido (litros): " + maior.toFixed(2) + "<br>";

    for (let i = 0; i < vetRaca.length; i++) {
        
        
        
    }















})





//Desafio: Tente desenvolver um relatório que apresente a vaca com maior volume de leite produzido (baseado no dado calculado de Total Produzido) de cada raça.


