$(document).ready(function(){
    // show popup when you click on the link
 $('.show-popup').click(function(event){
        event.preventDefault(); // disable normal link function so that it doesn't refresh the page
        var docHeight = $(document).height(); //grab the height of the page
        var scrollTop = $(window).scrollTop(); //grab the px value from the top of the page to where you're scrolling
        var selectedPopup = $(this).data('showpopup'); //get the corresponding popup to show
        
    $('.overlay-bg').fadeIn( "fast", function() {
        $('.overlay-bg').show().css({'height' : docHeight}); //display your popup background and set height to the page height
      	$('.popup'+selectedPopup).show().css({'top': scrollTop+160+'px'}); //show the appropriate popup and set the content 20px from the window top
      
    });
       
       
 });
  
    // hide popup when user clicks on close button or if user clicks anywhere outside the container
    $('.close-btn, .overlay-bg').click(function(){
    
      $("video").each(function(){  
     		 $(this).get(0).pause();  
       });
    
    $('.overlay-bg, .overlay-content').fadeOut( "slow", function() {
          // Animation complete.
      $('.overlay-content' ).hide();
     });
    
    });
    
    // hide the popup when user presses the esc key
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // if user presses esc key
        	$("video").each(function(){  
     		 $(this).get(0).pause();  
            });
            $('.overlay-bg, .overlay-content').hide(); //hide the overlay
        }
    });
    
});