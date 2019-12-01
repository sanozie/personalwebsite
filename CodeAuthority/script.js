//Preparing different types of "data" used for the services div and blog div
const serviceData = {
		"customSoftDev": {
			"title": "Custom Software Development",
			"info": "We develop custom software tailored exclusively to your business needs by utilizing proven methods and emerging technologies. Whether you need product development consulting for your current software or a custom-made software solution for your business, we’ve got you covered.",
			"pic": "imgs/infos/softdev.png"
		},
		"cloudSolutions": {
			"title": "Cloud Solutions",
			"info": "We create fast, scalable, and secure custom cloud solutions for business ranging from startups to enterprises. Our developers are capable cloud architects who utilize established computer software to build a custom cloud solution to enhance your employees’ productivity and efficiency.",
			"pic": "imgs/infos/cloud.png"
		},
		"mobile": {
			"title": "Mobile Applications",
			"info": "Our cross-platform mobile app developers’ goal is to create an accessible, functional and engaging platform for your users to interact with your business. We can enhance your current app or create a new, custom app while ensuring a consistent experience across devices, so your user can experience your brand whether they’re an iOS or Android user.",
			"pic": "imgs/infos/mobile.png"
		},
		"digitalMarketing": {
			"title": "Digital Marketing",
			"info": "Code Authority works to give your business a competitive edge with custom, comprehensive digital marketing strategies. Our digital marketing agency is your one-stop resource for professionally branding and rebranding, as well as showcasing your brand on the appropriate channels such as social media platforms and other necessary websites.",
			"pic": "imgs/infos/marketing.png"
		},
		"bussIntel": {
			"title": "Business Intelligence",
			"info": "Invest in your company’s information systems. Code Authority’s business intelligence professionals improve the data gathering practices of your company. We do this by offering business intelligence and analytics solutions to companies looking to develop, understand and review data pertinent to the business.",
			"pic": "imgs/infos/intel.png"
		},
		"uxui": {
			"title": "Interactive UX/UI",
			"info": "Our UI/UX designers are experts at developing an experience to remember for top-of-mind awareness of your brand. Code Authority can establish or upgrade your current platforms to establish a journey for your customer base and reflect your business’ vision.",
			"pic": "imgs/infos/ux.png"
		}
}
const blogData = {
	"featured": [
		{
			"id": "blog1",
			"title": "What's JavaScript?",
			"text": "Find out now!",
			"date": "Oct. 20",
			"pic": "imgs/blogs/blogback1.png"
		},
		{
			"id": "blog2",
			"title": "Which City is better: Chicago or Dallas?",
			"text": "Find out now!",
			"date": "Oct. 20",
			"pic": "imgs/blogs/blogback2.png"
		},
		{
			"id": "blog3",
			"title": "Which is better: Front or Back end?",
			"text": "Find out now!",
			"date": "Oct. 20",
			"pic": "imgs/blogs/blogback3.png"
		}
	]
}

//Pasting into services
function servicePaste(title, info, pic) {
	$("#service-title").text(title);
	$("#service-text").text(info);
	$("#service-pic").attr("src", pic);
}
function serviceVarSet(id) {
	switch(id) {
		case "softwareDevIcon":
			var title = serviceData.customSoftDev.title;
			var info = serviceData.customSoftDev.info;
			var pic = serviceData.customSoftDev.pic;
			servicePaste(title, info, pic);
			break;
		case "cloudIcon":
			var title = serviceData.cloudSolutions.title;
			var info = serviceData.cloudSolutions.info;
			var pic = serviceData.cloudSolutions.pic;
			servicePaste(title, info, pic);
			break;
		case "mobileIcon":
			var title = serviceData.mobile.title;
			var info = serviceData.mobile.info;
			var pic = serviceData.mobile.pic;
			servicePaste(title, info, pic);
			break;
		case "marketingIcon":
			var title = serviceData.digitalMarketing.title;
			var info = serviceData.digitalMarketing.info;
			var pic = serviceData.digitalMarketing.pic;
			servicePaste(title, info, pic);
			break;
		case "intelIcon":
			var title = serviceData.bussIntel.title;
			var info = serviceData.bussIntel.info;
			var pic = serviceData.bussIntel.pic;
			servicePaste(title, info, pic);
			break;
		case "uxIcon":
			var title = serviceData.uxui.title;
			var info = serviceData.uxui.info;
			var pic = serviceData.uxui.pic;
			servicePaste(title, info, pic);
			break;
	}
}

//Functions manipulating scroll speed
$.fn.scrollSpeed = function(){
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
	//Runnning functions on service icon click
	$(".icon").on("click", function()  {
		$(".icon").removeClass("active").addClass("inactive");
		$(this).removeClass("inactive").addClass("active");
		serviceVarSet($(this).attr("id"));
	});

	//Moving the hero background relative to mouse
	var focalpoint = $("nav").width()/2;
	$(document).on( "mousemove", function(event) {
		var x = event.pageX;
		var movemeter = focalpoint - x;
		var foreground = movemeter/550;
		var background = movemeter/575;
		$("#hero-back").css("transform", `translateX(${background}%)`);
		$("#header-text-container").css("transform", `translateX(${foreground}%)`);
	});

	//Scrolling Elements at different speeds
	$('[data-scroll-speed]').scrollSpeed();

	//Pasting featured blogs
	blogData.featured.forEach(function(data) {
		var newBlog = `
			<div id = "${data.id}" class = "col-md-3 d-flex flex-column blog-item">
				<div class = "row justify-content-end mb-auto">
					<p class = "blog-date">${data.date}</p>
				</div>
				<div class = "row">
					<div class = "col">
						<p class = "blog-title">${data.title}</p>
					</div>
				</div>
				<div class = "row">
					<div class = "col">
						<p class = "blog-text">${data.text}</p>
					</div>
				</div>
			</div>`
		$("#blog-container").append(newBlog);
		$(`#${data.id}`).css("backgroundImage", `url("${data.pic}")`);

		//pausing video when not on screen, to speed up site
		$(window).scroll(function() {
			var top_of_element = $("#video").offset().top;
			var bottom_of_element = $("#video").offset().top + $("#video").outerHeight();
			var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
			var top_of_screen = $(window).scrollTop();
			if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
				$('#video').trigger('play');
			} else {
				$('#video').trigger('pause');
			}
		});
	});
});
