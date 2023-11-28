(function() {
    var app = {
      launchApp: function() {
        //window.location.replace("POCNFCAPP://");
        this.timer = setTimeout(this.openWebApp, 10000);
      },
  
      openWebApp: function() {
        window.location.href = "https://apps.apple.com/us/app/ultrasync/id1103085533";
        //window.location.replace("https://apps.apple.com/us/app/ultrasync/id1103085533");
        //const iframe = document.getElementById("load_appstore");
        //iframe.setAttribute("src", 'https://itunes.apple.com/us/app/ultrasync/id1103085533');
        //iframe.setAttribute("style", 'display: block;');
        //iframe.src = 'https://itunes.apple.com/us/app/ultrasync/id1103085533';
        //iframe.style.display = "block";
      }
    };
  
    app.launchApp();
  })();