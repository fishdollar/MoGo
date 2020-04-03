$(document).ready(function(){
	$("div.rollout").click(function(){
		if ($(this).next().css('display') == 'block') {
			$(this).next().slideUp(300);
			$('div.rollout').children('img:last-of-type').css({"transform": 'scale(1, 1)'});
		}
		else {
			$('p.rollout').slideUp(300);
			$(this).next().slideDown(300);
			$(this).children('img:last-of-type').css({"transform": 'scale(1, -1)'});
			$('div.rollout').not(this).children('img:last-of-type').css({"transform": 'scale(1, 1)'});
		}
	});
	$('#piccontainer').children("img").mouseover(function(){

	});
});