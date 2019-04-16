// This is a JavaScript file
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Sem conexão por favor conectar a uma rede';
    states[Connection.NONE]     = 'Sem conexão por favor conectar a uma rede';

  navigator.notification.beep(3);
  navigator.vibrate(6000);

    alert(states[networkState]);
  }

  $(document).on('click','#btnlocal',function(){

    navigator.notification.beep(1);

      function abrirmapa(position){
        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

          var map = L.mapquest.map('map', {
            center: [position.coords.latitude, position.coords.longitude],
            layers: L.mapquest.tileLayer('map'),
            zoom: 15
          });

          map.addControl(L.mapquest.control());
      }     
      navigator.geolocation.getCurrentPosition(abrirmapa);
    
  });
