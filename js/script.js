$(window).on("load", function() {
    $(".loader").fadeOut(1000, function() {
        $(".loader").fadeOut(1500);
    })
})


$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Analyst.", "PhD Candidate.", "Code Newbie."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200){
        $(".counter").each(function() {
            var element =$(this);
            var endVal = parseInt(element.text());
            
            element.countup(endVal);
            }) 

            countUpFinished = true;
            
        }

    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow")
    });

    const  nav = $("#navigation");
    const navTop = nav.offset().top

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.addClass("fixedNav");
            body.css("padding-top", nav.outerHeight() + "px");
        }
        else {
            body.removeClass("fixedNav");
            body.css("padding-top", 0);
        }

    }

});

