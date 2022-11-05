$(function () {

    var bateria = 100
    var progresso = 0
    var viagemIniciada = false
    var origem = ''

    var mercado = new estabelecimento("Sam's Club", 20)
    var farmacia = new estabelecimento('Farmácia', 30)
    var padaria = new estabelecimento('Padaria', 40)
    var renner = new estabelecimento('Renner', 50)

    var drone_ = new drone(100, 0, 50)

    $('#solicitar').on('click', function () {
        // alert(`${getComputedStyle(document.documentElement)
        //     .getPropertyValue('--progress')}`)
        // document.documentElement.style.setProperty('--progress', '100')

        viagemIniciada = true
        bateria = 100
        progresso = 0
        $('#altitude').text(`Altitude: 30m`)
        $('#velocidade').text(`Velocidade: 60km/h`)

        // $('img').each(function () {
        //     if ($(this).css('border') == '2px solid rgb(255, 0, 0)') {
        //         origem = $(this).attr('id')
        //         console.log(origem)
        //     }
        // })
    })

    $('#mercado').on('click', function () {
        $(this).css('border', "solid 2px red")
        $('#farmacia').css('border', "none")
        $('#padaria').css('border', "none")
        $('#renner').css('border', "none")
    })

    $('#farmacia').on('click', function () {
        $(this).css('border', "solid 2px red")
        $('#mercado').css('border', "none")
        $('#padaria').css('border', "none")
        $('#renner').css('border', "none")
    })

    $('#padaria').on('click', function () {
        $(this).css('border', "solid 2px red")
        $('#mercado').css('border', "none")
        $('#farmacia').css('border', "none")
        $('#renner').css('border', "none")
    })

    $('#renner').on('click', function () {
        $(this).css('border', "solid 2px red")
        $('#mercado').css('border', "none")
        $('#farmacia').css('border', "none")
        $('#padaria').css('border', "none")
    })

    function simulacao() {
        if (progresso <= 100) {
            if (bateria > 15) {
                document.documentElement.style.setProperty('--travel-progress', progresso)
                progresso += 2.5
            }
        } else {
            viagemIniciada = false
            document.documentElement.style.setProperty('--travel-progress', 0)
            document.documentElement.style.setProperty('--battery-level', 0)
            $('#altitude').text(`Altitude:`)
            $('#bateria').text(`Bateria:`)
            $('#velocidade').text(`Velocidade:`)
        }
        if (bateria >= 0) {
            document.documentElement.style.setProperty('--battery-level', bateria)
            $('#bateria').text(`Bateria: ${bateria}%`)
            bateria -= 5
        }
        if (bateria <= 15) {
            $('#status').text(`Buscando ponto para troca de drone...`)
        }
        if (!viagemIniciada) {
            $('#bateria').text(`Bateria:`)
            document.documentElement.style.setProperty('--battery-level', 0)
            $('#status').text(`Status`)
        }
    }

    setInterval(function () {
        if (viagemIniciada) {
            simulacao()
        }
    }, 1000)
})