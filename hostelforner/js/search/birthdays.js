var guests = [];

$(document).ready(function () {
    var jqxhr = $.get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/sisa-hwgco/service/api/incoming_webhook/webhook0", function (data) {
        $(data).each(function (i) {
            var oItem = {
                DiaNascimento: data[i].HospedeDataNascimento,
                Telefone: `${data[i].HospedeTelefone}`,
                ID: data[i]._id.$oid,
                Nome: `${data[i].HospedeNome}`
            }
            guests.push(oItem)
        });
    }).done(function () {
        $(guests).each(function (i) {
            var diaNascimento = `${guests[i].DiaNascimento}`
            var telefone = `${guests[i].Telefone}`
            var id = `${guests[i].ID}`
            var nome = `${guests[i].Nome}`
            $('#tableNomes').append(`<tr><td>${diaNascimento}</td><td>Hospede</td><td>${id}</td><td>${nome}</td><td>${telefone}</td></tr>`)
        });
    });
});