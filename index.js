(function() {
    var app = {
      launchApp: function() {
        if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
          window.location.replace("https://dp.ultra-sync.com/ngms");
          this.timer = setTimeout(this.openWebApp, 25);
        }
        if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
          window.location.replace("com.aritech.ngms://main/ngms/");
          this.timer = setTimeout(this.openWebApp, 25);
        }
      },
  
      openWebApp: function() {
        if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
          window.location.href = "https://play.google.com/store/apps/details?id=com.aritech.ngms";
        }
        if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
          window.location.href = "https://apps.apple.com/us/app/ultrasync-site-manager/id6504744039";
        }
        
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