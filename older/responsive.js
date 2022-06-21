vwindow.onload = function() {
    let btn = document.getElementsByClassName("submenu");
} 
$(function(){
    $(".btn").click(function(){
        $(".submenu").slideToggle(500);
    });
});