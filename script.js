// When window loads
$( window ).on("load", function() {
	loaded();
	removeLoader();
});

// Function to remove Loader
function removeLoader(){
	setTimeout(function(){
		var loadText = document.getElementsByClassName('loadText')[0];
		loadText.innerHTML = "Complete";

	}, 1000);

 $('.loader').css("display", "none");

}


// Function called when window loads
function loaded(){
	$('html, body').animate({
    scrollTop: 0
	}, 10);
}


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
