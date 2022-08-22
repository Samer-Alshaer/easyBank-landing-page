$(window).on("load", function () {

     /*------------------- preloader -------------------*/
     $(".preloader").fadeOut("slow");
});

$(window).on("scroll", function () {
     if ($(this).scrollTop() > 130) {
          $("#header").addClass("navbar-fixed");
     }
     else {
          $("#header").removeClass("navbar-fixed");
     }
});

/*------------------- Back top -------------------*/
$(document).scroll(function () {
     var top = $(document).scrollTop();
     if (top > 300) {
          $('.back-top').fadeIn();
     } else {
          $('.back-top').fadeOut();
     }
});

$('.back-top').click(function () {
     $('html').animate({
         scrollTop: 0
     }, 700);
 });

/*------------------- mopile menu -------------------*/
$(document).ready(function () {
     $(".mobile-menu-icon").click(function () {
          $(this).toggleClass("open");
          $(".mobile-menu").toggleClass("show");
          $(".back-drop").toggleClass("show fade");
          if ($(".mobile-menu").hasClass("show")) {
               $("body").css({ "overflow": "hidden" });
          } else {
               $("body").css({ "overflow": "auto" })
          }
     })
});