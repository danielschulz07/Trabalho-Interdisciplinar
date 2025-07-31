const inBuscarRaca = document.getElementById("inBuscarRaca");
const inAnoInicioLactacao = document.getElementById("inAnoInicioLactacao");
const inVolumeMinimo = document.getElementById("inVolumeMinimo");
const inVolumeMaximo = document.getElementById("inVolumeMaximo");
const btFiltro = document.getElementById("btFiltro");
const outSaida = document.getElementById("outSaida");

const main = document.getElementById("main")
const tabela = document.createElement("table");
const cabecalho = document.createElement("tr");
let titulos = ['Raça', 'Ano de Início de Lactação', 'Volume Total Produzido'];
tabela.appendChild(cabecalho);


btFiltro.addEventListener('click', function () {

    let raca = inBuscarRaca.value;
    let stringDeOutPut = "";
    const dtInicioLactacaoPesq = new Date(inAnoInicioLactacao.value + "T00:00:00");
    let volumeMinimo = Number(inVolumeMinimo.value);
    let volumeMaximo = Number(inVolumeMaximo.value);


 /*   if (document.getElementById("minhaTabela")) {
    console.log("A tabela já está criada.");
} else {
    console.log("A tabela ainda não foi criada.");
    // Aqui você pode criar a tabela, se quiser





            for (let i = 0; i < titulos.length; i++) {
    const th = document.createElement('th');
    th.textContent = titulos[i];  //AQUI VAI PEGAR UM MINI VETOR DE TITULOS E IR COLOCANDO EM FORMA DE TH (COLUNA)
    cabecalho.appendChild(th);  // AQUI ADICIONA ESSES TITULOS NO CORPO DA TABELA, VAZENDO ISSO N PRECISA DE COLOCAR CADA TITULO DE FORMA MANUAL E REPETITIVA
    }
}
*/



    for (let i = 0; i < vetRaca.length; i++) {

        let vetDDMMAAAA = vetDataInicio[i].split('/');  //retorna para vetDDMMAAAA um vetor [0]=dia, [1]=mês e [2]=ano
        let strDtInicioLactacao = vetDDMMAAAA[2] + '-' + vetDDMMAAAA[1] + '-' + vetDDMMAAAA[0] + "T00:00:00";
        let dtInicioLactacao = new Date(strDtInicioLactacao);
        let producaoTotal = vetLitrosPorDia[i] * vetDiasLactacao[i];

        let flagAtendeFiltros = false; // flag iniciada como false

        if (raca != "") { // caso o campo raça esteja preenchido

            if (vetRaca[i].toUpperCase().includes(raca.toUpperCase())) { 

                if (inAnoInicioLactacao.value != "") { // se anoInicioLactaçao tiver preenchido ele entra no if

                    if (dtInicioLactacao > dtInicioLactacaoPesq) { // verificaçao da data digitada pelo usuario

                        if (inVolumeMinimo.value != "" || inVolumeMaximo.value != "") {

                            if ( //checa se os campus estao vazios, assim ve se apenas o campo minimo ou maximo estao preenchidos ou ambos, assim exibindo eles
                                (volumeMinimo < producaoTotal) &&
                                (volumeMaximo == 0 || volumeMaximo > producaoTotal)
                            ) {

                                flagAtendeFiltros = true;
                            }
                        } else { //tem ano lactação, mas não tem volume lactação está vazio
                            flagAtendeFiltros = true;
                        }
                    }
                } else { //não tem ano lactação está vazio
                    if (inVolumeMinimo.value != "" || inVolumeMaximo.value != "") { //se volume tiver preenchido

                        if ( //checa se os campus estao vazios, assim ve se apenas o campo minimo ou maximo estao preenchidos ou ambos, assim exibindo eles
                            (volumeMinimo < producaoTotal) &&
                            (volumeMaximo == 0 || volumeMaximo > producaoTotal)
                        ) {

                            flagAtendeFiltros = true;
                        }
                    } else { //não tem ano lactação, nem volume lactação está vazio
                        flagAtendeFiltros = true;
                    }
                }
            }
        } else { //se não tem raça
            if (inAnoInicioLactacao.value != "") {

                if (dtInicioLactacao > dtInicioLactacaoPesq) {

                    if (inVolumeMinimo.value != "" || inVolumeMaximo.value != "") {

                        if (
                            (volumeMinimo < producaoTotal) &&
                            (volumeMaximo == 0 || volumeMaximo > producaoTotal)
                        ) {

                            flagAtendeFiltros = true;
                        }
                    } else { //tem ano lactação, mas não tem volume lactação está vazio
                        flagAtendeFiltros = true;
                    }
                }
            } else { //não tem ano lactação está vazio
                if (inVolumeMinimo.value != "" || inVolumeMaximo.value != "") {

                    if (
                        (volumeMinimo < producaoTotal) &&
                        (volumeMaximo == 0 || volumeMaximo > producaoTotal)
                    ) {

                        flagAtendeFiltros = true;
                    }
                } else { //não tem ano lactação, nem volume lactação está vazio
                    flagAtendeFiltros = true;
                }
            }
        }

        if (flagAtendeFiltros == true) {

            stringDeOutPut += vetRaca[i] + "  -  " + dtInicioLactacao.toLocaleDateString() + "  -  " + producaoTotal.toFixed(0) + "<br>";

            /*

            if (document.getElementById("minhaTabela")) {
                console.log("A tabela já está criada.");
            } else {
                console.log("A tabela ainda não foi criada.");
                // Aqui você pode criar a tabela, se quiser


                for (let i = 0; i < vetRaca.length; i++) { //AQUI UM FOR QUE RODA TODA ESTRUTURA DA TABELA
                    const tr = document.createElement('tr'); // TR CRIA O CABEÇALHO

                    const tdRaca = document.createElement('td');
                    tdRaca.textContent = vetRaca[i];
                    tr.appendChild(tdRaca);

                    const tdAnoLactacao = document.createElement('td');
                    tdAnoLactacao.textContent = dtInicioLactacao.toLocaleDateString();
                    tr.appendChild(tdAnoLactacao);

                    const tdVolumeTotalProduzido = document.createElement('td');
                    tdVolumeTotalProduzido.textContent = producaoTotal.toFixed(1);
                    tr.appendChild(tdVolumeTotalProduzido);


                    tabela.appendChild(tr); // ADD O TR A TABELA
                }
            }




            outSaida.appendChild(tabela) // ADD A TABELA AO MAIN NO HTML
            */
        }


        outSaida.innerHTML = stringDeOutPut;
    }
})