var app = {};
 
(function($){
	"use strict";

	var $window=$(window), $document=$(document);

	app.event = function () {

	$("#bouton").click(function(){
        alert("Votre adhésion à la Newsletter est enregistrée, nous vous en remercions !");
    });	
    }

	$document.ready(function () {
		app.event();
	});

})(jQuery);