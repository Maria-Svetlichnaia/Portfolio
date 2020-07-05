$(function () {

  // Navigation

  $('.home-menu, .back-to-top').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#header').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

  $('.tours-menu, a.arrow').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#destinations').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

  $('.about-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#about-us').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

  $('.contacts-menu, a.btn').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#contact-us').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

  // Popup window

  $('.btn-phone').click(function() {
    $('.popup-fade-form').fadeIn();
    return false;
  }); 
  
  $('.popup-close').click(function() {
    $(this).parents('.popup-fade-form').fadeOut();
    return false;
  });   
 
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade-form').fadeOut();
    }
  });
  
  $('.popup-fade-form').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();          
    }
  });

  // Burger-menu 

  $('.burger-menu-btn').click(function(){
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


  //Destinations-more

  $('.btn-tours').click(function(e) {
    event.preventDefault();
    $('.tours-more').toggleClass('tours-visible');
    $('.btn-show').css('display', 'none');
    $('.btn-hide').css('display', 'block');
  });

  $('.btn-hide').click(function(e) {
    $('.btn-show').css('display', 'block');
    $('.btn-hide').css('display', 'none');
    var elementClick = $(this).attr('href')
      var destination = $('#destinations').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
  })



  // Contacts sections - "Back to top" button

  $('a.back-to-top').hover(function (e) {
    $('div.arrow-up').toggleClass('arrow-up-bigger')
  });

  //E-mail Ajax Send
  $(".form, .form-pop-up").submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php",
      data: th.serialize()
    }).done(function() {
    $('.form-submitted-fade').css('display', 'block');
    $('.popup-fade-form').fadeOut();
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
          e.stopPropagation();
          $('.form-submitted-fade').fadeOut();
        }
     });
    $('.form-submitted-fade').click(function(e) {
        if ($(e.target).closest('.form-submitted').length == 0) {
          $(this).fadeOut();          
        }
      });
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  

});