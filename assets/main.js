; (function ($) {
    $(document).ready(function () {
        $(document).on('click', '.header-area .show-menu', function () {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        AOS.init({ duration: 1500, once: true })
    });
    $('#WebDesignDemos').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $('.web-left'),
        nextArrow: $('.web-right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $('#Packages').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $('.package-left'),
        nextArrow: $('.package-right'),
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    $('#Articles').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $('.writing-left'),
        nextArrow: $('.writing-right'),
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            }
        ]
    });
})(jQuery);