// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.get( "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/sisa-hwgco/service/api/incoming_webhook/webhook0", function(data) {
    $(data).each(function (i) {
        $('#guestTable').append(`<tr><td>${data[i].HospedeNome}</td></tr>`)
    });
  })
    .done(function() {
    //   alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
    //   alert( "finished" );
    });
   
  // Perform other work here ...
   
  // Set another completion function for the request above
  jqxhr.always(function() {
    // alert( "second finished" );
  });