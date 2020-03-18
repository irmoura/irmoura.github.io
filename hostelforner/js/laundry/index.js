var usuariosSegunda = [];
var usuariosTerca = [];
var usuariosQuarta = [];
var usuariosQuinta = [];
var usuariosSexta = [];
var usuariosSabado = [];

$(document).ready(function () {
    var jqxhr = $.get( "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/sisa-hwgco/service/api/incoming_webhook/webhook0", function(data) {
        $(data).each(function (i) {
            var laundryDay = data[i].HospedeLaundryDay;
            if(laundryDay === (`segunda`)){
                usuariosSegunda.push(`${data[i].HospedeNome}`);
            }
            if(laundryDay === (`terça`)){
                usuariosTerca.push(`${data[i].HospedeNome}`);
            }
            if(laundryDay === (`quarta`)){
                usuariosQuarta.push(`${data[i].HospedeNome}`);
            }
            if(laundryDay === (`quinta`)){
                usuariosQuinta.push(`${data[i].HospedeNome}`);
            }
            if(laundryDay === (`sexta`)){
                usuariosSexta.push(`${data[i].HospedeNome}`);
            }
            if(laundryDay === (`sábado`)){
                usuariosSabado.push(`${data[i].HospedeNome}`);
            }
        });
    }).done(function() {
        var html;
        for(var i = 0; i < 7; i++){
        if(i == 0){//segunda
            html = ``;
            html += `<tr>`;
            html += `<td>Segunda</td>`;
            html += `<td>`;
            $(usuariosSegunda).each(function (i) {
                html += `${usuariosSegunda[i]} - `;
            });
            html += `</td>`;
            html += `</tr>`;
            $('#laundryTable').append(html)
        }if(i == 1){//terça
            html = ``;
            html += `<tr>`;
            html += `<td>Terça</td>`;
            html += `<td>`;
            $(usuariosTerca).each(function (i) {
                html += `${usuariosTerca[i]} - `;
            });
            html += `</td>`;
            html += `</tr>`;
            $('#laundryTable').append(html)
        }if(i == 2){//quarta
            html = ``;
            html += `<tr>`;
            html += `<td>Quarta</td>`;
            html += `<td>`;
            $(usuariosQuarta).each(function (i) {
                html += `${usuariosQuarta[i]} - `;
            });
            html += `</td>`;
            html += `</tr>`;
            $('#laundryTable').append(html)
        }if(i == 3){//quinta
            html = ``;
            html += `<tr>`;
            html += `<td>Quinta</td>`;
            html += `<td>`;
            $(usuariosQuinta).each(function (i) {
                html += `${usuariosQuinta[i]} - `;
            });
            html += `</td>`;
            html += `</tr>`;
            $('#laundryTable').append(html)
        }if(i == 4){//sexta
            html = ``;
            html += `<tr>`;
            html += `<td>Sexta</td>`;
            html += `<td>`;
            $(usuariosSexta).each(function (i) {
                html += `${usuariosSexta[i]} - `;
            });
            html += `</td>`;
            html += `</tr>`;
            $('#laundryTable').append(html)
        }if(i == 5){//sábado
            html = ``;
            html += `<tr>`;
            html += `<td>Sábado</td>`;
            html += `<td>`;
            $(usuariosSabado).each(function (i) {
                html += `${usuariosSabado[i]} - `;
            });
            html += `</td>`;
            html += `</tr>`;
            $('#laundryTable').append(html)
        }
        if(i == 6){//domingo
            $('#laundryTable').append(`<tr><td>Domingo</td><td>NÃO USAR</td></tr>`)
            }
        }
    });
});