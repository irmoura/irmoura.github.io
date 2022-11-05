class drone {
    constructor(bateria, altitude, velocidade) {
        this.bateria = bateria
        this.altitude = altitude
        this.velocidade = velocidade / 3.6//conversão de km/h => m/s
    }

    name() {
        var message = 'message from drone'
        return message
    }
}