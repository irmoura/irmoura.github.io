$(document).ready(function () {

    var dados = [{diaSemana:"Segunda", descricao:"Rafael Neto Rubens Hadryel"}, 
                {diaSemana:"Terça", descricao:"Henrique Cris Márcia Fábio"},
                {diaSemana:"Quarta", descricao:"Larissa Guilherme Alessandra Cloves Cezar"},
                {diaSemana:"Quinta", descricao:"Filipe Sabrina Bruno Larissa Cavalcante"},
                {diaSemana:"Sexta", descricao:"Juliana Breno Mariana Isabella Jéssica Dulce"},
                {diaSemana:"Sábado", descricao:"Edgar Ismael Wallison Johnny"},
                {diaSemana:"Domingo", descricao:"NÃO USAR"}]

    $(dados).each(function (i) {
        var diaSemana_ = dados[i].diaSemana
        var descricao = dados[i].descricao
        $('#laundryTable').append(`<tr><td>${diaSemana_}</td><td>${descricao}</td></tr>`)
    });
});