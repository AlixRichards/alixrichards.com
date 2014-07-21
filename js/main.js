$(document).ready(function(){
	$("#readMore1").click(function(){
		$('#more1').slideToggle(500);
	});

	$("#readMore2").click(function(){
		$('#more2').slideToggle(500);
	});

	$("#readMore3").click(function(){
		$('#more3').slideToggle(500);
	});

	/*$('#readMore1').click(function(){
		$('.more').toggle(function(){
			$(this).next('div').slideToggle(500);
			$(this).addClass('open');
		},
		function(){
					$(this).next('div').slideToggle(500);
					$(this).removeClass('open');
				}	
		);
	}); */ 



});


