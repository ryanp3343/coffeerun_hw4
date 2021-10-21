(function (window) {
    'use strict';
     var App = window.App || {};
    
      var FirebaseConfig = {
        apiKey: "AIzaSyC4pg4eYHj8VBCoXH-ilwKuEtpXxo3voPw",
        authDomain: "coffeerun-9a529.firebaseapp.com",
        projectId: "coffeerun-9a529",
        storageBucket: "coffeerun-9a529.appspot.com",
        messagingSenderId: "571336410162",
        appId: "1:571336410162:web:47d76ae1c8e0935acba82b",
        measurementId: "G-W0TGBYN3V7"
      };

      App.FirebaseConfig = FirebaseConfig
      firebase.initializeApp(App.FirebaseConfig);
      window.App = App;
  
  })(window);