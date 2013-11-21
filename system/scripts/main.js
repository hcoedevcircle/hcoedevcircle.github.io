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
			if($('#search-top-main').is(':focus')){
				$('#search-top-notmain').focus();
			}
			$('.nav').addClass('sticky');  
		} else {  
			if($('#search-top-notmain').is(':focus')){
				$('#search-top-main').focus();
			}
			$('.nav').removeClass('sticky');   
		}  
	};  

	stickyNav();  

	$(window).scroll(function() {  
		stickyNav();  
	});
	
	$('#search-top-main').keyup(function(){
		var mainVal = $('#search-top-main').val();
		$('#search-top-notmain').val(mainVal);
	});
	
	$('#search-top-notmain').keyup(function(){
		var notMainVal = $('#search-top-notmain').val();
		$('#search-top-main').val(notMainVal);
	});
	
});  
