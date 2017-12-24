$(function() {

  "use strict";


$(document).ready(function() {
    $(window).resize(function() {
        var bodyheight = ($(this).height()-60);

        $(window).on('scroll', function(){
          if($(window).scrollTop() > bodyheight) {
            
            console.log(bodyheight);

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

// prevent default action -right click
 $(document).ready(function () {
      //Disable full page
      $("body").on("contextmenu",function(e){
          return false;
      });
 });

    
  
     // <!--Start of Tawk.to Script-->
     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
     (function(){
     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
     s1.async=true;
     s1.src='https://embed.tawk.to/5a3fbcd2bbdfe97b137fd1f3/default';
     s1.charset='UTF-8';
     s1.setAttribute('crossorigin','*');
     s0.parentNode.insertBefore(s1,s0);
     })();
     // <!--End of Tawk.to Script-->
  
  
});
