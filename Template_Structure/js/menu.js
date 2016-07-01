$(document).ready( function() {

	$(window).resize( function() {
		
		var width = $(window).width();


		if (width < 732) {
			$(".nav-toggle").removeClass("hidden");
			$(".nav-toggle").addClass("shown"); // Adding a class to show our toggle
			$(".nav-mobile").removeClass("hidden");
			$(".nav-mobile").addClass("shown"); 
	        $(".logo").removeClass("shown");
			$(".logo").addClass("hidden"); 
	        

			$("nav").hide();	

			console.log("hidden");	// Setting nav to hide using jQuery/Zepto's method

		}else {

			$(".nav-toggle").removeClass("shown");
			$(".nav-toggle").addClass("hidden"); 
			$(".nav-mobile").removeClass("shown");
			$(".nav-mobile").addClass("hidden"); 
	        $(".logo").removeClass("hidden");
			$(".logo").addClass("shown"); 

			
			$("nav").show();


		}

	}); // end of .resize()

	
	$(".nav-toggle").click( function() { 
		
		$("nav").slideToggle(500);
	});


});