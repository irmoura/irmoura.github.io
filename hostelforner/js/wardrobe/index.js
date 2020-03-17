$(document).ready(function () {

    var wardrobe1 = [
        ['', 'Guilherme', '', 'Rubens'],
        ['Alessandra', 'Sabrina', 'Ismael', 'Breno'],
        ['Bruno', 'Márcia', 'Neto', 'Criss'],
        ['Henrique', 'Larissa', 'Mariana', 'Juliana'],
        ['Filipe', '', 'Fábio', 'Hadryel']
    ];

    var html_ = ``;

    for(var i = 0; i < 5; i++){
        html_ += `<tr>`;
        for(var j = 0; j < 4; j++){
            html_ += `<td>${wardrobe1[i][j]}</td>`;
        };
        html_ += `</tr>`;
    };

    $('#wardrobeTable').append(html_);
});