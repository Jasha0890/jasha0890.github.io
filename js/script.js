$(window).on("load", function(){

	$(".loader .inner").fadeOut(1000, function(){
		$(".loader").fadeOut(1050);
	});

		$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false

		}

	});

})


$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false

	});

	var typed = new Typed(".typed", {
		strings: ["Software Developer.", "Web Developer.", "Student."],
		typeSpeed: 50,
		loop: true,
		startDelay: 1000,
		showCursor: false

	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	         938:{
	            items:4
	        }
	    }
	});

	
	

	var skillsTopOffset = $(".skillSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;



	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		         easing: 'easeInOut',
		         barColor: '#e15f41',
		         trackColor: false,
		         scaleColor: false,
		         lineWidth: 4,
		         size: 152,
		         onStep: function(from, to, percent) {
		         	$(this.el).find('.percent').text(Math.round(percent));
	         
	         	}

    		});



		}





		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 100) {
			console.log("hello")
			$('.counter').each(function() {
		 		var $this = $(this),
		      	countTo = $this.attr('data-count');
		  
		  	$({ countNum: $this.text()}).animate({
		    	countNum: countTo
		  		},

		  		{

		    duration: 1400,
		    easing:'linear',
		    step: function() {
		      $this.text(Math.floor(this.countNum));
		    		},
		    complete: function() {
		      $this.text(this.countNum);
		      
		    		}

		  		});  
		  
		  

			});

			countUpFinished = true;
		}

	});


	$("[data-fancybox]").fancybox();



	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false

			}

		});

		return false;

	});



	$("#navigation li a").click(function(e) {

		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50}, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if ($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}

		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}

	/*Scroll to top when arrow up clicked BEGIN*/
	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    if (height > 100) {
	        $('#back2Top').fadeIn();
	    } else {
	        $('#back2Top').fadeOut();
	    }
	});
	
	$(document).ready(function() {
	    $("#back2Top").click(function(event) {
	        event.preventDefault();
	        $("html, body").animate({ scrollTop: 0 }, "slow");
	        return false;
	    });

	});
	 /*Scroll to top when arrow up clicked END*/

});