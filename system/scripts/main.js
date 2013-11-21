$(document).ready(function() {  
	var stickyNavTop = $('.nav').offset().top;  

	var stickyNav = function(){
		/*var mainValue = $('#search-top-main').val();
		var notMainValue = $('#search-top-notmain').val();
		if((mainValue.length) >= (notMainValue.length)){
			$('#search-top-notmain').val(mainValue);
		} else {
			$('#search-top-main').val(notMainValue);
		}*/
		var scrollTop = $(window).scrollTop();  

		if (scrollTop > stickyNavTop) {   
			$('.nav').addClass('sticky');  
		} else {  
			$('.nav').removeClass('sticky');   
		}  
	};  

	stickyNav();  

	$(window).scroll(function() {  
		stickyNav();  
	});
	
	$('#search-top-main').change(function(){
		$('#search-top-notmain').val($('#search-top-main').val());
	});
	
	$('#search-top-notmain').change(function(){
		$('#search-top-main').val($('#search-top-notmain').val());
	})
	
});  
