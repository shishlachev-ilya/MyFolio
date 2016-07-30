$(document).ready(function() {

	/*  анимация при прокрутке  */
    $(window).scroll(function() {
        $('.animated').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 700) {
                $('.down').addClass('bounceInDown');
                $('.left').addClass('bounceInLeft');
                $('.right').addClass('bounceInRight');
                $('.up').addClass('bounceInUp');
            }
        });
    });
	
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


});