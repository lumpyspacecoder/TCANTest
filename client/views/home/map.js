// https://github.com/dburles/meteor-google-maps/issues/38 
// look at this for help with autorun

Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();
     
    
    // keep updating info on map with changes in database
    Tracker.autorun(function() {
       
       Meteor.subscribe('ibhsites');
        Meteor.subscribe('sample');
        
        
        var sites = Sites.find({}).fetch();
        var siteIds = sites.map(function(p) {return p.siteID});
        
        var histories= History.find({siteID: {$in: siteIds}}, {epoch: {sort:1}}).fetch() ;
        
        histories.forEach(function (aHistory)
                        {
//                            d = new Date(0);
//                            d.setUTCSeconds(aHistory.epoch);
                            markerInfo = 'ID: ' + aHistory.siteID + '<br/>' +
                                        'Ozone Level: ' + aHistory.o3;
                            
                        } );   
        
        

        
        _.each(sites, function(aSite,aHistory) {           
          //      var markerInfo= 'ID: ' + aSite.siteID + '<br/>';
                var aMarker = {
                    lat: aSite.loc[1],
                    lng: aSite.loc[0],
                    title: aSite.Name,
                    content: markerInfo
                };
                gmaps.markerlist.push(aMarker);
            gmaps.initPolyLines(aMarker);
                
            
            
        }); 
        
        
    });
    
    
}

/* 
    Tracker.autorun(function() {
        
            if (!Geolocation.error()) {                
                pos = Geolocation.latLng();
                var geomarker = new google.maps.Marker({
                    gm_bindings_: this.map,
                    position: new google.maps.LatLng(pos.lat, pos.lng),
                    setMap: this.map,
                    content: 'Location found using HTML5.'
                });
                console.log('Your location is ' + pos.lat + ', ' + pos.lng);
            } 
        
    });
*/

    


 
Template.map.destroyed = function() {
    Session.set('map', false);
}



