gmaps = {
    // map object
    map: null,
    
    //direction services object
    directionsService: null,
 
    //direction services object
    directionsDisplay: null,
    
    //direction services object
    stepDisplay: null,
    
    markerArray: [],
    
    markerlist: [],
    
    sampleLoc: null,
    
    paths: [],
    
    aqiIndexNoReading: {color: '000000', label: 'black', opacity: 0.3,  desc: 'No Reading'},  
  
  // over-written in initialization by Drupal.settings value from CMS.
  aqiIndex: {  0: { color: '3FAE4A', label: 'green', opacity: 0.45, title: 'Good'},
               60: { color: 'F6EC26', label: 'yellow', opacity: 0.45, title: 'Moderate'},
               76: { color: 'EE5828', label: 'orange', opacity: 0.45, title: 'Warning'},
               96: { color: 'B8212B', label: 'red', opacity: 0.45, title: 'Unhealthy'},
              116: { color: '9A1E51', label: 'purple', opacity: 0.45, title: 'Very Unhealthy'},
              136: { color: '451427', label: 'maroon', opacity: 0.45, title: 'Hazardous'} 
             },             
  
  maxAqiIndex : 156, 

  searchContainer : null,
  searchToggle : null,
  
  defaultSearchVal : "Search Houston Address",
  
  gradientIndex : [],
    
    firstWindowLoad : true,
    firstPlay : true,
    isDeeplink : false,

    // displayMode 1 is load all drawn polygons into memory, then show/hide
    // displayMode 2 is JIT draw then destroy.
    displayMode : 1,
  
    // contourJSONStorage pertains to displayMode 2
    contourJSONStorage : [],
  
    // load from flat file cache or script
    contourFlatFile : false,
  
    animationMessage: 'Click play to animate.',

//  testMode : false,
    moduleBase : 'sites/all/modules/ibh_ozone_viewer/',
    testContour : 'tests/contour-',
    testContourEndTS: 1243731600,
//  testContourNow: 1332872700,
    testMarker : 'tests/poi.js',
    testMarkerURL : 'tests/poi-data.js',

    baseApiUrl : '/',
    flatContourBaseURL: 'generatedcontour/',
    markerURL: 'ozone-viewer-api/point.php',
    contourURL: 'ozone-viewer-api/contour.php',


    contourNum : 6,
    contourRes : 300, // 5 minute resolution
    bandSchema : 4,

    contourEndTS : 1301558400,
    contourStartTS : null,

    markerEndTS : 1301558400,
    markerStartTS : null,
    markerNumber : 1,
    markerLag : 1800, // 30 minutes behind
  
    defaultTimeSpan: 3600,
  
  lowerBoundHour : 6,
  upperBoundHour : 22,
  
  sliderange: null,
  animSlider: null,
  playPause : null,
  inactiveUI : {opacity:0.25, cursor:'default'},
  activeUI : {opacity:1, cursor:'pointer'},
  scubberExpanded : false,

  
//  markersStatus: null,
  markerTitles: [],
  savedMarkerLimit: 5,
  activatedMarker : null,
  markerSettings : [],
  markerSearchZoom : 11,

    getMarkerSrc : function() {
        return this.moduleBase +'images/markers/_marker-sprite-sm.png';
    },
  
    getMarkerSrcHover : function() {
        return this.moduleBase +'images/markers/_marker-sprite-lg.png';
    },
    
    defaultZoomLevel : 10,
    zoomLevel : 10,

    contourAnimSpeed: 1500,
    legendLabelHideSpeed: 5000,

    markerNames : [],

    
    markers : [],
    formattedTime : [],

    activeContourTS : null,
    contourCallbackNum : 0,

    markerCallbackNum : 0,
    currentTotalCallbackNum : 0,
    totalCallbackNum : 0,

    timeIndicator : null,

    animSlider: null,
    isPlaying: false,
  
    colorLegend : null,
    colorLegendWrapper : null,
  
    colorDataSeries: [],
    
    legendCSS : {
    position:'relative', 
    left:'50px', 
    float: 'right'
  },

  colorLegendLabel : null,
  colorLegendHtml : null,

  timelineChart : null,
  contourAjaxCalls : [], 
    

 

    // intialize the map
    initialize: function () {
        
            $(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    });
        this.initGMap();
        this.initLoadbar();
//       this.initColorGradient();
        this.initTooltip();
        this.initTooltipRight();
  //      this.initDeeplink();
        this.updateTotalCallbacks();
  //      this.initHomeCenter();
        this.initHelp();

  
   
  
    this.initFooterToggles();
 
       
    },
    getOzoneInfo: function(ozoneLevel){
    
    if (ozoneLevel == -1) {
      return this.aqiIndexNoReading;
    }
  
    var r = null;
    for (x in gmaps.aqiIndex) {
      if (Number(ozoneLevel) >= x){
        r = gmaps.aqiIndex[x];
      }
      else {
        break;
      }
    }
    return r;
  },
   
    
    initLoadbar: function() {
  
    this.loadbar = $('#o-loadbar');
    this.loadbarWrapper = $('#o-loadbar-wrapper');    
    this.loadbarMaxWidth = this.loadbarWrapper.width() - 1;

    return true
  },

  updateLoadbar: function() {
  
    if (this.totalCallbackNum==0) {
      this.loadbar.width(this.loadbarMaxWidth);
      this.loadbar.delay(1000).fadeOut();
      if (this.isPlaying) {
        this.expandScrubber();
      }
      return;
    }

    if (this.totalCallbackNum!=0) {
      this.loadbar.show();
    }

    var pixelsPerIncrement =  this.loadbarMaxWidth / this.totalCallbackNum;
    var increments = this.totalCallbackNum - this.currentTotalCallbackNum;

    var w = increments*pixelsPerIncrement;

    this.loadbar.width(w);

  },  
    

  addTotalCallback : function() {
    this.totalCallbackNum++;
    this.currentTotalCallbackNum++;
  },

  updateTotalCallbacks : function() {

    if (this.currentTotalCallbackNum != 0) {
      this.currentTotalCallbackNum--;
    }

    if (this.currentTotalCallbackNum == 0) {
      this.totalCallbackNum = 0;
    }
    
    this.updateLoadbar();
  
  },

  /*
   *
   * End Loadbar Functionality
   */


