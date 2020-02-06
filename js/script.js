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
		play: 3000,
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
	$(document).ready(function() {
	    $(".navbar-brand").click(function(event) {
	        event.preventDefault();
	        $("html, body").animate({ scrollTop: 0 }, "slow");
	        return false;
	    });

	});
    
    var arrowBounce = function() {
    var arrow = $(".arrow");
  
    if (arrow.hasClass("lift")) {
        arrow.removeClass("lift");
  } else {
        arrow.addClass("lift");
  }

};

// run the arrowBounce function every 800ms
setInterval(arrowBounce, 800);
    


});

let noon = 12;


let showCurrentTime = () => {
    
    console.log("hello");
    
    let clock = document.getElementById('clock');
    
    let currentTime = new Date();
    
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
    
    if (hours => noon) {
        
        meridian = "PM";
    }
    
    else if (hours > noon) {
        hours-=12;
    }
    
    if (minutes < 10) {
        minutes+= "0";
    }
    
    if (seconds < 10) {
        seconds+= "0";
    }
    
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
    
    clock.innerTextr = clockTime;
};


let updateClock = () => {
    let time = new Date().getHours();
    
    showCurrentTime();
};


updateClock();

let oneSec = 1000;

setInterval(updateClock, oneSec);
    
    
    
