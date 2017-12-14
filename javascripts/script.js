$(function() {

  "use strict";


// Navbar fix after scroll

// var high = $('#button').marginTop

$(window).on('scroll', function(){
  if($(window).scrollTop() > 600){

    // console.log(high);

    $('#sidebar').addClass('sidebar');
    $('nav').addClass('fixed-top');
  }else {
    $('#sidebar').removeClass('sidebar');
    $('nav').removeClass('fixed-top');

  }
})




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



$(function(){
    var navMain = $("#mainbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

});
