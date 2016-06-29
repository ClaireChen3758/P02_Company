$(document).ready( function() {
	

	/*
		submit-buttom and cancel buttom click events
	*/
	$(".submit-buttom1").click( function() { 
		
		$(".purchase-item2").addClass("shown")
	});

	$(".submit-buttom2").click( function() { 
	
		$(".purchase-item3").addClass("shown")
	});

	$(".cancel-buttom2").click( function() { 
		
		$(".purchase-item2").removeClass("shown")

	});

	$(".cancel-buttom3").click( function() { 
		
		$(".purchase-item3").removeClass("shown")
	});

});