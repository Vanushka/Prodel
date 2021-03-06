$(document).ready(function(){
	$('#slider').slick({
		dots: true,
		infinite: true,
		speed: 800,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		prevArrow: '<div class="prev-head-slider"><img src="./dist/img/prev.png"></div>',
		nextArrow: '<div class="next-head-slider"><img src="./dist/img/next.png"></div>',
		customPaging : function(slider, i) {
			return '<a class="pager"></a>';
		},
	});

if ($(window).width() >= 768) {
	$('#viewedProducts').slick({
		rows: 2,
		slidesToShow: 7,
		infinite: true,
		draggable: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		swipe: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
	});
} else {
	$('#viewedProducts').slick({
		rows: 2,
		arrows: false,
		lazyLoad: 'ondemand',
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 2,
		slidesToScroll: 1,
	});
};

	if ($(window).width() >= 768) {
		$('#popularProducts').slick({
			rows: 2,
			slidesToShow: 6,
			infinite: true,
			draggable: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			swipe: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
		});
	} else {
		$('#popularProducts').slick({
			rows: 2,
			arrows: false,
			lazyLoad: 'ondemand',
			infinite: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 2,
			slidesToScroll: 1,
		});
	};

	if ($(window).width() >= 768) {
		$('#water').slick({
			rows: 1,
			slidesToShow: 6,
			infinite: true,
			draggable: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			swipe: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
		});
	} else {
		$('#water').slick({
			arrows: false,
			lazyLoad: 'ondemand',
			infinite: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 2,
			slidesToScroll: 1,
		});
	};

	if ($(window).width() >= 768) {
		$('#fruits').slick({
			rows: 1,
			slidesToShow: 6,
			infinite: true,
			draggable: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			swipe: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
		});
	} else {
		$('#fruits').slick({
			arrows: false,
			lazyLoad: 'ondemand',
			infinite: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 2,
			slidesToScroll: 1,
		});
	};

	if ($(window).width() >= 768) {
		$('#milk').slick({
			rows: 1,
			slidesToShow: 6,
			infinite: true,
			draggable: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			swipe: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
		});
	} else {
		$('#milk').slick({
			arrows: false,
			lazyLoad: 'ondemand',
			infinite: true,
			speed: 800,
			autoplay: true,
			autoplaySpeed: 5000,
			slidesToShow: 2,
			slidesToScroll: 1,
		});
	};

	$(window).scroll(function() {
		var top = $(this).scrollTop();
		if ( top >= 200 ) {
			$("#navToggle").removeClass("navBurger");
			$("#navToggle").addClass("downBurger");
		} else if ( top <= 200 ) {
			$(".navBurger").removeClass("downBurger");
			$("#navToggle").addClass("navBurger");
		}
	});

	$("#navToggle").click(function() {
		$(this).toggleClass("active");
		$(".overlay").toggleClass("open");
		$("body").toggleClass("locked");
	});
	$(".good-unit .plus").click(function() {
		$(this).toggleClass("minus");
		$(this).toggleClass("plus");
	});

});
