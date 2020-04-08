var guests = [];

$(document).ready(function () {

    $('#selectMes option')[new Date().getMonth()].selected = true;

    var jqxhr = $.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/sisa-hwgco/service/api/incoming_webhook/webhook0", function (data) {
        $(data).each(function (i) {
            var oItem = {
                DiaNascimento: `${JSON.stringify(data[i].HospedeDataNascimento)}`,
                Telefone: `${data[i].HospedeTelefone}`,
                ID: data[i]._id.$oid,
                Nome: `${data[i].HospedeNome}`
            }
            guests.push(oItem)
        });
    }).done(function () {
        $(guests).each(function (i) {
            var dateType1 = `${guests[i].DiaNascimento}`
            var dateType2 = dateType1.substring(25, 37)
            var dateType3 = new Date(parseInt(dateType2))
            //
            var diaNascimento = dateType3.getDate()
            var telefone = `${guests[i].Telefone}`
            var id = `${guests[i].ID}`
            var nome = `${guests[i].Nome}`
            $('#tableNomes').append(`<tr><td>${diaNascimento}</td><td>Hospede</td><td>${id}</td><td>${nome}</td><td>${telefone}</td></tr>`)
        });
    });

    $("#selectMes").on('change', function () {
        $('#tableNomes tbody').empty();
        $(guests).each(function (i) {
            var dateType1 = `${guests[i].DiaNascimento}`
            var dateType2 = dateType1.substring(25, 40)
            var dateType3 = new Date(parseInt(dateType2))
            //
            var diaNascimento = guests[i].DiaNascimento
            var telefone = `${guests[i].Telefone}`
            var id = `${guests[i].ID}`
            var nome = `${guests[i].Nome}`
            if (`${dateType3.getMonth()}` === $('#selectMes').find(":selected").val()) {
                $('#tableNomes').append(`<tr><td>${diaNascimento}</td><td>Hospede</td><td>${id}</td><td>${nome}</td><td>${telefone}</td></tr>`)
            }
        });
    });
});