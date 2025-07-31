/*const outRelatorio = document.getElementById("outRelatorio");
const btCalcular = document.getElementById("btCalcular");
const btRelatorio = document.getElementById("btnRelatorio");
var vetTotalProduzido = []; // Agora é global


 
    <!--
    

AO INVES DE FAZER BOTAO PARA CALCULO E RELATORIO E SO FAZER UMA DIV ESCRITO "ESSA É NOSSA VACA CAMPEA EM PRODUÇAO DE LEITE", MOSTRANDO A PRODUCAO TOTAL E SUA RAÇA
USANDO O MESMO RECURSO QUE USEI PRA DEIXAR A TABELA CARREGADA APOS O CARREGAMENTO DA PAGINA, ASSIM N PRECISA DE BOTAO NENHUM E RESOLVE O PROBLEMA DADO


--> 



// N É NECESSARIO ESSA FUNCAO DE CALCULAR É SO APENAS JOGAR O CALCULO EM BAIXO DO FOR

btCalcular.addEventListener("click", calcularTotalProduzido);
//essa parte é o calculo do total produzido de leite
function calcularTotalProduzido() {
    vetTotalProduzido = []; // zera e recalcula

    for (let i = 0; i < vetLitrosPorDia.length; i++) {
        let total = vetLitrosPorDia[i] * vetDiasLactacao[i];
        vetTotalProduzido.push(total);
    }
}
btRelatorio.addEventListener("click", gerarRelatorio);
// essa parte é para gerar relatorio de uma raça específica de maior produtor de leite
function gerarRelatorio() {

    let maior = vetTotalProduzido[0]; // E SO USAR -Number.MAX_VALIE ele vai pegar o menor numero possivel
    let indiceMaior = 0;
    for (let i = 1; i < vetTotalProduzido.length; i++) {
        if (vetTotalProduzido[i] > maior) {
            maior = vetTotalProduzido[i]; // declarar as variaveis de forma mais clara
            indiceMaior = i;
        }
    }
    outRelatorio.innerHTML = "Raça: " + vetRaca[indiceMaior] +
        " | Total Produzido (litros): " + maior.toFixed(2) + "<br>";
}
*/
