window.addEventListener('load', function () {
    const outRelatorioIdVaca = document.getElementById("outRelatorioIdVaca");
    const outRelatorioRaca = document.getElementById("outRelatorioRaca");
    const outProducaoTotal = document.getElementById("outProducaoTotal");
    const outRelatorioVolumeRacas = document.getElementById("outRelatorioVolumeRacas");

    let maiorNumero = -Number.MAX_VALUE
    let indice = 0;
    let stringRelatorio = "";

    for (let i = 1; i < vetIDAnimal.length; i++) { // esse for percorre todo vetor e ve qual é a vaca que mais produziu leite
        let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i]; // faz calculo do volume de produçao
        if (producaoTotal > maiorNumero) { // verifica de produçao =e maior que maior numero
            maiorNumero = producaoTotal; // maior numero assume producaoTotal
            indice = i; // indice assumi o i
        }
    }

    // Percorrer todas as raças
    for (let i = 0; i < vetRaca.length; i++) {
        let racaAtual = vetRaca[i].toUpperCase();
        let jaFoiProcessada = false;// Variável para verificar se essa raça já foi tratada antes

        for (let j = 0; j < i; j++) {
            if (vetRaca[j].toUpperCase() === racaAtual) {
                jaFoiProcessada = true;// Verifica se essa raça já foi processada antes
            }
        }

        if (jaFoiProcessada) { //se for true ele pula e vai pra proxima raça
            continue; // pula pra próxima raça
        }

        let maiorProducao = 0;
        let indiceMaior = -1;
        for (let k = 0; k < vetRaca.length; k++) { // esse for faz o calculo de produçao de leite
            if (vetRaca[k].toUpperCase() === racaAtual) {
                let producao = vetLitrosPorDia[k] * vetDiasLactacao[k];
                if (producao > maiorProducao) {
                    maiorProducao = producao;
                    indiceMaior = k;
                }
            }
        }
        stringRelatorio += "Raça: " + vetRaca[indiceMaior] +
            " | Total Produzido: " + maiorProducao.toFixed(1) + " litros<br>";
    }
    outRelatorioIdVaca.innerHTML = "ID: " + vetIDAnimal[indice];
    outRelatorioRaca.innerHTML = "Raça: " + vetRaca[indice];
    outProducaoTotal.innerHTML = "Produção Total: " + maiorNumero.toFixed(1) + " litros";
    outRelatorioVolumeRacas.innerHTML = stringRelatorio;
})