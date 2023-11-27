(function() {
    var app = {
      launchApp: function() {
        window.location.replace("POCNFCAPP://");
        this.timer = setTimeout(this.openWebApp, 1000);
      },
  
      openWebApp: function() {
        window.location.replace("https://apps.apple.com/us/app/ultrasync/id1103085533");
      }
    };
  
    app.launchApp();
  })();