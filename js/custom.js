// Home page slider  Start//
 $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow:4,
        slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	 {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
 ]		   
    });

 $(".regular1").slick({
        dots: false,
        infinite: true,
        slidesToShow:4,
        slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
	 {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
 ]		   
    });
// number count	truncate Text

// onclick close dive
	$(".close-01-outer").click(function(){
	  $(".your-trust-outer").hide();
});

// Button show More/Less button text and functionality
jQuery("#click-event").click( function(e){
        e.preventDefault();
		jQuery(".slide-down").slideToggle();
		jQuery(this).text(function(i, text){
          return text === "30 More Attributes" ? "Show Less" : "30 More Attributes";
      })
	});	


jQuery(".btn-0211").click( function(e){
        //e.preventDefault();
		jQuery(".Stove-repair").slideToggle();
		jQuery(this).hide();
		jQuery(this).text(function(j, text){
          return text === "See 8 More" ? "Show Less" : "See 8 More";
      })
	});	

$(document).ready(function(){
  $(".navbar-toggle").click(function(){
    $("body").toggleClass("bodyopen");
    $(".login-outer1").toggleClass("main");
    // $(".call-right-outer").toggleClass("calling-btn");
  });
});


$("button.navbar-toggle").click(function() {
        $("body").toggleClass("nav-open");
        $("html").toggleClass("overflow-hidden");
    });
    
