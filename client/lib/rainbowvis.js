/*
RainbowVis-JS by Sophiah (Zing-Ming)
Released under MIT License
*/



rainbow = {
    gradients: null,
	minNum: 0,
	maxNum: 100,
	colours: ['ff0000', 'ffff00', '00ff00', '0000ff'], 
//	this.setColours(colours);
	
	setColours: function (start, end) 
	{
		var spectrum = [start, end];
        if (spectrum.length < 2) {
			throw 'Rainbow must have two or more colours.';
		} else {
			var increment = (this.maxNum - this.minNum)/(spectrum.length - 1);
			colourGradient.setGradient(spectrum[0], spectrum[1]);
			colourGradient.setNumberRange(this.minNum, this.minNum + increment);
			gradients = [ colourGradient ];
			
			for (var i = 1; i < spectrum.length - 1; i++) {
				
				this.colourGradient.setGradient(spectrum[i], spectrum[i + 1]);
				this.colourGradient.setNumberRange(minNum + increment * i, minNum + increment * (i + 1)); 
				gradients[i] = colourGradient; 
			}

			colours = spectrum;
		}
	},

 /*   setSpectrum: function () 
	{
		Session.set('start', 'start');
        Session.set('end', 'end');
        setColours('start', 'end');
	},

	setSpectrumByArray: function (array)
	{
		setColours(array);
	},
*/
	colourAt: function (number)
	{
		if (gradients.length === 1) {
			return gradients[0].colourAt(number);
		} else {
			var segment = (maxNum - minNum)/(gradients.length);
			var index = Math.min(Math.floor((Math.max(number, minNum) - minNum)/segment), gradients.length - 1);
			return gradients[index].colourAt(number);
		}
	},

	setNumberRange: function(minNumber, maxNumber)
	{
		if (maxNumber > minNumber) {
			minNum = minNumber;
			maxNum = maxNumber;
			rainbow.setColours(colours);
		} else {
			throw 'maxNumber(' + maxNumber + ') is not greater than minNumber(' + minNumber + ')';
		}
	}
    
    
   
}

colourGradient = 
{
	startColour: 'ff0000',
	endColour: '0000ff',
	minNum: 0,
	maxNum: 100,

	setGradient: function(colourStart, colourEnd)
	{
		startColour = colourGradient.getHexColour(colourStart);
		endColour = colourGradient.getHexColour(colourEnd);
	},

	setNumberRange: function(minNumber, maxNumber)
	{
		if (maxNumber > minNumber) {
			minNum = minNumber;
			maxNum = maxNumber;
		} else {
			throw 'maxNumber(' + maxNumber + ') is not greater than minNumber(' + minNumber + ')';
		}
	},

	colourAt: function(number)
	{
		return colourGradient.calcHex(number, startColour.substring(0,2), endColour.substring(0,2)) 
			+ colourGradient.calcHex(number, startColour.substring(2,4), endColour.substring(2,4)) 
			+ colourGradient.calcHex(number, startColour.substring(4,6), endColour.substring(4,6));
	},
	
	calcHex: function(number, channelStart_Base16, channelEnd_Base16)
	{
		var num = number;
		if (num < minNum) {
			num = minNum;
		}
		if (num > maxNum) {
			num = maxNum;
		} 
		var numRange = maxNum - minNum;
		var cStart_Base10 = parseInt(channelStart_Base16, 16);
		var cEnd_Base10 = parseInt(channelEnd_Base16, 16); 
		var cPerUnit = (cEnd_Base10 - cStart_Base10)/numRange;
		var c_Base10 = Math.round(cPerUnit * (num - minNum) + cStart_Base10);
		return colourGradient.formatHex(c_Base10.toString(16));
	},

    formatHex: function(hex) 
	{
		if (hex.length === 1) {
			return '0' + hex;
		} else {
			return hex;
		}
	}, 
	
	isHexColour: function (string)
	{
		var regex = /^#?[0-9a-fA-F]{6}$/i;
		return regex.test(string);
	},

	getHexColour: function(string)
	{
		if (colourGradient.isHexColour(string)) {
			return string.substring(string.length - 6, string.length);
            
		} else {
			var colourNames =
			[
				['red', 'ff0000'],
				['lime', '00ff00'],
				['blue', '0000ff'],
				['yellow', 'ffff00'],
				['aqua', '00ffff'],
				['fuchsia', 'ff00ff'],
				['white', 'ffffff'],
				['black', '000000'],
				['gray', '808080'],
				['grey', '808080'],
				['silver', 'c0c0c0'],
				['maroon', '800000'],
				['olive', '808000'],
				['green', '008000'],
				['teal', '008080'],
				['navy', '000080'],
				['purple', '800080']
			];
			for (var i = 0; i < colourNames.length; i++) {
	//			if (string.toLowerCase() === colourNames[i][0]) {
					return colourNames[i][1];
	//			}
			}
			throw string + ' is not a valid colour.';
		}
	}
}
