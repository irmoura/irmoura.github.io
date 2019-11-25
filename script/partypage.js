// Set the date we're counting down to
var countDownDate = new Date("Dec 21, 2019 09:35:00").getTime();
                
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
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);