$ = jQuery;

$.fn.isCentered = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    let diffTop = elementBottom - viewportTop;
    let diffBot = viewportBottom - elementTop;

    return diffTop-diffBot < 200 && diffTop-diffBot > -400;
};


const serviceBlocks = $('.wp-block-services-section-service');

if(window.innerWidth < 700){
    $(window).scroll(function(){
        $.each(serviceBlocks, function () { 
            if($(this).isCentered()){
                console.log($(this).find('.title').html());
                $(this).find('.ssbService').css({'background' : 'none','transform' : 'translateY(-15px)'});
                $(this).find('.ssbService .bgLayer').css('opacity','1');
                $(this).find('.ssbService .icon').css('color','white');
                $(this).find('.ssbService .title').css('color','white');
                $(this).find('.ssbService .description').css('color','white');
                $(this).find('.ssbService .link a').css('background-color','rgba(6, 108, 180, 1)');
            } else {
                $(this).find('.ssbService').css({'background' : '','transform' : ''});
                $(this).find('.ssbService .bgLayer').css('opacity','0');
                $(this).find('.ssbService .icon').css('color','');
                $(this).find('.ssbService .title').css('color','');
                $(this).find('.ssbService .description').css('color','');
                $(this).find('.ssbService .link a').css('background-color','');
            }
        });
    });
} else {

    if(document.title.indexOf('Portfolio') !== -1){
        $("figure.wp-block-image").each(function() {
            // Generate a random number between 0 and 1
            var randomNumber = Math.random();

            // If the random number is less than 0.33, use optionA
            // If it is between 0.33 and 0.66, use optionB
            // Otherwise, don't add any name
            var name = "";
            if (randomNumber < 0.33) {
            name = "animated fadeInUp";
            } else if (randomNumber < 0.66) {
            name = "animated fadeInDown";
            }

            // Add the name as a class to the element, if a name was chosen
            if (name !== "") {
            $(this).addClass(name);
            }
        });
    }
}

jQuery(function($) {
    jQuery(document).ready(function(){  
		console.log('plsv4');
		jQuery('#acheivements').slick();
	});
});