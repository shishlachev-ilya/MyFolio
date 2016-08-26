$(document).ready(function() {

	new WOW().init();
	
	/*  адаптивное меню  */
	
    function menu() {

        var trig = $('.trigger-js'),
            menu = $('.menu-js');

        trig.click(function() {
            $(this).next(menu).slideToggle();
        });

        $(window).resize(function() {

            if ($(window).width() > 732) {
                menu.removeAttr('style');
            }
        });
    }
    menu();
	
	/* меню при скролле*/
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
		$('.site-nav').addClass("scroll");
		}
		else{
		$('.site-nav').removeClass("scroll");
		}
		});
	
	
	 

	$(".gorizontal-nav").on("click","a", function (event) {
		
		event.preventDefault();
		
		var id  = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});



});