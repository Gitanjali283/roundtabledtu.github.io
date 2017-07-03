$(document).ready(function(){

	$(window).scroll(function(){

		i = $(window).scrollTop();

		$('.home').css('background-position','0px '+ i/1.5 +'px');
		//$('.home .content').css('opacity',1 - (i/200));

		if(i>0)
		{
			$('header').css('background','rgba(255,255,255,1)');
			$('header .tab').css('color','#000');
		}

		else if(i==0)
		{
			$('header').css('background','rgba(255,255,255,0)');
			$('header .tab').css('color','#FFF');
		}

	});

	$('.link1').click(function(){
		x = $('.home').offset().top;
		$('body').animate({scrollTop: x},500);
	});

	$('.link2').click(function(){
		x = $('.about').offset().top;
		$('body').animate({scrollTop: x},500);
	});

	$('.link3').click(function(){
		x = $('.work').offset().top;
		$('body').animate({scrollTop: x},500);
	});

	$('.link4').click(function(){
		x = $('.join').offset().top;
		$('body').animate({scrollTop: x},500);
	});

	$('.link5').click(function(){
		x = $('.contact').offset().top;
		$('body').animate({scrollTop: x},500);
	});
});