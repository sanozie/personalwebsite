//Functions
//Freeze page content scrolling
function freeze() {
	if($("html").css("position") != "fixed") {
		var top = $("html").scrollTop() ? $("html").scrollTop() : $("body").scrollTop();
		if(window.innerWidth > $("html").width()) {
			$("html").css("overflow-y", "scroll");
		}
		$("html").css({"width": "100%", "height": "100%", "position": "fixed", "top": -top});
	}
}

//Unfreeze page content scrolling
function unfreeze() {
	if($("html").css("position") == "fixed") {
		$("html").css("position", "static");
		$("html, body").scrollTop(-parseInt($("html").css("top")));
		$("html").css({"position": "", "width": "", "height": "", "top": "", "overflow-y": ""});
	}
}



$(function() {
	//Comencement Animation (starting when in scroll position)
	$(window).scroll(function() {
		var top_of_element = $("#projects").offset().top;
		var top_of_screen = $(window).scrollTop();
		console.log(top_of_screen);

		if (top_of_screen < top_of_element + 50){
			freeze();
			anime({
				targets: 'path',
				opacity: [0,1],
				delay: anime.stagger(300 ,{grid: [8, 3], from: "center"}, {start: 500}),
				easing: 'easeInOutQuad',
				complete: function(anim) {
					anime({
						targets: '#path873',
						scale: [1,2],

						easing: 'easeInOutQuad'
					});
					anime.remove('#path863');
					anime({
						targets: '#path863',
						//translateX: anime.stagger(10, {grid: [8, 3], from: 'center', axis: 'x'}),
						//translateY: anime.stagger(10, {grid: [8, 3], from: 'center', axis: 'y'}),
						delay: anime.stagger(200, {grid: [8, 3], from: 'center'}),
						easing: 'easeInOutQuad'
					});path863
				}
			});

		}
	});

});
