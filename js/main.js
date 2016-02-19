$(function() {
    $(document).ready(function() {

        $(".jumbotron").animate({
                opacity: 1
            },
            1000,
            function() {
                $(".jumbotron .row .col-md-9,.jumbotron .row .col-md-3").animate({
                    left: 0,
                    opacity: 1
                }, 1500, function() {
                    console.log("iasjd");
                });
            }
        );

        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    })

});