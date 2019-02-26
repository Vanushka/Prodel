$(document).ready(function(){
	$('#slider').slick({
		dots: true,
		infinite: true,
		speed: 800,
		fade: true,
		autoplay: false,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		prevArrow: '<div class="prev-head-slider"><img src="./dist/img/prev.png"></div>',
		nextArrow: '<div class="next-head-slider"><img src="./dist/img/next.png"></div>',
		customPaging : function(slider, i) {
			return '<a class="pager"></a>';
		},
	});
});
