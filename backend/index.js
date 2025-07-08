const btFiltro = document.getElementById("btFiltro");
const inBuscarNome = document.getElementById("inBuscarNome");
const outSaida = document.getElementById("outSaida");

btFiltro.addEventListener('click', function () {
    let raca = inBuscarNome.value;
    let stringRaca = "";

    for (let i = 0; i < vetRaca.length; i++) {
        if(vetRaca[i].toUpperCase().includes(raca.toUpperCase())) {
            stringRaca += vetRaca[i] + ", ";
        }
    }
    outSaida.innerHTML = stringRaca.slice(0, -2);
})



//Aprimorar o filtro, deixando igual a tabela
// quando mostrar o nome da vaca podera mostrar qual é o id dessa vaca






//Filtro por “Raça”, em que o usuário pode digitar uma raça, e a listagem de vacas é atualizada, mostrando apenas os animais da raça informada pelo usuário.
//Filtro por “Ano de Início de Lactação”, em que o usuário pode digitar um determinado ano, e a listagem de vacas é atualizada, mostrando apenas os animais com lactação iniciada a partir daquele ano.
//Filtro por “Volume Total Produzido”, em que o usuário pode digitar o valor mínimo, o valor máximo ou ambos, e a listagem de vacas é atualizada, mostrando apenas os animais que apresentaram um total produzido dentro da faixa de valores indicada (baseado no dado calculado de Total Produzido).
//Um relatório mostrando a vaca com maior volume de leite produzido (baseado no dado calculado de Total Produzido) de uma raça informada pelo usuário.



//Desafio: Tente desenvolver um relatório que apresente a vaca com maior volume de leite produzido (baseado no dado calculado de Total Produzido) de cada raça.





const btMostrarTabela = document.getElementById("btMostrarTabela");

btMostrarTabela.addEventListener('click', function () {



    if (document.querySelector('table')) {
        alert('tabela ja criada')
    } else {



        //vou ter que criar um verificação para n criar varias tabelas

        const tabela = document.createElement('table');
        const cabecalho = document.createElement('tr');
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
            const tr = document.createElement('tr');

            const tdIDRaca = document.createElement('td');
            tdIDRaca.textContent = vetIDAnimal[i];
            tr.appendChild(tdIDRaca);

            const tdRaca = document.createElement('td');
            tdRaca.textContent = vetRaca[i];
            tr.appendChild(tdRaca);

            const tdProducaoMedia = document.createElement('td');
            tdProducaoMedia.textContent = vetLitrosPorDia[i];
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