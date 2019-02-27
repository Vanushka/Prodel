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
});

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
	autoplaySpeed: 2000,
	arrows: false,
	responsive: [
		{
			 breakpoint: 768,
			 settings: {
				slidesToShow: 1
			}
		}
	]
});
$('.slick-slide').css({'outline':'none'});