//  initColorGradient: function() {
//  
//    var start = false;
//    var end = false;
//    var startX = 0;
//    var endX = 0;
//    for(x in this.aqiIndex) {
//      if (!start){
//        start = this.aqiIndex[x].color;
//        startX = x;
//        continue;
//      }
//      if (!end) {
//        end = this.aqiIndex[x].color;
//        endX = x;
//        
//        var object = $.extend({}, this.gradientIndex, this.getGradient(start, end, startX, endX));
//
//        start = end;
//        startX = endX;
//        end = false;
//        continue;
//      }
//    }
      
     
    // quick fix.
//	$.extend(this.gradientIndex, this.getGradient(start, start, startX, 256));
 //   this.gradientIndex[this.gradientIndex.length] = '7C0000';

  
    

  
//  getGradient: function(start, end, startX, endX) {
//    Session.get('start');
//    Session.get('end');
//    Session.get('startX');
//    Session.get('256')
//    rainbow.setColours(start, end);
//
//    var steps = Number(endX) - Number(startX);
//
//    rainbow.setNumberRange(0, steps);
//    
//    var array = [];
//
//    var j = Number(startX);
//
//    for(i=0;i<steps;i++) {
//      array[j] = rainbow.colourAt(i);
//      j++;
//    }
//    
//    return array;
//  },
//  
  initTooltip: function() {
    $('body').append('<div id="ozone-tooltip"><div id="ozone-tooltip-content"></div>');
    this.tooltip = $('#ozone-tooltip');
    this.tooltipContent = $('#ozone-tooltip-content');
  },
  
  initTooltipRight: function() {
    $('body').append('<div id="ozone-tooltip-right"><div id="ozone-tooltip-content-right"></div>');
    this.tooltipRight = $('#ozone-tooltip-right');
    this.tooltipContentRight = $('#ozone-tooltip-content-right');
  },
    
    
    initFooterToggles : function() {
    
    var sidebarToggle = $('.sidebarToggle');
    var sidebar = $('#sidebar');
  
    sidebarToggle.click(function(){
      sidebar.slideToggle(400);
      sidebarToggle.toggleClass('open');
//      sidebarToggle.toggle();
      return false;
    });

    this.searchToggle = $('.searchToggle');
    this.searchWrapper = $('#searchGMap-wrapper');
    
    this.searchToggle.click(function(){
      gmaps.searchWrapper.slideToggle(400);
      gmaps.searchToggle.toggleClass('open');
//      gmaps.searchToggle.toggle();
      return false;
    });
  },
    
 
  
  

    alert: function(message, title, buttons){
    if(!title) {
      title = 'Message';
    }
    if (!buttons) {
      buttons = {
        'OK':function(){
          $(this).dialog('close');
        }
	  }
    }
    
    if (!this.appAlert) {
      this.appAlert = $('<div />');
      $('body').prepend(this.appAlert);
    }
	this.appAlert.html('<div>' + message + '</div>').dialog({
		modal:false,
		title:'',
		width:650,
		zIndex:1500,
		draggable:true,
		buttons: buttons
	});
    $(document).scrollTop(0);
  },
  
    initHelp: function() {
    this.help1 = $('#help-1');
    $('#help-info').hover(
      function(){
        var offset = $(this).offset();
        var top = offset.top + 5;
        var left = offset.left - 188;
        //var left = offset.left - 50;
        gmaps.tooltipContentRight.html('<div>Show Air Quality Index chart</div>');
        gmaps.tooltipRight.css({top:top,left:left}).show();
      },
      function() {
        gmaps.tooltipRight.hide();    
      }
    );
    $('#help-info').click(function(){
         if (gmaps.appAlert) {
        if ($(gmaps.appAlert).dialog( "isOpen" )) {
          $(gmaps.appAlert).dialog("close");
        }
        else {
          gmaps.showHelp1();        
        }   
      }
      else {
        gmaps.showHelp1();        
      }
     
    });

  },
  
  showHelp1 : function() {
   this.alert(this.help1.html(), 'Help', {});
  },
    
    initGMap: function() {
        
        var mapOptions = {
                
                center: new google.maps.LatLng(29.76,-95.369), 
               zoom: 10,
                scaleControl: true,                
                zoomControl: true,
                mapTypeControl: false,
                panControl: false,
                rotateControl: true,
                overviewMapControl: false, 
            streetViewControl: false,
              
       scrollwheel:false,
        disableDefaultUI:true,
        disableDoubleClickZoom:false,
        draggable:true,
        //mapTypeId:'hybrid'
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
       
        //panControl:false,
        panControl:true,
        panControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
        scaleControl:false,      
        streetViewControl:false,
            };        
        
        map= new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var rendererOptions = {
            map: map
        }
        

        
       directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
       this.directionsService = new google.maps.DirectionsService();  
        
                   
        
        
        // global flag saying we intialized already
        Session.set('map', true);
        
    },


    
     
        findlocation: function() {
        if(navigator.geolocation) {
        navigator.geolocation.watchPosition(gmaps.showPosition, function() {
        handleNoGeolocation(true);
        });
        }   else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
        }
        },
        
        showPosition: function(position) {
        pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(pos);
       map.setZoom(14);
        var purpStar = {
            path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
            fillColor: 'lavender',
            fillOpacity: 0.8,
            scale: 0.1,
            strokeColor: 'plum',
            strokeWeight: 2
        };
       
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: purpStar
        });
    
        
        
        },
    
    
        addMarker: function(i)
    {
        var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(i.lat, i.lng),
    
            });
        
        var display = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'click', function() {
            // Open an info window when the marker is clicked on,
            // containing the text of the step.
            display.setContent(i.content);
            display.open(map, marker);
            
        });
        
        

    },
    
     
    
       
    
      
        calcRoute: function() {
        gmaps.clearMarkers();
        if (gmaps.clearMarkers())   
            {
        console.log(this.markerArray);
        // Retrieve the start and end locations and create
        // a DirectionsRequest using BICYCLING directions.
        var start = pos; 
   //     var start = pos;
        
        var end = document.getElementById('end').value;
        var mode = document.getElementById('travel').value;
        console.log(end);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode[mode]
        };
            
        // Route the directions and pass the response to a
        // function to create markers for each step.
        this.directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
            var warnings = document.getElementById('warnings_panel');
            warnings.innerHTML = '<b>' + response.routes[0].warnings + '</b>';
            this.directionsDisplay.setDirections(response);
            gmaps.showSteps(response);
            }
        });
            }
        },
    
        showSteps: function(directionResult) {
        // For each step, place a marker, and add the text to the marker's
        // info window. Also attach the marker to an array so we
        // can keep track of it and remove it when calculating new
        // routes.
        var myRoute = directionResult.routes[0].legs[0];

        for (var i = 0; i < myRoute.steps.length; i++) {
            var marker = new google.maps.Marker({
                position: myRoute.steps[i].start_location,
                map: map
            });
            gmaps.attachInstructionText(marker, myRoute.steps[i].instructions);
            this.markerArray[i] = marker;
        }
        },

         attachInstructionText: function(marker, text) {
             
        // Instantiate an info window to hold step text.
        var stepDisplay = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, 'mouseover', function() {
            // Open an info window when the marker is clicked on,
            // containing the text of the step.
            stepDisplay.setContent(text);
            stepDisplay.open(map, marker);
            
        })
            
            google.maps.event.addListener(marker, 'click', function() {
                map.setZoom(15);
                map.setCenter(marker.getPosition());
                stepDisplay.open(map, marker);
            })
            
        },
    
        clearMarkers: function() {
         
            
              // First, remove any existing markers from the map.
        for (var i = 0; i < this.markerArray.length; i++) {
            
            this.markerArray[i].setMap(null);
        }

        // Now, clear the array itself.
        this.markerArray = [];
         
        return true;    
        }
        
}
        