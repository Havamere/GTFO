
// Sets sounds for the clicks and win or lose
var audio = new Audio('assets/audio/gemclick.mp3');
var applause = new Audio('assets/audio/applause.mp3');
var loser = new Audio('assets/audio/loser.mp3')

// This randomly generates a number between 1 and 5
var ranNum = Math.floor((Math.random() * 5) + 1);

// This is keeping track of the wins vs. losses count.
var winCounter = 0;
var loseCounter = 0;

// Here is where we generate the room or floor

if (ranNum === 1) {

	room1();

	} else {

	    if (ranNum === 2) {
	     
	     room2();

	} else {

	    if (ranNum === 3) {
	     
	     room3();

 	} else {

	    if (ranNum === 4) {
	     
	     room4();

    } else {

	    if (ranNum === 5) {
	     
	     room5();

	 };


// This section is for the room functions.


function room1(){

	$(".story").html(room1Story);

		$(".left").click(function() {
		inventory += room1Thing1;
		$('.inventory').html(inventory);
		audio.play();
		
			$(".right").click(function() {
			inventroy += room1Thing2;
			$('.inventory').html(inventory);
			audio.play();

			});

		});

};


function room2(){

	$(".story").html(room2Story);

		$(".left").click(function() {
		inventory += room2Thing1;
		$('.inventory').html(inventory);
		audio.play();
		

			$(".right").click(function() {
			inventory += room2Thing2;
			$('.inventory').html(inventory);
			audio.play();

			});

		});

};


function room3(){

	$(".story").html(room3Story);

		$(".left").click(function() {
		inventory += room1Thing1;
		$('.inventory').html(inventory);
		audio.play();
		
			$(".right").click(function() {
			inventory += room1Thing2;
			$('.inventory').html(inventory);
			audio.play();

			});
		});
};

function room4(){

	$(".story").html(room4Story);	

		$(".left").click(function() {
		inventory += room4Thing1;
		$('.inventory').html(inventory);
		audio.play();
		

			$(".right").click(function() {
			inventory += room4Thing2;
			$('.inventory').html(inventory);
			audio.play();

			});

		});

};


function room5(){

	$(".story").html(room5Story);

		$(".left").click(function() {
		inventory += room5Thing1;
		$('.inventory').html(inventory);
		audio.play();


			$(".right").click(function() {
			inventroy += room5Thing2;
			$('.inventory').html(inventory);
			audio.play();

			});

		});

};

// Sets sounds for the clicks and win or lose
var audio = new Audio('assets/audio/gemclick.mp3');
var applause = new Audio('assets/audio/applause.mp3');
var loser = new Audio('assets/audio/loser.mp3')


// Resets the game to play again
var restart = function() {

}

};