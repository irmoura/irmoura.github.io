var wardrobe1 = [];
var wardrobe2 = [];
var html = ``;
var count = 1;

$(document).ready(function () {
    var jqxhr = $.get( "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/sisa-hwgco/service/api/incoming_webhook/webhook0", function(data) {
        $(data).each(function (i) {
            var haveWardrobe = data[i].HospedeTemArmario;
            if(haveWardrobe){
                if(data[i].HospedeArmario < 21){
                    var oItem = {
                        Nome: data[i].HospedeNome,
                        Armario: `${data[i].HospedeArmario}`
                    }
                    wardrobe1.push(oItem)
                }else{
                    var oItem2 = {
                        Nome: data[i].HospedeNome,
                        Armario: `${data[i].HospedeArmario}`
                    }
                    wardrobe2.push(oItem2)
                }
            }
        });
    }).done(function() {
        //
        for(var i = 0; i < 5; i++){
            html += `<tr>`;
            for(var j = 0; j < 4; j++){
                var index = wardrobe1.findIndex(a => a.Armario == `${count}`);
                if(index === -1){
                    html += `<td></td>`;
                }else{
                    var nome = wardrobe1[index].Nome
                    html += `<td>${nome}</td>`;
                }
                count++;
            };
            html += `</tr>`;
        };
        $('#wardrobe1').append(html);
        //
        html = ``;
        //
        for(var i = 0; i < 4; i++){
            html += `<tr>`;
            for(var j = 0; j < 2; j++){
                var index = wardrobe2.findIndex(a => a.Armario == `${count}`);
                if(index === -1){
                    html += `<td></td>`;
                }else{
                    var nome = wardrobe2[index].Nome
                    html += `<td>${nome}</td>`;
                }
                count++;
            };
            html += `</tr>`;
        };
        $('#wardrobe2').append(html);
    });
});