$(function() {
	//Making color change on wheel and font
	$(document).on('mouseover', 'area', function() {
		var id = this.title;
		console.log(id);
		console.log("this works");
		var color;
		$.getJSON("sdgicon.json", function(data) {
			color = data[id-1].color;
			var url = data[id-1].url;
			console.log(url);
			$("#background").animate({
				backgroundColor: color
			}, "fast");
			$(".whiteText").animate({
				color: "white"
			}, "slow");
			$(".coloredText").animate({
				color: color
			}, "slow");
			$("#namePaste").html(url);

			console.log(color);
		});
	});

	//making background image scroll differently
    $('#background').each(function(){
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });
	//Make IMG map responsive

});
