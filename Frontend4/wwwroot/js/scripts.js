$(document).on('ready', function() {
         
		
		$(".rollover").imageChanger({
  			transition: false
		});

		 
		 
		 
		 
		 $('.row-foto').magnificPopup({
  			delegate: 'a', // child items selector, by clicking on it popup will open
  			type: 'image',
			gallery:{
   				enabled:true
  			},
			mainClass: 'mfp-fade'


  			// other options
		});
		 
		 
	
		$('.row-logistics').magnificPopup({
  			delegate: 'a', // child items selector, by clicking on it popup will open
  			type: 'image',
			gallery:{
   				enabled:true
  			},
			mainClass: 'mfp-fade'


  			// other options
		});
		 
		 
		 
		 


		
		
		
		
		
		
		 $(".charact-head").click(function() {
             var head = $(this);
             var main = head.next();
             head.toggleClass('active');
             main.slideToggle('slow');
             main.toggleClass('open');
    });
    $('#collection .col-12').slice(0, 4).show();
    $('#collectionload').on('click', function (e) {
        alert('!!');
        e.preventDefault();
        $('#collection .col-12:hidden').slice(0, 4).show();
    });
		
		  
           $(".dis-sl").slick({
             
               dots: true,
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1,
               prevArrow: '<div class="slick-prev-new"></div>',
               nextArrow: '<div class="slick-next-new"></div>'
    });

    $(".auction-sl").slick({

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev-new"></div>',
        nextArrow: '<div class="slick-next-new"></div>'
    });
    $(".certif-sl").slick({

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev-new"></div>',
        nextArrow: '<div class="slick-next-new"></div>'
    }); 
    $(".collection-sl").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev-col hover-template"><span class="charact-icon"></span></div>',
        nextArrow: '<div class="slick-next-col hover-template"><span class="charact-icon"></span></div>'
    }); 
           
         });






// Dinrosta Theme JavaScript

(function($) {
	"use strict"; // Start of use strict


	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.nav-link').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 150)
		}, 1500, 'easeInOutBack');
		event.preventDefault();
	});
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 150)
        }, 1500, 'easeInOutBack');
        event.preventDefault();
    });
	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '#navbarNavDropdown',
		offset: 200
		
	});
	
	
	$(window).scroll(function() {
  /* affix after scrolling 100px */
  if ($(document).scrollTop() > 100) {
    $('.navbar').addClass('affix');
  } else {
    $('.navbar').removeClass('affix');
  }
});
	
	$(".action-audit").click(function(event) {
			
			$("#form-modal h5").val('Заявка на аудит');
			return false;
	});
	
	$(".action-call").click(function(event) {
			var title = $(this).html();
			$("#form-modal h5").html('Заказать звонок');
			return false;
	});
	
	$(".action-try").click(function(event) {
			var title = $(this).html();
			$("#form-modal h5").html('Попробовать');
			return false;
	});


	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function(){ 
			$('.navbar-toggle:visible').click();
	});

	// Initialize lazy image loading
	//$('img.lazy').lazyload();

	// Fix nested modals problem (if topmost modal is closed, then scrolling is applied to the body)
	

	//
    
   
    
    
        var dotwidth1 = 0;
        $('.dis-sl').children('div').each(function (index, element) {
            dotwidth1 += 21;
        }
        );
        var dotwidth2 = 0;
        $('.auction-sl').children('div').each(function (index, element) {
            dotwidth2 += 21;
        }
        );
        var dotwidth3 = 0;
        $('.certif-sl').children('div').each(function (index, element) {
            dotwidth3 += 21;
        }
        );
  

    var timerId = setTimeout(function tick() {
        var ras1 = (($('.dis-sl').width() - dotwidth1) / 2) - 30;
        $('.dis-sl .slick-prev-new').css("left", ras1 + "px");
        $('.dis-sl .slick-next-new').css("right", ras1 + "px");
        var ras2 = (($('.auction-sl').width() - dotwidth2) / 2) - 30;
        $('.auction-sl .slick-prev-new').css("left", ras2 + "px");
        $('.auction-sl .slick-next-new').css("right", ras2 + "px");
        var ras3 = (($('.certif-sl').width() - dotwidth3) / 2) - 30;
        $('.certif-sl .slick-prev-new').css("left", ras3 + "px");
        $('.certif-sl .slick-next-new').css("right", ras3 + "px");
        timerId = setTimeout(tick, 200);
    }, 200);
})(jQuery); // End of use strict
