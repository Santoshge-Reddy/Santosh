$(function() {

  "use strict";


$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = $(this).height();

        $(window).on('scroll', function(){
          if($(window).scrollTop() > bodyheight) {

            $('#sidebar').addClass('sidebar');
            $('nav').addClass('fixed-top');
          }else {
            $('#sidebar').removeClass('sidebar');
            $('nav').removeClass('fixed-top');

          }
        });
    }).resize();
});



// smooth scrollSpy

$(document).ready(function(){
    $('.nav-link').click(function (e) {
      var linkHref = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      });

      e.preventDefault();
    });
});


// close nav bar when clicked in small size
$(function(){
    var navMain = $("#mainbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

  
  $(document).ready(function () {
    //Disable full page
    $("body").on("contextmenu",function(e){
        return false;
    });
  
  
});
