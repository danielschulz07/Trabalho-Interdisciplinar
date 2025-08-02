const inBuscarRaca = document.getElementById("inBuscarRaca");
const inAnoInicioLactacao = document.getElementById("inAnoInicioLactacao");
const inVolumeMinimo = document.getElementById("inVolumeMinimo");
const inVolumeMaximo = document.getElementById("inVolumeMaximo");
const btFiltro = document.getElementById("btFiltro");
const outSaida = document.getElementById("outSaida");

btFiltro.addEventListener('click', function () {

    let raca = inBuscarRaca.value;
    let stringDeOutPut = "";
    const dtInicioLactacaoPesq = new Date(inAnoInicioLactacao.value + "T00:00:00");
    let volumeMinimo = Number(inVolumeMinimo.value);
    let volumeMaximo = Number(inVolumeMaximo.value);

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
            stringDeOutPut += "Raça: " + vetRaca[i] + "  -  " + "Começo de Lactação: " + dtInicioLactacao.toLocaleDateString() + 
            "  -  " + "Volume de Leite Produzido: " + producaoTotal.toFixed(1) + "L" + "<br>";
        }  
      outSaida.innerHTML = stringDeOutPut
    }
})