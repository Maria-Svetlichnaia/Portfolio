$(function() {

	// Navigation

	$('.home-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#header').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

    $('.courses-menu, .btn-offer').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#courses').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

    $('.teachers-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#teachers').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

    $('.feedback-menu').click(function() {
      var elementClick = $(this).attr('href')
      var destination = $('#feedback').offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({
          scrollTop: destination
        }, 800);
      return false;
    });

    // Feedback section - hover effect

    $('.review-item-1').hover(function() {
	    $('.review-1-open').css('display', 'block');
	}, function() {
		$('.review-1-open').css('display', 'none');
  });

     $('.review-item-2').hover(function() {
	    $('.review-2-open').css('display', 'block');
	}, function() {
		$('.review-2-open').css('display', 'none');
  });

      $('.review-item-3').hover(function() {
	    $('.review-3-open').css('display', 'block');
	}, function() {
		$('.review-3-open').css('display', 'none');
  });

       $('.review-item-4').hover(function() {
	    $('.review-4-open').css('display', 'block');
	}, function() {
		$('.review-4-open').css('display', 'none');
  });

        $('.review-item-5').hover(function() {
	    $('.review-5-open').css('display', 'block');
	}, function() {
		$('.review-5-open').css('display', 'none');
  });

         $('.review-item-6').hover(function() {
	    $('.review-6-open').css('display', 'block');
	}, function() {
		$('.review-6-open').css('display', 'none');
  });

          $('.review-item-7').hover(function() {
	    $('.review-7-open').css('display', 'block');
	}, function() {
		$('.review-7-open').css('display', 'none');
  });

    // Feedback section 

    // popup window 1

      $('.review-1-click').click(function() {
	    $('.review-1').fadeIn();
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

	  // popup window 2

	  $('.review-2-click').click(function() {
	    $('.review-2').fadeIn();
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

	  // popup window 3

	  $('.review-3-click').click(function() {
	    $('.review-3').fadeIn();
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

	  // popup window 4

	  $('.review-4-click').click(function() {
	    $('.review-4').fadeIn();
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

	  // popup window 5

	  $('.review-5-click').click(function() {
	    $('.review-5').fadeIn();
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

	  // popup window 6

	  $('.review-6-click').click(function() {
	    $('.review-6').fadeIn();
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

	  // popup window 7

	  $('.review-7-click').click(function() {
	    $('.review-7').fadeIn();
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

})