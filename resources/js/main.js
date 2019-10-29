

$(document).ready(function(){
  
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });




// sticky menu

$(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky")
            } else {
                $("nav").removeClass("sticky")
            }
    });

    $(".js--services-section").waypoint(function(direction){
      if (direction == "down"){
          $(".hamburger").addClass("hamburgere")
          } else {
              $(".hamburger").removeClass("hamburgere")
          }
  });


    $.fatNav();






});