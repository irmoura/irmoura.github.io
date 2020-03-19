var refrigerator1 = [];
var refrigerator2 = [];
var refrigerator3 = [];
var html = ``;
var count = 1;

$(document).ready(function () {
    var jqxhr = $.get( "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/sisa-hwgco/service/api/incoming_webhook/webhook0", function(data) {
        $(data).each(function (i) {
            var haveRefrigerator = data[i].HospedeTemGeladeira;
            if(haveRefrigerator){
                if(data[i].HospedeGeladeira < 7){
                    var oItem1 = {
                        Nome: data[i].HospedeNome,
                        Lugar: `${data[i].HospedeGeladeira}`
                    }
                    refrigerator1.push(oItem1)
                }
                if(data[i].HospedeGeladeira < 15){
                    var oItem2 = {
                        Nome: data[i].HospedeNome,
                        Lugar: `${data[i].HospedeGeladeira}`
                    }
                    refrigerator2.push(oItem2)
                }else{
                    var oItem3 = {
                        Nome: data[i].HospedeNome,
                        Lugar: `${data[i].HospedeGeladeira}`
                    }
                    refrigerator3.push(oItem3)
                }
            }
        });
    }).done(function() {
        //
        for(var i = 0; i < 3; i++){
            html += `<tr>`;
            for(var j = 0; j < 2; j++){
                var index = refrigerator1.findIndex(a => a.Lugar == `${count}`);
                if(index === -1){
                    html += `<td></td>`;
                }else{
                    var nome = refrigerator1[index].Nome
                    html += `<td>${nome}</td>`;
                }
                count++;
            };
            html += `</tr>`;
        };
        $('#refrigerator1').append(html);
        //
        html = ``;
        //
        for(var i = 0; i < 4; i++){
            html += `<tr>`;
            for(var j = 0; j < 2; j++){
                var index = refrigerator2.findIndex(a => a.Lugar == `${count}`);
                if(index === -1){
                    html += `<td></td>`;
                }else{
                    var nome = refrigerator2[index].Nome
                    html += `<td>${nome}</td>`;
                }
                count++;
            };
            html += `</tr>`;
        };
        $('#refrigerator2').append(html);
        //
        html = ``;
        //
        for(var i = 0; i < 5; i++){
            html += `<tr>`;
            for(var j = 0; j < 2; j++){
                var index = refrigerator3.findIndex(a => a.Lugar == `${count}`);
                if(index === -1){
                    html += `<td></td>`;
                }else{
                    var nome = refrigerator3[index].Nome
                    html += `<td>${nome}</td>`;
                }
                count++;
            };
            html += `</tr>`;
        };
        $('#refrigerator3').append(html);
    });
});