$(document).on('ready', function() {
         
    // Set the date we're counting down to
    var countDownDate = new Date("Feb 28, 2019 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days < 10) { days = "0" + days };
        if (hours < 10) { hours = "0" + hours };
        if (minutes < 10) { minutes = "0" + minutes };
        if (seconds < 10) { seconds = "0" + seconds };
        // Display the result in the element with id="demo"
        document.getElementById("days").innerHTML = days + " дней";
        document.getElementById("timer").innerHTML = hours + ":"
            + minutes + ":<span>" + seconds + "</span>";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "ЯРМАРКА УЖЕ ЗАКОНЧИЛАСЬ:(";
            document.getElementById("timer").innerHTML =" "
        }
    }, 1000);

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
		 
    $("a#single_image").fancybox();
		 


		
    $("#collection .col-12").on('click', function (e) {
        var text = $(this).find('.charact-main').html();
        var mod = $('.modal .left-col');
        var rec = $(this).data('whatever');
        mod.html(' ');
        switch (rec) {
            case 1:
                {
                    $('<img>', { src: 'img/collection/karakul_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто каракулевое с воротником из куницы,Цвет Валенсия полоса');
                }
                break;
            case 2:
                {
                    $('<img>', { src: 'img/collection/karakul_norka_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто каракулевое с воротником из норки , цвет Пурпурный');
                }
                break;
            case 3:
                {
                    $('<img>', { src: 'img/collection/norka_grey_4.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто норковое с воротником  ,Цвет Серый Вельвет');
                }
                break;
            case 4:
                {
                    $('<img>', { src: 'img/collection/muton_kunica 1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто мутоновое с воротником из куницы,цвет Горький шоколад');
                }
                break;
            case 5:
                {
                    $('<img>', { src: 'img/collection/kunica_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из куницы, цвет Темный Соболь');
                }
                break;
            case 6:
                {
                    $('<img>', { src: 'img/collection/norka1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто норковое с воротником  ,Цвет Dark shadow вельвет');
                }
                break;
            case 7:
                {
                    $('<img>', { src: 'img/collection/norka_kunica_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто норковое с капюшоном из куницы , цвет Black peare');
                }
                break;
            case 8:
                {
                    $('<img>', { src: 'img/collection/muton_norka_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто мутоновое с воротником из норки , цвет Валенсия ');
                }
                break;
            case 9:
                {
                    $('<img>', { src: 'img/collection/norka_blue_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто норковое с воротником ,цвет Небесно-голубой ');
                }
                break;
            case 10:
                {
                    $('<img>', { src: 'img/collection/norka_sobol_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто норковое с капюшоном из соболя, Цвет Черный Бриллиант ');
                }
                break;
            case 11:
                {
                    $('<img>', { src: 'img/collection/kerli_ros_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из керли с воротником ,цвет розовый ');
                }
                break;
            case 12:
                {
                    $('<img>', { src: 'img/collection/kerli1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из керли с воротником ,цвет серый+голубой');
                }
                break;
            case 13:
                {
                    $('<img>', { src: 'img/collection/norka_wite_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из норки с капюшоном и поясом,цвет Белый');
                }
                break;
            case 14:
                {
                    $('<img>', { src: 'img/collection/norka_Gucci.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из норки, цвет Екатерина Вельвет');
                }
                break;
            case 15:
                {
                    $('<img>', { src: 'img/collection/norka_sobol_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из норки с отделкой соболь, цвет Милан Сага');
                }
                break;
            case 16:
                {
                    $('<img>', { src: 'img/collection/norka_oversize1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из норки с воротником куница,цвет Кипарис Вельвет');
                }
                break;
            case 17:
                {
                    $('<img>', { src: 'img/collection/muton_norka_short_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто мутоновое с отделкой из норки ,цвет Жемчуг');
                }
                break;
            case 18:
                {
                    $('<img>', { src: 'img/collection/enot-1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из енота ,цвет Бирюза');
                }
                break;
            case 19:
                {
                    $('<img>', { src: 'img/collection/sobol_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из соболя , цвет тон 1, седина 1');
                }
                break;
            case 20:
                {
                    $('<img>', { src: 'img/collection/muton_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто мутоновое с отделкой из норки ,цвет Орхидея');
                }
                break;
            case 21:
                {
                    $('<img>', { src: 'img/collection/fox_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из лисы , с воротником');
                }
                break;
            case 22:
                {
                    $('<img>', { src: 'img/collection/norka_kunica_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Пальто из норковое , с капюшоном из куницы,цвет Пастель');
                }
                break;
            case 23:
                {
                    $('<img>', { src: 'img/collection/silver fox_1.png', class: 'img-fluid' }).appendTo(mod);
                    $('<div>', {}).appendTo(mod);
                    mod.find('div').html(text);
                    $('<p>', { class: 'desc' }).appendTo(mod);
                    mod.find('.desc').text('Жилет из чернобурки,цвет натуральный ');
                }
                break;
        }
    });	
    $('.textload').on('click', function (e) {
        e.preventDefault();
        var text = $(this).prev();
        if (text.hasClass("open")) {
            $(this).text("Читать далее");
        }
        else {
            $(this).text("Скрыть");
        }
        text.toggleClass('open');
    });	
    $('#range .text-right').hide();
    $('#range .left-col .text-right').slice(0, 2).show();
    $('#range .right-col .text-right').slice(0, 2).show();
    $('#rangeload').on('click', function (e) {
        e.preventDefault();
        $('#range .left-col .text-right:hidden').slice(0, 2).show();
        $('#range .right-col .text-right:hidden').slice(0, 2).show();
    });
    $('#collection .col-12').slice(0, 4).toggleClass("element-invisible");
    $('#collectionload').on('click', function (e) {
        e.preventDefault();
        $('#collection .element-invisible').slice(0, 4).toggleClass("element-invisible");
    });
		
		 $(".charact-head").click(function() {
             var head = $(this);
             var main = head.next();
             head.toggleClass('active');
             main.slideToggle('slow');
             main.toggleClass('open');
    });
    
		
		  
           $(".dis-sl").slick({
               lazyLoad: 'ondemand',
               dots: true,
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1,
               prevArrow: '<div class="slick-prev-new"></div>',
               nextArrow: '<div class="slick-next-new"></div>'
    });

    $(function () {
        $('img.lazy').lazyload({
            failure_limit: 10
        });
    });
    $(".auction-sl").slick({
        lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev-new"></div>',
        nextArrow: '<div class="slick-next-new"></div>'
    });
    $(".certif-sl").slick({
        lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev-new"></div>',
        nextArrow: '<div class="slick-next-new"></div>'
    }); 
    $(".collection-sl").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
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
