$(document).ready( function() {


	
	var width = $(window).width();


	if (width < 400) {
		$(".nav-toggle").removeClass("hidden");
		$(".nav-toggle").addClass("shown"); // Adding a class to show our toggle
		$(".nav-mobile").removeClass("hidden");
		$(".nav-mobile").addClass("shown"); 
        $(".logo").removeClass("shown");
		$(".logo").addClass("hidden"); 
        
		$("nav").hide();		// Setting nav to hide using jQuery/Zepto's method
	}else {

		$(".nav-toggle").removeClass("shown");
		$(".nav-toggle").addClass("hidden"); // Adding a class to show our toggle
		$(".nav-mobile").removeClass("shown");
		$(".nav-mobile").addClass("hidden"); 
        $(".logo").removeClass("hidden");
		$(".logo").addClass("shown"); 
        
		$("nav").show();		// Setting nav to show using jQuery/Zepto's method
	}

	/*
		Here we are running a function when #navToggle is clicked
	*/
	$(".nav-toggle").click( function() { 
		// The .slideToggle method slides the 'nav' open/closed over 500ms
		$("nav").slideToggle(500);
	});


});