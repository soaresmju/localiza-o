// This is a JavaScript file

window.onload = function(){
  $(document).on('click','#btnlocal',function(){

      var onSuccess = function(position){
        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

          var map = L.mapquest.map('map', {
            center: [position.coords.latitude, position.coords.longitude],
            layers: L.mapquest.tileLayer('map'),
            zoom: 12
          });

          map.addControl(L.mapquest.control());
      }     

        navigator.geolocation.getCurrentPosition(onSuccess);
    
  });
}