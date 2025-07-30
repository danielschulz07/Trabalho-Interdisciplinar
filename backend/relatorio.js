const outRelatorio = document.getElementById("outRelatorio");
const btnCalcular = document.getElementById("btncalcular");
const btnRelatorio = document.getElementById("btnRelatorio");

var vetTotalProduzido = []; // Agora é global

btnCalcular.addEventListener("click", calcularTotalProduzido);
//essa parte é o calculo do total produzido de leite
function calcularTotalProduzido() {
    vetTotalProduzido = []; // zera e recalcula

    for (let i = 0; i < vetLitrosPorDia.length; i++) {
        let total = vetLitrosPorDia[i] * vetDiasLactacao[i];
        vetTotalProduzido.push(total);
    }
}
btnRelatorio.addEventListener("click", gerarRelatorio);
// essa parte é para gerar relatorio de uma raça específica de maior produtor de leite
function gerarRelatorio() {

    let maior = vetTotalProduzido[0];
    let indiceMaior = 0;
    for (let i = 1; i < vetTotalProduzido.length; i++) {
        if (vetTotalProduzido[i] > maior) {
            maior = vetTotalProduzido[i];
            indiceMaior = i;
        }
    }
    outRelatorio.innerHTML = "Raça: " + vetRaca[indiceMaior] +
        " | Total Produzido (litros): " + maior.toFixed(2) + "<br>";
}