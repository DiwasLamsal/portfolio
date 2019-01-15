// When window loads
$( window ).on("load", function() {
	loaded();
	cursorEffect();

	$('li').on('hover', function(){
		console.log("asd");
	});

});


// Function called when window loads
function loaded(){
	$('html, body').animate({
    scrollTop: 0
	}, 10);
}


// Cursor effect
function cursorEffect(){



if(window.innerWidth>700){

	var timer;
   $(document).on('mousemove', function(e){
		 if(window.scrollY == 0){
			 clearInterval(timer);
       timer = setTimeout(function() {
           $('.bubble').animate({opacity:0}, 400, function() {
               $(this).remove();
           });
       }, 10);


			 var randomColor = "rgb("+getRandomNumber(0, 255)+", "+getRandomNumber(0, 255)+", "+getRandomNumber(0, 255)+")";

       var t  = (e.pageY - 10).toString() + 'px',
           l  = (e.pageX - 10).toString() + 'px',
           el = $('<div />', {'class':'bubble',
							 style: 'margin-left:' + l + ';margin-top:' + t + '; background: '+randomColor
							 , text:''});

       $('#intro').prepend(el);

		 }
   });

	}//End of if(window.innerWidth>700)
}//End of function cursorEffect



// Function to scroll to a container
// Works only with Desktop
function scrollFunction(idVar){
	// Scroll to Container
	$('html, body').animate({
    scrollTop: idVar == 'intro' ? 0 : $('#'+idVar).offset().top
	}, 500);

	// Set all bullets to blank
	var nav = document.getElementsByClassName('nav-pc')[0];
	var bullets = nav.getElementsByTagName('li');
	for (var i = 0; i < bullets.length; i++) {
    bullets[i].className = "";
	}

	// add the li for bullet's id
	var bullet = idVar+'li';
	var bulletLi = document.getElementById(bullet);
	//Set clicked bullet to selected
	bulletLi.className = "selected";

}

// Get random number between min and max
function getRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Change image
function changeImage(imageName, imageTag){
	setTimeout(function(){imageTag.src = imageName;}, 100);
}
