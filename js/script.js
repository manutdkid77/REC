$(document).ready(function(){

	//Navbar Toggle

	$('.nav-toggle').on('click',function(){
		$('.nav').slideToggle();
		var icon=$('.nav-toggle i');

		if(icon.hasClass('ion-navicon-round')){
			$('.nav-toggle i').removeClass('ion-navicon-round');
			$('.nav-toggle i').addClass('ion-close-round');
		}else{
			$('.nav-toggle i').removeClass('ion-close-round');
			$('.nav-toggle i').addClass('ion-navicon-round');
		}
	});

	//Navbar active menuitem

	var item=$('.nav ul li span');

	$('.nav ul li a').on('click',function(){
		item.removeClass('active');
		$(this).next().addClass('active');
	});


});