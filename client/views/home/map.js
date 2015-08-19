// https://github.com/dburles/meteor-google-maps/issues/38 
// look at this for help with autorun

Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();
   
     
    
    // keep updating info on map with changes in database
    Tracker.autorun(function() {
        region = '12';
       Meteor.subscribe('sites',region);
        var sites = Sites.find({}).fetch();
        var markerInfo = null;
        var ozones = null;
        sites.forEach(function(aSite) {           
            currentID = aSite.siteID;
            time = 1420070400;
            Meteor.subscribe('sitesdata',currentID,time);
            var ozones = History.find({}).fetch();
            ozones.forEach(function (aHistory)
            {
                    if(currentID == aHistory.siteID)
                    {
                            this.markerInfo = 'ID: ' + aHistory.siteID + '<br/>' + 'Ozone Level: ' + aHistory.o3+ '<br/>' + 'Time: ' + aHistory.epoch;
                            
                    }
   
            
            
                 var aMarker = {
                    lat: aSite.loc[1],
                    lng: aSite.loc[0],
                    title: aSite.Name,
                    siteID: aSite.siteID,
                    content: this.markerInfo
                };
            
            
              
            
            gmaps.addMarker(aMarker);
            
            
            });   
            
               
        }); 
        
        Meteor.subscribe('shapes');
        var shapes = Shapes.find({}).fetch();
        
        
                 
         
        
        

        
    
        
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



