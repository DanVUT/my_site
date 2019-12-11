$(document).ready(function() {
    $("a").click( function() {
        if(this.hash != ""){
            var hash = this.hash;
            $("html, body").animate({scrollTop: $(hash).offset().top}, 1000);
        }
    });
    
    
    $(".js--menu-button").click( function() {
        if(this.classList.contains("fa-bars")) {
            this.classList.remove("fa-bars");
            $("nav ul").css("opacity", "1");
            this.classList.add("fa-times");
        }
        else {
            this.classList.remove("fa-times");
            $("nav ul").css("opacity", "0");
            this.classList.add("fa-bars");
        }
    });
    
    
    $(window).on('resize', function() {
        if($(window).width() > 890) {
            $('nav ul').css("opacity", "1");
        } else{
            $('nav ul').css("opacity", "0");
        }
    });
});