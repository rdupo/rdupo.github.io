$('#v1,#v2,#v3,#cp').change(function() {
	var selected = [];
	$('.inputs input:checked').each(function() {
	    selected.push($(this).attr('name'));
	});
	var selected = selected.toString();

	if (selected == 'v1,v2,v3,cp') {
		$('#my-phunk').css('background','linear-gradient(90deg, #a79aff 25%, rgba(0, 0, 0, 0) 25%), linear-gradient(90deg, #638596 50%, rgba(0, 0, 0, 0) 50%), linear-gradient(90deg, #83deb2 75%, #3c2a3c 75%)');
	}
	else if (selected == 'v2,v3,cp') {
		$('#my-phunk').css('background','linear-gradient(90deg, #638596 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(90deg, #83deb2 66%, #3c2a3c 66%)');
	}
	else if (selected == 'v1,v3,cp') {
		$('#my-phunk').css('background','linear-gradient(90deg, #a79aff 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(90deg, #83deb2 66%, #3c2a3c 66%)');
	}
	else if (selected == 'v1,v2,cp') {
		$('#my-phunk').css('background','linear-gradient(90deg, #a79aff 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(90deg, #638596 66%, #3c2a3c 66%)');
	}
	else if (selected == 'v1,v2,v3') {
		$('#my-phunk').css('background','linear-gradient(90deg, #a79aff 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(90deg, #638596 66%, #83deb2 66%)');
	}
	else if (selected == 'v3,cp') {
		$('#my-phunk').css('background','linear-gradient(90deg, #83deb2 50%, #3c2a3c 50%)');
	}
	else if (selected == 'v2,cp') {
		$('#my-phunk').css('background','linear-gradient(90deg, #638596 50%, #3c2a3c 50%)');
	}
	else if (selected == 'v2,v3') {
		$('#my-phunk').css('background','linear-gradient(90deg, #638596 50%, #83deb2 50%)');
	}
	else if (selected == 'v1,cp') {
		$('#my-phunk').css('background','linear-gradient(90deg, #a79aff 50%, #3c2a3c 50%)');
	}
	else if (selected == 'v1,v3') {
		$('#my-phunk').css('background','linear-gradient(90deg, #a79aff 50%, #83deb2 50%)');
	}
	else if (selected == 'v1,v2') {
		$('#my-phunk').css('background','linear-gradient(90deg, #a79aff 50%, #638596 50%)');
	}
	else if (selected == 'cp') {
		$('#my-phunk').css('background','#3c2a3c');
	}
	else if (selected == 'v3') {
		$('#my-phunk').css('background','#83deb2');
	}
	else if (selected == 'v2') {
		$('#my-phunk').css('background','#638596');
	}
	else if (selected == 'v1') {
		$('#my-phunk').css('background','#a79aff');
	} 
	else {
	$('#my-phunk').css('background','lightgray');
	};
});

function leadingZeros(input) {
	if (!isNaN(input.value) && input.value.length == 1) {
		var pid = '000' + input.value;
		$('#my-phunk').attr('src', `phunk${pid}.svg`);
	}
	else if (!isNaN(input.value) && input.value.length == 2) {
		var pid = '00' + input.value;
		$('#my-phunk').attr('src', `phunk${pid}.svg`);
	}
	else if (!isNaN(input.value) && input.value.length == 3) {
		var pid = '0' + input.value;
		$('#my-phunk').attr('src', `phunk${pid}.svg`);
	}
	else if (!isNaN(input.value) && input.value.length == 4) {
		var pid = input.value;
		$('#my-phunk').attr('src', `phunk${pid}.svg`);
	}
	else {
		$('#my-phunk').attr('src', 'philip.png');
	};
};

