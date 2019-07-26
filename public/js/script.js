//Functions
$.fn.strech_text = function(){
	var elmt          = $(this),
		cont_width    = elmt.width(),
		txt           = elmt.html(),
		one_line      = $('<span class="stretch_it">' + txt + '</span>'),
		nb_char       = elmt.text().length,
		spacing       = cont_width/nb_char,
		txt_width;

	elmt.html(one_line);
	txt_width = one_line.width();

	if (txt_width < cont_width){
		var  char_width     = txt_width/nb_char,
			ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ;

		one_line.css({'letter-spacing': ltr_spacing});
	} else {
		one_line.contents().unwrap();
		elmt.addClass('justify');
	}
};
$.fn.moveIt = function(){
	var $window = $(window);
	var instances = [];

	$(this).each(function(){
		instances.push(new moveItItem($(this)));
	});

	window.addEventListener('scroll', function(){
		var scrollTop = $window.scrollTop();
		instances.forEach(function(inst){
			inst.update(scrollTop);
		});
	}, {passive: true});
}
var moveItItem = function(el){
	this.el = $(el);
	this.speed = parseFloat(this.el.attr('data-scroll-speed'));
};
moveItItem.prototype.update = function(scrollTop){
	this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

$(function() {
	//Moving the Profile Pics
	var focalpoint = $(document).width()/2;
	var offset = $(".design").outerWidth()/2;
	var currentPosition = focalpoint-offset;
	$(document).on( "mousemove", function(event) {
		var x = event.pageX;
		var movemeter = -(x - focalpoint);
		var figure3pos = currentPosition + movemeter/10;
		var figure6pos = movemeter/45;
		$(".design").css("left", figure3pos);
		$("#samanozie").css("left", figure6pos);
		var background = "linear-gradient("+movemeter/20+"deg, #be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)";
		$("#samanozie").css("background-image", background);
		});

	//streching the header text
	$('.stretch').each(function(){
		$(this).strech_text();
	});

	//Making the landing elements move at different speeds on scroll
	$('[data-scroll-speed]').moveIt();
});
