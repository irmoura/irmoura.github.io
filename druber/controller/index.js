$(function () {

    var progresso = 0
    var viagemIniciada = false
    var origem = ''
    var distanciaPercorrida = 0
    var distanciaRestante = 0
    var timeCount = 0

    var estabelecimentos = new Array(
        new estabelecimento("Sam's Club", 3),
        new estabelecimento('Farmácia', 2.5),
        new estabelecimento('Padaria', 2),
        new estabelecimento('Renner', 1)
    )

    var drone_ = new drone(100, 0, 60)

    var estabelecimento_ = null

    $('#solicitar').on('click', function () {
        // alert(`${getComputedStyle(document.documentElement)
        //     .getPropertyValue('--progress')}`)
        // document.documentElement.style.setProperty('--progress', '100')

        var origemSelecionada = false
        $('img').each(function () {
            if ($(this).css('border') == '2px solid rgb(255, 0, 0)') {
                origem = $(this).attr('id')
                switch (origem) {
                    case 'mercado':
                        estabelecimento_ = estabelecimentos[0]
                        break;
                    case 'farmacia':
                        estabelecimento_ = estabelecimentos[1]
                        break;
                    case 'padaria':
                        estabelecimento_ = estabelecimentos[2]
                        break;
                    case 'renner':
                        estabelecimento_ = estabelecimentos[3]
                        break;
                }
                origemSelecionada = true
            }
        })
        if (origemSelecionada) {
            //code here
            // alert(`${origem}`)
            console.log(`${estabelecimento_.nome}`)
            viagemIniciada = true
            progresso = 0
            drone_.bateria = 100//resetando a bateria do drone
            $('#distancia').text(`Distância: ${(estabelecimento_.distancia / 1000)}Km`)
            $('#altitude').text(`Altitude: ${drone_.altitude}m`)
            $('#velocidade').text(`Velocidade: ${Math.round(drone_.velocidade * 3.6)}km/h`)
        } else {
            alert(`Selecione uma origem`)
        }
    })

    $('#cancelar').on('click', function () {
        var origemSelecionada = false
        $('img').each(function () {
            if ($(this).css('border') == '2px solid rgb(255, 0, 0)') {
                origemSelecionada = true
            }
        })
        if (origemSelecionada) {
            if (confirm(`Deseja mesmo cancelar?`)) {
                $('img').each(function () {
                    $(this).css('border', 'none')
                })
            }
        }
    })

    function simulacao() {
        if (distanciaPercorrida <= estabelecimento_.distancia) {
            if (drone_.bateria > 15) {
                distanciaPercorrida += drone_.velocidade
                distanciaRestante = ((estabelecimento_.distancia) - distanciaPercorrida) / 1000
                $('#distancia').text(`Distância: ${parseFloat(`${distanciaRestante}`).toFixed(2).replace(".", ",")}Km`)
                var porcentagem = (Math.round(distanciaPercorrida) / estabelecimento_.distancia) * 100
                document.documentElement.style.setProperty('--travel-progress', porcentagem)
                console.log(`${porcentagem}`)
            }
        } else {
            viagemIniciada = false
            distanciaPercorrida = 0
            document.documentElement.style.setProperty('--travel-progress', 0)
            document.documentElement.style.setProperty('--battery-level', 0)
            $('#altitude').text(`Altitude:`)
            $('#bateria').text(`Bateria:`)
            $('#velocidade').text(`Velocidade:`)
            $('#distancia').text(`Distância:`)
        }
        if (drone_.bateria >= 0) {
            document.documentElement.style.setProperty('--battery-level', drone_.bateria)
            $('#bateria').text(`Bateria: ${drone_.bateria}%`)
            if (timeCount == 45) {
                drone_.bateria--
                timeCount = 0
            }
        }
        if (drone_.bateria <= 15) {
            $('#status').text(`Buscando ponto para troca de bateria...`)
        }
        if (!viagemIniciada) {
            $('#bateria').text(`Bateria:`)
            document.documentElement.style.setProperty('--battery-level', 0)
            $('#status').text(`Status`)
        }
    }

    setInterval(function () {
        if (viagemIniciada) {
            timeCount++
            simulacao()
        }
    }, 1000)

    //eventos acionados ao clicar nas imagens

    $('#mercado').on('click', function () {
        removeBorders()
        $(this).css('border', "solid 2px red")
    })

    $('#farmacia').on('click', function () {
        removeBorders()
        $(this).css('border', "solid 2px red")
    })

    $('#padaria').on('click', function () {
        removeBorders()
        $(this).css('border', "solid 2px red")
    })

    $('#renner').on('click', function () {
        removeBorders()
        $(this).css('border', "solid 2px red")
    })

    function removeBorders() {
        $('img').each(function () {
            $(this).css('border', "none")
        })
    }

    //eventos acionados ao passar o mouse

    $("#mercado").on('mouseover', function () {
        $(this).attr('title', `Distância ${(estabelecimentos[0].distancia / 1000)}Km`)
    })

    $("#farmacia").on('mouseover', function () {
        $(this).attr('title', `Distância ${(estabelecimentos[1].distancia / 1000)}Km`)
    })

    $("#padaria").on('mouseover', function () {
        $(this).attr('title', `Distância ${(estabelecimentos[2].distancia / 1000)}Km`)
    })

    $("#renner").on('mouseover', function () {
        $(this).attr('title', `Distância ${(estabelecimentos[3].distancia / 1000)}Km`)
    })
})