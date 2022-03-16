
$(document).ready(function () {
    $(".nav-toggle").click(function () {
        $(".header .nav").slideToggle("slow");
    });

    $(".header .nav a").click(function () {
        if ($(window).width() < 768) {
            $(".header .nav").slideToggle("slow");
        }
    });

    $(".ir-arriba").click(function () {
        $("body, html").animate(
            {
                scrollTop: "0px",
            },
            300
        );
    });


    let locationPrincipal = window.pageYOffset;
    window.onscroll = function () {
        let nowLocation = window.pageYOffset;
        if (locationPrincipal >= nowLocation) {
            document.getElementById('menu').style.top = '0';
        } else {
            document.getElementById('menu').style.top = '-100px';
        }
        locationPrincipal = nowLocation
    }


    const sr = ScrollReveal({});

    sr.reveal('.effect-01', {
        origin: 'bottom',
        distance: '50px',
        duration: 2000
    });

    sr.reveal('.effect-02', {
        origin: 'top',
        distance: '50px',
        duration: 2000
    });

    sr.reveal('.effect-03', {
        delay: 100,
        duration: 2000
    });

    sr.reveal('.card', {
        delay: 100,
        duration: 2000
    });


});




$(window).scroll(function (event) {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 200) {
        document.getElementById('menu').style.background = '#ffffff';
    }

    if (scrollTop < 200) {
        document.getElementById('menu').style.background = '';

    }
});



