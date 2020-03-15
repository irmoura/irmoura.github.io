//Mensagem de despedida
var textoDespedida = `Se você está vendo esta mensagem. Ou ainda não atualizei a página ou algo aconteceu.
Se tiver acontecido algo. Agradeço a vida que tive e amo muito minha família.`;

//Previsão chegada em Fortaleza
var dataChegadaFortaleza = "Dec 21, 2019 09:35:00";//Dec 21, 2019 09:35:00

//Previsão chegada em São Paulo
var dataChegadaSaoPaulo = "Jan 1, 2020 04:45:00";

//chegada ao destino Fortaleza
var chegueiaFortaleza = true;

//chegada ao destino São Paulo
var chegueiaSaoPaulo = true;

// Set the date we're counting down to
var countDownDate = new Date(dataChegadaFortaleza).getTime();
                
// Update the count down every 1 second
var x = setInterval(function() {
        
// Get today's date and time
var now = new Date().getTime();
        
// Find the distance between now and the count down date
var distance = countDownDate - now;
        
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
//
var r1 = Math.floor((Math.random() * 255) + 0);
var r2 = Math.floor((Math.random() * 255) + 0);
var r3 = Math.floor((Math.random() * 255) + 0);
//
$("#b1").css("background-color","rgb(" + r1 + "," + r2 + "," + r3 + ")");
//
$("#ano").text((new Date).getFullYear());
//
// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);    
    if(chegueiaFortaleza === false){
        document.getElementById("demo").innerHTML = textoDespedida;
        document.getElementById("demo2").innerHTML = `\u{2721} 30/12/1989  \u{0271D} 21/12/2019`;
    }else{
        // document.getElementById("demo").innerHTML = `${distance}`;
        // document.getElementById("demo2").innerHTML = `Breve em São Paulo-SP`;
        //
        //Previsão chegada em Fortaleza
        var dataChegadaFortaleza_ = "Dec 19, 2019 10:00:00";//Dec 21, 2019 09:35:00

        //Previsão chegada em São Paulo
        var dataChegadaSaoPaulo_ = "Jan 01, 2020 04:45:00";

        //chegada ao destino Fortaleza
        var chegueiaFortaleza_ = true;

        //chegada ao destino São Paulo
        var chegueiaSaoPaulo_ = true;

        // Set the date we're counting down to
        var countDownDate_ = new Date(dataChegadaSaoPaulo_).getTime();
                
        // Update the count down every 1 second
        var x_ = setInterval(function() {
        
        // Get today's date and time
        var now_ = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance_ = countDownDate_ - now_;
        
        // Time calculations for days, hours, minutes and seconds
        var days_ = Math.floor(distance_ / (1000 * 60 * 60 * 24));
        var hours_ = Math.floor((distance_ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes_ = Math.floor((distance_ % (1000 * 60 * 60)) / (1000 * 60));
        var seconds_ = Math.floor((distance_ % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days_ + "d " + hours_ + "h "
        + minutes_ + "m " + seconds_ + "s ";
        //
        document.getElementById("demo2").innerHTML = `Breve em São Paulo-SP`;
        //
        var r1_ = Math.floor((Math.random() * 255) + 0);
        var r2_ = Math.floor((Math.random() * 255) + 0);
        var r3_ = Math.floor((Math.random() * 255) + 0);
        //
        $("#b1").css("background-color","rgb(" + r1_ + "," + r2_ + "," + r3_ + ")");
        //
        $("#ano").text((new Date).getFullYear());
        //
        // If the count down is finished, write some text
        if (distance_ < 0) {
        clearInterval(x);    
        if(chegueiaSaoPaulo_ === false){
            document.getElementById("demo").innerHTML = textoDespedida;
            document.getElementById("demo2").innerHTML = `\u{2721} 30/12/1989  \u{0271D} 21/12/2019`;
        }else{
            document.getElementById("demo").innerHTML = `Happy New Year !!!`;
            document.getElementById("demo2").innerHTML = ``;   
        }
    }
}, 1000);
        //
    }
    }
}, 1000);
