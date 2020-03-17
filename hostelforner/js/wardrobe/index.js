$(document).ready(function () {

    var wardrobe1 = [
        ['', 'Guilherme', 'Johnny', 'Rubão'],
        ['Larissa C.', 'Juliana', 'Ismael R.', 'Breno'],
        ['Bruno', 'Márcia', 'Neto', 'Criss'],
        ['Rick', 'Larissa', 'Mariana', 'Juliana Motty'],
        ['Filipe', 'Cesar', 'Fábio', 'Hadryel']
    ];

    var html_1 = ``;

    for(var i = 0; i < 5; i++){
        html_1 += `<tr>`;
        for(var j = 0; j < 4; j++){
            html_1 += `<td>${wardrobe1[i][j]}</td>`;
        };
        html_1 += `</tr>`;
    };

    $('#wardrobe1').append(html_1);

    //

    var wardrobe2 = [
        ['Edvaldo', 'Clovis'],
        ['Lígia', 'Sabrina'],
        ['Jéssica', 'Isabella'],
        ['', '']
    ];

    var html_2 = ``;

    for(var i = 0; i < 4; i++){
        html_2 += `<tr>`;
        for(var j = 0; j < 2; j++){
            html_2 += `<td>${wardrobe2[i][j]}</td>`;
        };
        html_2 += `</tr>`;
    };

    $('#wardrobe2').append(html_2);
});