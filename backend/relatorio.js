//window.addEventListener('load', function () {


const botao = document.getElementById("botao");
const outRelatorio = document.getElementById("outRelatorio");


botao.addEventListener('click', function () {


    let maiorNumero = -Number.MAX_VALUE
    let maiorNumero2 = -Number.MAX_VALUE
    let indice = 0;
    let stringRelatorioVolume = "";
    let stringRelatorioVolume2 = "";
    let stringRelatorioVolume3 = "";
    let stringRelatorioVolume4 = "";

    for (let i = 1; i < vetIDAnimal.length; i++) {
        let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i];

        if (producaoTotal > maiorNumero) {
            maiorNumero = producaoTotal; // declarar as variaveis de forma mais clara
            indice = i;
        }
    }
    //outRelatorio.innerHTML = "Raça: " + vetRaca[indice] +
       // " | Total Produzido (litros): " + maiorNumero.toFixed(2) + "<br>";



    for (let i = 0; i < vetRaca.length; i++) {

        if (vetRaca[i].toUpperCase().includes("gir".toUpperCase())) {
            let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i];
            

            if (producaoTotal > maiorNumero2) {
                maiorNumero2 = producaoTotal;
                indice = i;   
            }
            stringRelatorioVolume = vetIDAnimal[indice] + vetRaca[i] + maiorNumero2.toFixed(1) + "<br>"
        }
        

    
    }










    outRelatorio.innerHTML = stringRelatorioVolume + "<br>" + stringRelatorioVolume2 + "<br>" + stringRelatorioVolume3 + "<br>" + stringRelatorioVolume4;


    //})
})




//Desafio: Tente desenvolver um relatório que apresente a vaca com maior volume de leite produzido (baseado no dado calculado de Total Produzido) de cada raça.


