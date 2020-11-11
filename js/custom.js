
//projects Counter start here

if(jQuery('.ab1').length > 0){
$('.ab1').countUp({
  'time': 2000,
  'delay': 20
});
}
if(jQuery('.video-inner').length > 0){
$(function () {
		jQuery("a.car-play").YouTubePopUp();
		jQuery("a.car-play").YouTubePopUp({
			autoplay: 0
		}); // Disable autoplay
	});
}

//projects Counter close here

if(jQuery('.testi-owl').length > 0){
$('.testi-owl').owlCarousel({
    loop:true,
	autoplay:true,
	dots:false,
	autoplayTimeout:3000,
	smartSpeed:1200,
    nav:false,
	navText: ["<i class='la la-angle-left lefti'></i>","<i class='la la-angle-right righti'></i>"],
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:1,
        },
		800:{
            items:1,
        },
        1200:{
            items:3,
        }
    }
});
}