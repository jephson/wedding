function initialize() {
    var map = new google.maps.Map(
        document.getElementById('map-canvas'),
        {center: new google.maps.LatLng(52.287006,-1.535011),
         zoom:   16});

    var markers = [
        {loc:  new google.maps.LatLng(52.287501, -1.531091),
         text: "Our gorgeous venue!"},
        {loc:  new google.maps.LatLng(52.289022, -1.537353),
         text: "St Peter's car park"},
        {loc:  new google.maps.LatLng(52.284528, -1.536198),
         text: "Train station"}
    ];

    for (var i in markers) {
        var m = markers[i];
        var marker = new google.maps.Marker({position: m.loc,
                                             title:    m.text});
        var infowindow = new google.maps.InfoWindow({content: m.text});

        google.maps.event.addListener(marker, 'click',
                                      function(marker1, infowindow1) {
                                          return function() {
                                              infowindow1.open(map, marker1);
                                          }
                                      }(marker, infowindow));
        marker.setMap(map);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);
