Template.color_legend.rendered = function (){

    if (! this.$('#color_legend').data('uiSlider')) {
      this.colorLegend = $("#color_legend");

    var clHeight = this.colorLegend.height();
  
    this.colorLegend.slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: gmaps.maxAqiIndex,
    
      value: 10,
      animate: true,
      change: function( event, ui ) {
      //  $( "#amount" ).val( ui.value );
        gmaps.skipOneContourAnim();
        var data = gmaps.getOzoneInfo(ui.value);
          console.log(data);
        if (gmaps.colorLegendLabel) {
          var ts = gmaps.animSlider.slider("value");
          var time = gmaps.convertTimestamp(ts, true);
          var html = '';
          html += '<div class="number">' + ui.value + '</div>';
          html += '<div class="desc">' + data.title.toUpperCase() + '<br /><span class="time">Range: ' + data.span + '</span>';
          html += '<br /><span class="time">Updated: ' + time + '</span></div>';          
          gmaps.colorLegendHtml.html('<div>' + html + '</div>');
          gmaps.colorLegendLabel.css({borderRight:'8px solid #' + data.color});
          
          gmaps.colorLegendHandle.show();
          
          gmaps.legendLabelReset();
//          $.doTimeout('hideLabel', 5000, function() { 
//            ibhOzoneViewer.colorLegendHandle.hide();
//          });
        }
      }
    });
    
    // add the label.
    this.colorLegendHandle = $('#color-legend .ui-slider-handle');
    this.colorLegendHandle.append('<div id="color-legend-label"><div id="color-legend-html"></div></div>');
    this.colorLegendLabel = $('#color-legend-label');
    this.colorLegendHtml = $('#color-legend-html');
    
    // add the track.
    var start,startX,startD,end,endX;
 
	var cssObj = {
	  position: 'absolute',
	  left:0,
	  borderBottom:'1px solid #fff',
	  borderLeft:'1px solid #fff',
	  borderRight:'1px solid #fff',
	  width:13
	} 
    
    for(x in this.aqiIndex) {
      if (!start){
        start = this.aqiIndex[x].color;
//        startD = this.aqiIndex[x].title;
        startX = x;
        console.log(startX);
        continue;
      }
      if (!end) {
        end = this.aqiIndex[x].color;
        endX = Number(x);

        this.aqiIndex[startX].span = '' + startX + '-' + endX;
          console.log(this.aqiIndex[startX]);
        var ratio = (endX - startX) / this.maxAqiIndex;
 
        var bottom = Math.ceil((startX * clHeight) / this.maxAqiIndex);
 
        var h = Math.ceil(clHeight * ratio) + 4; // magic number fix, sorry.
        
        cssObj.height = h;
        cssObj.backgroundColor = '#'+start;
        cssObj.bottom = bottom + 'px';
        
        $('<div>').css(cssObj).appendTo(this.colorLegend);

        start = end;
        startX = endX;
//        startD = this.aqiIndex[x].title;
        end = false;
        continue;
      }
    }

    var bottom = Math.ceil((startX * clHeight) / this.maxAqiIndex);
       
    this.aqiIndex[startX].span = '' + startX + '-' + endX;
    
    cssObj.borderTop = '1px solid #fff';
    cssObj.height = h;
    cssObj.backgroundColor = '#'+start;
    cssObj.bottom = bottom + 'px';
	
	$('<div>').css(cssObj).appendTo(this.colorLegend);

  }

};