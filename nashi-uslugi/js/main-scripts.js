$(document).ready(function(){

	//плавный якорь
	$('.header a[href^="#"], .footer a[href^="#"], .footer__to-up').click(function(){
		var target = $(this).attr('href');
		$('html,body').animate({scrollTop: $(target).offset().top-56}, 1000);
		return false;
	});
	
	//попап "записаться на приём"
	$('.sign-up').click(function(){
		$('.popup_make-appointment, .bg').show();
		ym(56780170,'reachGoal','formOpening');
	});

	$('.bg, .popup_make-appointment__close').click(function(){
		$('.popup_make-appointment, .bg').hide();
	});

	//появление меню в планшетной и моб версии
	$('.header__menu').click(function(){
		$(this).parents(".header").toggleClass("active");
	});

	$('.header ul a').click(function(){
		$(this).parents(".header").removeClass("active");
	});

	//открытие и закрытие сертификатов в карточке врача
	$('.education-certificates__text').click(function(){
		$(this).toggleClass("active").parents(".education-certificates").toggleClass("active");
	});

	//слайдер
	if ($('.our-doctors__slider').length > 0) {
		$('.our-doctors__slider').slick({
		 	slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true,
			arrows: true,
			responsive: [
			    {
				    breakpoint: 1006,
				    settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3,
				        infinite: true,
				        dots: true
				    }
			    },
			    {
				    breakpoint: 767,
				    settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2,
				        infinite: true,
				        dots: false
				    }
			    },
			    {
				    breakpoint: 479,
				    settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true,
				        dots: false
				    }
			    }
	  		]
		});
	}
	
	if ($('.reviews__slider').length > 0) {
		$('.reviews__slider').slick({
		 	slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true,
			arrows: true,
			responsive: [
			    {
				    breakpoint: 1006,
				    settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3,
				        infinite: true,
				        dots: true
				    }
			    },
			    {
				    breakpoint: 767,
				    settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2,
				        infinite: true,
				        dots: false
				    }
			    },
			   	{
				    breakpoint: 479,
				    settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true,
				        dots: false
				    }
			    }
	  		]
		});
	}
	if ($(window).width() < 768){
		$('.licenses__wr-item').slick({
		 	slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
			dots: false,
			arrows: true,
			// responsive: [
			//     {
			// 	    breakpoint: 479,
			// 	    settings: {
			// 	        slidesToShow: 1,
			// 	        slidesToScroll: 1,
			// 	        infinite: true,
			// 	        dots: false
			// 	    }
			//     }
	  // 		]
		});

		$('.main-about-us__photo-slide').slick({
		 	slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			dots: false,
			arrows: true,
			// responsive: [
			//     {
			// 	    breakpoint: 479,
			// 	    settings: {
			// 	        slidesToShow: 1,
			// 	        slidesToScroll: 1,
			// 	        infinite: true,
			// 	        dots: false
			// 	    }
			//     }
	  // 		]
		});
	}
	
	

	//попап "читать далее"
	$('.reviews__text span').click(function(){
		var rate = $(this).parents(".slide").find(".reviews__rate").attr("style");
		var reviews_name = $(this).parents(".slide").find(".reviews__name").text();
		var reviews_date = $(this).parents(".slide").find(".reviews__date").text();
		var reviews_text = $(this).parents(".slide").find(".reviews__text-hidden").text();
		$('.popup_read-more__rate').attr("style", rate);
		$('.popup_read-more__name').text(reviews_name);
		$('.popup_read-more__date').text(reviews_date);
		$('.popup_read-more__text').text(reviews_text);
		$('.popup_read-more, .bg').show();
	});

	$('.bg, .popup_read-more__close').click(function(){
		$('.popup_read-more, .bg').hide();
	});
	
	//маска на дату
	if ($('.date-mask').length > 0) {
		$('.date-mask').mask('99.99.9999');
	}

	//маска на телефон
	$(".phone-mask").mask("+7 (999) 999-99-99");

	//select
	$('.choose-specialization').click(function() {
		$(this).toggleClass('open');
		$('.choose-specialization').not($(this)).removeClass('open');
	});

	$(document).mouseup(function(e){ 
		if ( !$(".choose-specialization").is(e.target) && $(".choose-specialization").has(e.target).length === 0 ) { 
			$('.choose-specialization').removeClass("open"); 
		} 
	});


	$('.slick-dots').each(function(){
		var sl_li = $(this).find("li").length;
		$(this).siblings('.slick-prev').css('margin-left', -65 + (sl_li / 2 * -30) );
		$(this).siblings('.slick-next').css('margin-right', -65 + (sl_li / 2 * -30) );
	});

	if ($(".education-certificates__wr-item a").length > 0) {
		// facybox gallery
		$(".education-certificates__wr-item a").fancybox({
			hash            : false,
			loop            : true,
			keyboard        : true,
			animationEffect : false,
			arrows          : true,
			clickContent    : false
		});
	}

	if ($(".licenses__wr-item1 a").length > 0) {
		$(".licenses__wr-item1 a").fancybox({
			hash            : false,
			loop            : true,
			keyboard        : true,
			animationEffect : false,
			arrows          : true,
			clickContent    : false
		});
	}

	if ($(".licenses__wr-item2 a").length > 0) {
		$(".licenses__wr-item2 a").fancybox({
			hash            : false,
			loop            : true,
			keyboard        : true,
			animationEffect : false,
			arrows          : true,
			clickContent    : false
		});
	}
});