(function() {
	var video = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;

		navigator.getMedia = navigator.getUserMedia || 
							 navigator.webkitGetUserMedia ||
							 navigator.mozGetUserMedia ||
							 navigator.msGetUserMedia;

	// Capture video
	navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	}).then(function(stream) {
  video.srcObject = stream;
  return video.play();
	}, 
	   function(error) {
	  // An error occured
	  // error.code 	
	});
	

})();