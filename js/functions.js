function initialize() {     
    directionsDisplay = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 19,
        center: new google.maps.LatLng(46.165791, -1.138006),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      
      });   
    

 
if (navigator.geolocation)
  var watchId = navigator.geolocation.watchPosition(successCallback,null,{enableHighAccuracy:true});
else
  alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");   
    

}


function successCallback(position){
  map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
    map: map
    
  }); 
        var origin = new google.maps.Marker({
    position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), 
    map: map
  }); 
    
    var destination = new google.maps.Marker({
    position: new google.maps.LatLng(46.165791, -1.138006), 
    map: map
  }); 
    
    directionsDisplay.setMap(map);
    calcRoute(origin, destination);
    
    
}


function calcRoute(start, end) {

  var request = {
    origin:start.position,
    destination:end.position,
    travelMode: google.maps.TravelMode.DRIVING
  };
    var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}
