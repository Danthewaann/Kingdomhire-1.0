
$(document).ready(function() {
	
// Get the id for the modal container and modal image
var modal = document.getElementById('Modal_container');
var modalImg = document.getElementById('modal_image');

// Constructor for creating modal images
function ModalImage(id) {
	
	var img = document.getElementById(id);
	var exit = document.getElementsByClassName('close')[0];
	
	img.onclick = function() {

		modal_container.style.display = 'block';
		modalImg.src = img.src;

	}
	
	exit.onclick = function() {
		
		modal_container.style.display = 'none';
		
	}
} // Constructor ends

// Initialise each vehicle image object
var Renault_Trafic = new ModalImage('Renault_Trafic');
var Kia_Sedona = new ModalImage('Kia_Sedona');
var Peugeot_308 = new ModalImage('Peugeot_308');
var Renault_Master = new ModalImage('Renault_Master');
var Peugeot_307 = new ModalImage('Peugeot_307');
var Megane = new ModalImage('Megane');

});






