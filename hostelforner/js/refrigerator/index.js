$(document).ready(function () {

    var html1 = ``;
    var html2 = ``;
    var html3 = ``;

    var refrigerator1 = [
        ['Johnny', 'Cris'],
        ['Henrique', 'Márcia'],
        ['Larissa', 'Mariana']
    ];

    var refrigerator2 = [
        ['Guilherme', 'Cesar'],
        ['Rubens', 'Neto'],
        ['Hadryel', 'Filipe'],
        ['Edgar', 'Bruno']
    ];

    var refrigerator3 = [
        ['Juliana Abreu', 'Edvaldo'],
        ['Fábio', 'Ismael'],
        ['Juliana Dantas', 'Sabrina'],
        ['Clovis', 'Larissa Cavalcanti'],
        ['Isabella', 'Jéssica Durce']
    ];

    for(var i = 0; i < 3; i++){
        html1 += `<tr>`;
        for(var j = 0; j < 2; j++){
            html1 += `<td>${refrigerator1[i][j]}</td>`;
        };
        html1 += `</tr>`;
    };

    $('#refrigerator1').append(html1);

    //

    for(var i = 0; i < 4; i++){
        html2 += `<tr>`;
        for(var j = 0; j < 2; j++){
            html2 += `<td>${refrigerator2[i][j]}</td>`;
        };
        html2 += `</tr>`;
    };

    $('#refrigerator2').append(html2);

    //

    for(var i = 0; i < 5; i++){
        html3 += `<tr>`;
        for(var j = 0; j < 2; j++){
            html3 += `<td>${refrigerator3[i][j]}</td>`;
        };
        html3 += `</tr>`;
    };

    $('#refrigerator3').append(html3);

    //
});