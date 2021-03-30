$('.scroll-btn').on('click',function() {
    fullpage_api.moveSectionDown();
});
$('.header-name a').on('click',function() {
    fullpage_api.moveTo($(this).index() + 1);
});


$(document).ready(function() {

	$('#fullpage').fullpage({
		autoScrolling: true,
		navigation: true,
		scrollingSpeed: 1000,
	    easingcss3: 'cubic-bezier(1,.55,.73,.55)',
	    navigationTooltips: ['','About', 'Skills','Experience', 'Contact'],
	    normalScrollElements: '.section-main-content',
	    afterLoad: (origin, destination, direction) => {
			const section_dest = destination.item;
			const subtitle = section_dest.querySelectorAll('.section-subtitle span');
			const title = section_dest.querySelectorAll('.section-title span');
			const scrollBtn = section_dest.querySelectorAll('.scroll-btn');
	    	const rightNav = $('#fp-nav');

			if (destination.index === 0) {
				TweenMax.fromTo(rightNav, 1, {opacity: 0}, {opacity: 0});
				TweenMax.fromTo(title, 1.5, {y: '200'}, {y: '0'});
				TweenMax.fromTo(subtitle, 1.7, {y: '200'}, {y: '0'});
				TweenMax.fromTo(scrollBtn, 1.5, {y: '-100', opacity: 0}, {y: '0', opacity: 1, delay: 2});
			}else{
				TweenMax.fromTo(rightNav, 1, {opacity: 1}, {opacity: 1});
			}

	  //   	let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
			// tl.to(title, {y: '0%', duration: 0.7, stagger: 0.2});
	    },
	    onLeave: (origin, destination, direction) => {
			const section_dest = destination.item;
			const section_orig = origin.item;
			
			const header_name = $('.header-name');
			const header_name_span = $('.header-name span');

			const title = section_dest.querySelectorAll('.section-title');
			const title_up = section_orig.querySelectorAll('.section-title');

			const title_span = section_dest.querySelectorAll('.section-title span');
			const title_up_span = section_orig.querySelectorAll('.section-title span');

			const subtitle = section_dest.querySelectorAll('.section-subtitle');
			const subtitle_up = section_orig.querySelectorAll('.section-subtitle');

			const subtitle_span = section_dest.querySelectorAll('.section-subtitle span');
			const subtitle_up_span = section_orig.querySelectorAll('.section-subtitle span');




			const mountains = section_dest.querySelectorAll('.mountains');
			const mountains_up = section_orig.querySelectorAll('.mountains');

			const scrollBtn = section_dest.querySelectorAll('.scroll-btn');
			const scrollBtn_up = section_orig.querySelectorAll('.scroll-btn');

	    	const rightNav = $('#fp-nav');


			const section_text = section_dest.querySelectorAll('.section-text h2 span');
			const section_image = section_dest.querySelectorAll('.section-img img');

			const section_text_up = section_orig.querySelectorAll('.section-text h2 span');
			const section_image_up = section_orig.querySelectorAll('.section-img img');



			const section_text_right = section_dest.querySelectorAll('.section-text-right h2 span');
			const section_image_right = section_dest.querySelectorAll('.section-img-right img');

			const section_text_up_right = section_orig.querySelectorAll('.section-text-right h2 span');
			const section_image_up_right = section_orig.querySelectorAll('.section-img-right img');


			const clickHere = section_dest.querySelectorAll('.click-here-btn span');
			const clickHere_up = section_orig.querySelectorAll('.click-here-btn span');

			if(destination.index === 0){
				TweenMax.fromTo(mountains[0], 1.5, {y: '400'}, {y: '0'});
				TweenMax.fromTo(mountains[1], 1.5, {y: '400'}, {y: '0', delay: .5});
				TweenMax.fromTo(mountains[2], 1.5, {y: '200'}, {y: '0', delay: .9});

				TweenMax.fromTo(title_span, 1.5, {y: '-150%'}, {y: '0%', duration: 0.1, stagger: 0.2, delay: 1});
				TweenMax.fromTo(subtitle_span, 1, {y: '-150%'}, {y: '0%', duration: 0.1, stagger: 2.2, delay: 1.2});

				TweenMax.fromTo(title, 1.5, {y: '200'}, {y: '0', delay: 1.2});
				TweenMax.fromTo(subtitle, 1.7, {y: '200'}, {y: '0', delay: 1.2});

				TweenMax.fromTo(scrollBtn, 1.5, {y: '-100', opacity: 0}, {y: '0', opacity: 1, delay: 2});

				TweenMax.fromTo(rightNav, 1.5, {display: 'block'}, {display: 'none'});

				TweenMax.fromTo(header_name_span, 0.5, {y: '0%'}, {y: '-150%', duration: 0.1, stagger: 0.2, delay: 1});
				TweenMax.to(header_name, 1,{display: 'none', opacity: 0, delay: 1});
			}
			else if(destination.index === 1){
				TweenMax.fromTo(mountains_up[0], 1.5, {y: '0'}, {y: '400', delay: .3});
				TweenMax.fromTo(mountains_up[1], 1.5, {y: '0'}, {y: '400'});
				TweenMax.fromTo(mountains_up[2], 1.5, {y: '0'}, {y: '200'});

				TweenMax.fromTo(title_up, 2, {y: '0'}, {y: '500'});
				TweenMax.fromTo(subtitle_up, 2, {y: '0'}, {y: '500'});

				TweenMax.fromTo(title_up_span, 1.5, {y: '0%'}, {y: '-150%', duration: 0.1, stagger: 0.2});
				TweenMax.fromTo(subtitle_up_span, 1, {y: '0%'}, {y: '-150%', duration: 0.1, stagger: 2.2, delay: 0.2});

				TweenMax.fromTo(scrollBtn_up, 1, {y: '0', opacity: 1}, {y: '-100', opacity: 0});

				TweenMax.fromTo(rightNav, 1, {display: 'block'}, {display: 'block', delay: 0.5});
				if (origin.index === 0) {
					TweenMax.to(header_name, 1,{display: 'block', opacity: 1, delay: 0.5});
					TweenMax.fromTo(header_name_span, 0.5, {y: '-150%'}, {y: '0%', duration: 0.1, stagger: 0.2, delay: 1});
				}
			}

			if (destination.index != 0){
				TweenMax.fromTo(section_text, 1, {x: '150%'}, {x: '0%', duration: 5, stagger: 0.2, delay: 1.5});
				TweenMax.fromTo(section_image, 0.5, {x: "-150", opacity: 0}, {x: "0", opacity: 0.7, delay: 1.2});

				TweenMax.fromTo(section_text_up, 1, {x: '0%'}, {x: '150%', duration: 5, stagger: 0.2, delay: 0.3});
				TweenMax.fromTo(section_image_up, 0.5, {x: "0", opacity: 0.7}, {x: "-150", opacity: 0, delay: 0.2});

				TweenMax.fromTo(section_text_right, 1, {x: '-150%'}, {x: '0%', duration: 5, stagger: 0.2, delay: 1.5});
				TweenMax.fromTo(section_image_right, 0.5, {x: "150", opacity: 0}, {x: "0", opacity: 0.7, delay: 1.2});

				TweenMax.fromTo(section_text_up_right, 1, {x: '0%'}, {x: '-150%', duration: 5, stagger: 0.2, delay: 0.3});
				TweenMax.fromTo(section_image_up_right, 0.5, {x: "0", opacity: 0.7}, {x: "150", opacity: 0, delay: 0.2});

				TweenMax.fromTo(clickHere, 1, {y: '-150%'}, {y: '0', duration: 0.2, stagger: 0.2, delay: 1.6});
				TweenMax.fromTo(clickHere_up, 1, {y: '0%'}, {y: '-150%', duration: 0.2, stagger: 0.2, delay: 0.2});
			}else{
				TweenMax.fromTo(section_text_up, 1, {x: '0%'}, {x: '150%', duration: 5, stagger: 0.2, delay: 0.3});
				TweenMax.fromTo(section_image_up, 0.5, {x: "0", opacity: 0.7}, {x: "-150", opacity: 0, delay: 0.2});

				TweenMax.fromTo(section_text_up_right, 1, {x: '0%'}, {x: '150%', duration: 5, stagger: 0.2, delay: 0.3});
				TweenMax.fromTo(section_image_up_right, 0.5, {x: "0", opacity: 0.7}, {x: "-150", opacity: 0, delay: 0.2});
			}
		}
		

	});
	$(".section-img-right, .section-img").ripples({
	  	dropRadius: 20,
	  	perturbance: 3,
	});
	if(!$('#myCanvas').tagcanvas({
	    outlineColour: 'transparent',
	    reverse: true,
	    depth: 0.15,
	    fadeIn: 800,
	    maxSpeed: 0.1,
	    textFont: null,
	    textColour: null,
	    textHeight: 25,
	    weightMode:'both',
	    weight: true,
	    shape: "sphere",
	    weightGradient: {
	     0:    '#01d0ff'
	    }
	  },'tags')) {
	    // something went wrong, hide the canvas container
	    $('#myCanvasContainer').hide();
	  }

	// const view_details = document.querySelectorAll(".view-details");
	// view_details.forEach(btn =>{
	// 	btn.addEventListener("mouseenter", function(e){
	// 		let x = e.clientX - e.target.offsetLeft;
	// 		let y = e.clientY - e.target.offsetTop;

	// 		var details_bg = document.querySelectorAll('.details_bg');
	// 		details_bg[0].style.display = "block";
	// 		details_bg[0].style.left = x + "px";
	// 		details_bg[0].style.top = y + "px";
	// 		console.log(details_bg);
		
	// 	})
	// })


	var choices = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	var styles = ['to right', 'to bottom right', '-90deg'];
	var color;
	

	function progress_random(){
		color = "#";
		for (var i = 0; i<6;i++){
			var char = Math.floor(Math.random()*choices.length);
			color += choices[char];
		}
		return color;
	}
	function applyChanges(color1, color2, childNum){
		var bg="";
		var style = Math.floor(Math.random() * styles.length);
		bg = 'linear-gradient('+ styles[style] + "," + color1 + "," + color2 +")";
		$(".container-fluid .skills:nth-child("+ childNum +") .skill-percent .skill-progress").css('background',bg);
	}


	function changeBg(){
		var skills_list = $(".skills");
		for (var i=0; i<skills_list.length; i++){
			var color1 = progress_random();
			var color2 = progress_random();
			var childNum = i;
			applyChanges(color1, color2, childNum);
		}
	}


	$(".view-details").on("click", function(e){
		x = e.pageX;
		y = e.pageY;
		$(".details_bg").css({top: y, left: x});
		$(".details_bg").css({width: "200%", height: "400%"});
		console.log(x);
		fullpage_api.setAllowScrolling(false);
		// TweenMax.fromTo($(".section-about-content"), 1, {opacity: 0}, {display: 'flex', opacity: 1, delay: 2});
		
		if ($(this).data("detail") == "about") {
			TweenMax.fromTo($(".section-about-content"), 1, {y: "-40%", opacity: 0}, {display: 'block', y: "-50%", opacity: 1, delay: 1});
		}
		else if ($(this).data("detail") == "skills") {
			TweenMax.fromTo($(".section-skills-content"), 1, {y: "-40%", opacity: 0}, {display: 'block', y: "-50%", opacity: 1, delay: 1});
			changeBg();
		}
		else if ($(this).data("detail") == "experience") {
			TweenMax.fromTo($(".section-experience-content"), 1, {y: "-40%", opacity: 0}, {display: 'block', y: "-50%", opacity: 1, delay: 1});
		}
		else if ($(this).data("detail") == "contact") {
			TweenMax.fromTo($(".section-contact-content"), 1, {y: "-40%", opacity: 0}, {display: 'block', y: "-50%", opacity: 1, delay: 1});
		}
	});
	$(".details_bg").on("click", function(e){
		console.log(this);
		x = e.pageX;
		y = e.pageY;
		console.log(x);
		$(this).css({top: y, left: x});
		$(this).css({width: "0%", height: "0%"});
		fullpage_api.setAllowScrolling(true);
		TweenMax.fromTo($(".section-main-content"), 0.5, {y: "-50%", opacity: 1}, {display: 'none', y: "-40%", opacity: 0, delay: 0});
	    $('.close-tooltip').css({opacity: 0});
	});

	$('.details_bg').mousemove(function (e) {
	    $('.close-tooltip').css({left: e.pageX - 100, top: e.pageY + 10});
	});
	$('.details_bg').mouseenter(function (e) {
	    $('.close-tooltip').css({opacity: 1});
	});
	$('.details_bg').mouseout(function (e) {
	    $('.close-tooltip').css({opacity: 0});
	});






	



	// var colors = ["#385c78", "#9d302f"],
	//     selectedColor = colors[Math.floor(Math.random()*colors.length)]
	//     header = $("div#header");
	    
	//     header.css("background-color", selectedColor);
});

