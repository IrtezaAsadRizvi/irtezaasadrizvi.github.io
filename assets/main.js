;(function($) {
    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        AOS.init({ duration: 1500, once: true })
    });
})(jQuery);