function pfpGen () {
	var selected = [];
	$('.inputs input:checked').each(function() {
	    selected.push($(this).attr('name'));
	});
	var selected = selected.toString();
	var img = document.getElementById('my-phunk');
	const myCanvas = document.getElementById('dl-phunk');
	const originalHeight = myCanvas.height;
	const originalWidth = myCanvas.width;
	render();
	function render() {
	  let dimensions = getObjectFitSize(
	    true,
	    myCanvas.clientWidth,
	    myCanvas.clientHeight,
	    myCanvas.width,
	    myCanvas.height
	  );
	  const dpr = window.devicePixelRatio || 1;
	  myCanvas.width = dimensions.width * dpr;
	  myCanvas.height = dimensions.height * dpr;

	  let ctx = myCanvas.getContext('2d');
	  let ratio = Math.min(
	    myCanvas.clientWidth / originalWidth,
	    myCanvas.clientHeight / originalHeight
	  );
	  var myFill = $('#my-phunk').css('background');
	  ctx.rect(0, 0, myCanvas.width, myCanvas.height);
		if (selected == 'v1,v2,v3,cp') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#a79aff');
			grd.addColorStop(.25, '#a79aff');
			grd.addColorStop(.25, '#638596');
			grd.addColorStop(.50, '#638596');
			grd.addColorStop(.50, '#83deb2');
			grd.addColorStop(.75, '#83deb2');
			grd.addColorStop(.75, '#3c2a3c');
			grd.addColorStop(1, '#3c2a3c');
		}
		else if (selected == 'v2,v3,cp') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#638596');
			grd.addColorStop(.33, '#638596');
			grd.addColorStop(.33, '#83deb2');
			grd.addColorStop(.66, '#83deb2');
			grd.addColorStop(.66, '#3c2a3c');
			grd.addColorStop(1, '#3c2a3c');
		}
		else if (selected == 'v1,v3,cp') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#a79aff');
			grd.addColorStop(.33, '#a79aff');
			grd.addColorStop(.33, '#83deb2');
			grd.addColorStop(.66, '#83deb2');
			grd.addColorStop(.66, '#3c2a3c');
			grd.addColorStop(1, '#3c2a3c');
		}
		else if (selected == 'v1,v2,cp') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#a79aff');
			grd.addColorStop(.33, '#a79aff');
			grd.addColorStop(.33, '#638596');
			grd.addColorStop(.66, '#638596');
			grd.addColorStop(.66, '#3c2a3c');
			grd.addColorStop(1, '#3c2a3c');	
		}
		else if (selected == 'v1,v2,v3') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#a79aff');
			grd.addColorStop(.33, '#a79aff');
			grd.addColorStop(.33, '#638596');
			grd.addColorStop(.66, '#638596');
			grd.addColorStop(.66, '#83deb2');
			grd.addColorStop(1, '#83deb2')
		}
		else if (selected == 'v3,cp') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#83deb2');
			grd.addColorStop(.50, '#83deb2');
			grd.addColorStop(.50, '#3c2a3c');
			grd.addColorStop(1, '#3c2a3c');
		}
		else if (selected == 'v2,cp') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#638596');
			grd.addColorStop(.50, '#638596');
			grd.addColorStop(.50, '#3c2a3c');
			grd.addColorStop(1, '#3c2a3c');
		}
		else if (selected == 'v2,v3') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#638596');
			grd.addColorStop(.50, '#638596');
			grd.addColorStop(.50, '#83deb2');
			grd.addColorStop(1, '#83deb2');
		}
		else if (selected == 'v1,cp') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#a79aff');
			grd.addColorStop(.50, '#a79aff');
			grd.addColorStop(.50, '#3c2a3c');
			grd.addColorStop(1, '#3c2a3c');
		}
		else if (selected == 'v1,v3') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#a79aff');
			grd.addColorStop(.50, '#a79aff');
			grd.addColorStop(.50, '#83deb2');
			grd.addColorStop(1, '#83deb2');
		}
		else if (selected == 'v1,v2') {
			var grd = ctx.createLinearGradient(0, 0, myCanvas.width, 0);
			grd.addColorStop(0, '#a79aff');
			grd.addColorStop(.50, '#a79aff');
			grd.addColorStop(.50, '#638596');
			grd.addColorStop(1, '#638596');
		}
		else if (selected == 'cp') {
			var grd = '#3c2a3c';
		}
		else if (selected == 'v3') {
			var grd = '#83deb2';
		}
		else if (selected == 'v2') {
			var grd = '#638596'
		}
		else if (selected == 'v1') {
			var grd = '#a79aff';
		} 
		else {
			var grd = 'lightgray';
		};
	  ctx.fillStyle = grd;
	  ctx.fill();
	  ctx.drawImage(img, 0, 0, myCanvas.width, myCanvas.height);
	};

	function getObjectFitSize(
	  contains /* true = contain, false = cover */,
	  containerWidth,
	  containerHeight,
	  width,
	  height
	) {
	  var doRatio = width / height;
	  var cRatio = containerWidth / containerHeight;
	  var targetWidth = 0;
	  var targetHeight = 0;
	  var test = contains ? doRatio > cRatio : doRatio < cRatio;

	  if (test) {
	    targetWidth = containerWidth;
	    targetHeight = targetWidth / doRatio;
	  } else {
	    targetHeight = containerHeight;
	    targetWidth = targetHeight * doRatio;
	  }

	  return {
	    width: targetWidth,
	    height: targetHeight,
	    x: (containerWidth - targetWidth) / 2,
	    y: (containerHeight - targetHeight) / 2
	  };
	};
	$('#dl-phunk').show();
	dlPhunk();
}

function dlPhunk(){
  var pid = $('#id').val();
  var canvas = document.getElementById('dl-phunk');
  image = canvas.toDataURL("image/png").replace('image/png', 'image/octet-stream');
  var link = document.createElement('a');
  link.download = `phunk${pid}.png`;
  link.href = image;
  link.click();
}
