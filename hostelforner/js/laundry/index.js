$(document).ready(function () {

    var dados = [{diaSemana:"Segunda", descricao:"Rubens Neto Rafael"}, 
                {diaSemana:"Terça", descricao:"Henrique Cris Márcia"},
                {diaSemana:"Quarta", descricao:"Larissa Guilherme Alessandra"},
                {diaSemana:"Quinta", descricao:"Hadryel Filipe Sabrina"},
                {diaSemana:"Sexta", descricao:"Edgar Breno Mariana"},
                {diaSemana:"Sábado", descricao:"Ismael Wallison Johnny"},
                {diaSemana:"Domingo", descricao:"NÃO USAR"}]

    $(dados).each(function (i) {
        var diaSemana_ = dados[i].diaSemana
        var descricao = dados[i].descricao
        $('#laundryTable').append(`<tr><td>${diaSemana_}</td><td>${descricao}</td></tr>`)
    });
});