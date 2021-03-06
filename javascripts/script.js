$(function() {

  "use strict";


        function getAge(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }

    $(document).ready(function() {

        var get_age = getAge("1993/10/31");
        $('.current_age').html(get_age);


      // full background image
        $(window).resize(function() {
            var bodyheight = ($(this).height()-60);

            $(window).on('scroll', function(){
              if($(window).scrollTop() > bodyheight) {

                // console.log(bodyheight);

                $('#sidebar').addClass('sidebar');
                $('nav').addClass('fixed-top');
              }else {
                $('#sidebar').removeClass('sidebar');
                $('nav').removeClass('fixed-top');

              }
            });
        }).resize();



              // background image based on time
              var now = new Date();
            	var today = now.getDay();
            	var startTime = new Date();
            	startTime.setHours(9);
            	startTime.setMinutes(23);
            	startTime.setSeconds(10);
            	var endTime = new Date();
            	endTime.setHours(14);
            	endTime.setMinutes(43);
            	endTime.setSeconds(20);

            	if (today > 0 && today < 5)
            		{
            		if (startTime < now && endTime > now)
            			{$('#background').addClass('background2');}
            		else
            			{$('#background').addClass('background2');}
            		}
            	else
            		{$('#background').addClass('background2');}








        // smooth scrollSpy
        $('.nav-link').click(function (e) {
          var linkHref = $(this).attr('href');

          $('html, body').animate({
            scrollTop: $(linkHref).offset().top
          });
          e.preventDefault();
        });


        // prevent default action -right click
        //Disable full page
        $("body").on("contextmenu",function(e){
            return false;
        });



    });



    // close nav bar when clicked in small size
    $(function(){
        var navMain = $("#mainbar");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });
  
  
//   formspree
  
$(function(){
    // get the form elements defined in your form HTML above
    button.style = "display: none ";
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      
      setTimeout(function(){
        button.style.display = "block"; 
       }, 5000);
      
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


  
//   formspree


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
