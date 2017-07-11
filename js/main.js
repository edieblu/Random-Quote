

function myFunction(){

$(document).ready(function () { 
  	var random = Math.floor(Math.random() * 1854) + 1;
  $.getJSON('https://crossorigin.me/https://xkcd.com/' + random + '/info.0.json', function (data) {
      console.log(data.img);
    	var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		var img = new Image();	
		img.onload = function() {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        c.height = img.height;
        c.width = img.width;
		    ctx.drawImage(img, 0, 0, img.width, img.height);
		    img.src = this.src
		};
		img.src = data.img;
  });
});
};

