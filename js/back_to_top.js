function slideToggle(){
			$('#reg_form').slideDown(800);
		}	
			
		$(document).ready(function(){

			// hide #back-top first
			$("#back-top").hide();
			$('#reg_form').slideUp();
			// fade in #back-top
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > 100) {
						$('#back-top').fadeIn();
					} else {
						$('#back-top').fadeOut();
					}
				});

				// scroll body to 0px on click
				$('#back-top a').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			});			
		});