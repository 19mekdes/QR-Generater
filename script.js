$(document).ready(function() {
  $('#generateBtn').click(function() {
      var url = $('#urlInput').val();
      var additionalInfo = $('#infoInput').val();
      
      if (url) {
          $('#qrcode').empty(); 

          
          var qrContent = "URL: " + url + "\n" + "Info: " + additionalInfo;

          $('#qrcode').qrcode({
              text: qrContent,
              width: 128,
              height: 128
          });


          $('#result').html("<p>QR Code generated successfully!</p>");
      } else {
          alert("Please enter a URL for additional information.");
      }
  });
});
