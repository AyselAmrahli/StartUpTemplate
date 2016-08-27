
$(document).ready(function(){
 var target;


   $(".nav li a").on("click",scrol);
    function scrol() {
        target=$(this).attr("id");

$("body").stop().animate({"scrollTop" :$(target).offset().top},2000,"swing");
    }

    

});










