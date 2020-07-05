$(function () {
	
	// Burger-menu 

  $('.burger-menu-btn, .home-menu').click(function(){
      $('.burger-menu, .burger-menu-button').toggleClass('active');
  });

  var menuOff = $ ('.burger-menu active');
        $(window).scroll(function() {
        if($(window).scrollTop() > 700) {}
        $('.burger-menu').css('display', 'none')
  });

  var menuOff = $('header-navigation');
        $(window).scroll(function() {
        if ($(window).scrollTop() < 400) {
        $('.burger-menu').css('display', 'block')
        };
  });

      // Navigation

$('.home-menu-footer').click(function() {
	var elementClick = $(this).attr('href')
	var destination = $('#header').offset().top;
	jQuery('html:not(:animated),body:not(:animated)').animate({
	  scrollTop: destination
		}, 800);
	return false;
});


  $('.about-me-menu, .btn-offer').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#about-me').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

  $('.skills-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#skills').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

  $('.certificates-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#certificates').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

   $('.recent-works-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#recent-works').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

   $('.contacts-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#contacts').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

   // About me section - open paragraphs

  $('.content-arrow').click(function(e) {
    event.preventDefault();
    $('.paragraph-3, .paragraph-4').toggleClass('paragraph-opened');
    $('.arrow-show').css('display', 'none');
    $('.arrow-hide').css('display', 'block');
  });

  $('.arrow-hide').click(function(e) {
    $('.arrow-show').css('display', 'block');
    $('.arrow-hide').css('display', 'none');
    $('.paragraph').toggleClass('.paragraph');
  })

  // Skills section - 

  $('.hard-skills-open').click(function(e) {
    event.preventDefault();
    $('.hard-skills-slider').css('display', 'block');
    $('.soft-skills-slider').css('display', 'none');
  })

   $('.soft-skills-open').click(function(e) {
    event.preventDefault();
    $('.soft-skills-slider').css('display', 'block');
    $('.hard-skills-slider').css('display', 'none');
  })

  // carousel

  $('.skills-owl-carousel').owlCarousel({
    loop:true,
    margin:35,
    nav:true,
    autoWidth:true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})

  // Recent works section

  $('.landing-pages-open').click(function(e) {
    event.preventDefault();
    $('.landing-pages').css('display', 'block');
    $('.first-screen-design').css('display', 'none');
    $('.banners').css('display', 'none');
    $('.business-cards').css('display', 'none');
  })

  $('.first-screen-design-open').click(function(e) {
    event.preventDefault();
    $('.first-screen-design').css('display', 'block');
    $('.landing-pages').css('display', 'none');
    $('.banners').css('display', 'none');
    $('.business-cards').css('display', 'none');
  })

  $('.banners-open').click(function(e) {
    event.preventDefault();
    $('.banners').css('display', 'block');
    $('.landing-pages').css('display', 'none');
    $('.first-screen-design').css('display', 'none');
    $('.business-cards').css('display', 'none');
  })

  $('.business-cards-open').click(function(e) {
    event.preventDefault();
    $('.business-cards').css('display', 'block');
    $('.landing-pages').css('display', 'none');
    $('.first-screen-design').css('display', 'none');
    $('.banners').css('display', 'none');
  })


  // Carousel

  $('.works-owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    nav:true,
    autoWidth:true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:2
        }
    }
})

  // Certificates section

  $('.arrow-pointing-left').click(function(e){
    event.preventDefault();
    $('.info-view').css('display', 'block');
  })

  $('.arrow-pointing-right').click(function(e){
    event.preventDefault();
    $('.info-view').css('display', 'none');
  })

  $('.wayup-certificate-blurred').click(function(){
    $('.wayup-certificate').css('display', 'block');
    $('.coursera-certificate').css('display', 'none');
  })

   $('.coursera-certificate-blurred').click(function(){
    $('.coursera-certificate').css('display', 'block');
    $('.wayup-certificate').css('display', 'none');
  })

  // Popup windows - recent works

  $('.zoom-in-1').click(function() {
    $('.banner-1-fade').fadeIn();
    return false;
  }); 

  $('.zoom-in-2').click(function() {
    $('.banner-2-fade').fadeIn();
    return false;
  }); 

  $('.zoom-in-3').click(function() {
    $('.business-card-1-fade').fadeIn();
    return false;
  });

  $('.landing-page-2-responsive-open').click(function() {
    $('.landing-page-2-fade').fadeIn();
    return false;
  });

  $('.landing-page-3-open-photo, .landing-page-3-open-btn').click(function() {
    $('.landing-page-3-fade').fadeIn();
    return false;
  });

  $('.first-screen-1-open-photo, .first-screen-1-open-btn').click(function() {
    $('.first-screen-1-fade').fadeIn();
    return false;
  });

  $('.first-screen-2-open-photo, .first-screen-2-open-btn').click(function() {
    $('.first-screen-2-fade').fadeIn();
    return false;
  });

  $('.first-screen-3-open-photo, .first-screen-3-open-btn').click(function() {
    $('.first-screen-3-fade').fadeIn();
    return false;
  });

  $('.first-screen-4-open-photo, .first-screen-4-open-btn').click(function() {
    $('.first-screen-4-fade').fadeIn();
    return false;
  });

  $('.popup-close').click(function() {
    $(this).parents('.popup-fade').fadeOut();
    return false;
  });   
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
    }
  });
  
  $('.popup-fade').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();          
    }
  });

//E-mail Ajax Send

  $("form").submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php",
      data: th.serialize()
    }).done(function() {
    $('.form-submitted-fade').css('display', 'block');
    // $(document).keydown(function(e) {
    //     if (e.keyCode === 27) {
    //       e.stopPropagation();
    //       $('.form-submitted-fade').fadeOut();
    //     }
    //  });
    // $('.form-submitted-fade').click(function(e) {
    //     if ($(e.target).closest('.form-submitted').length == 0) {
    //       $(this).fadeOut();          
    //     }
    //   });
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

})