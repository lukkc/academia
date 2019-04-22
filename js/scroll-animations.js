var ScrollAnimation = (function () {

    function scroll() {
        $(window).bind('scroll', function () {

            animations();
            removeSectionSmall();
            menuHidden();
        });
    }


    function animations() {
        var $widthWindow = $(window).width() > 1000;
        if ($widthWindow) {
            animationSection();
            animationFooter();
            animationBannerFixo();
            animationNavbarHeader();
        }

    }

    function animationNavbarHeader() {
        if ($(window).scrollTop() > 0) {
            $('.js-navbar-header').addClass("e-is-navbar__hidden");
        } else {
            $('.js-navbar-header').removeClass("e-is-navbar__hidden");
        }
    }

    function removeNavbarHidden() {
        var $widthWindow = $(window).width() <= 1000;
        if ($widthWindow) {
            $('.js-navbar-header').removeClass("e-is-navbar__hidden");
            $('.js-navbar-footer').removeClass("e-is-section__small");
        }
    }


    function animationSection() {
        if ($(window).scrollTop() > 0) {
            $('.js-section').addClass("e-is-section__small");
        } else {
            $('.js-section').removeClass("e-is-section__small");
        }
    }

    function removeSectionSmall() {
        var $widthWindow = $(window).width() <= 1000;
        if ($widthWindow) {
            $('.js-section').removeClass("e-is-section__small");
        }
    }

    function windowResize() {
        $(window).resize(function () {
            animations();
            removeSectionSmall();
            removeNavbarHidden()
        });
    }


    function animationFooter() {
        if ($(window).scrollTop() > 0) {
            $('.js-navbar-footer').addClass("e-is-section__small");
        } else {
            $('.js-navbar-footer').removeClass("e-is-section__small");
        }
    }


    function animationBannerFixo() {
        if ($(window).scrollTop() > 0) {
            $('.js-banner-fixo').addClass("e-is-banner-fixo__bottom");
        } else {
            $('.js-banner-fixo').removeClass("e-is-banner-fixo__bottom");
        }
    }


    function menuHidden() {
        $(".o-navbar .js-menu-xs").removeClass("menu-xs__toggle");
    }



    return {

        listen: function () {
            animations();
            windowResize();
            removeNavbarHidden();
            scroll();
        }
    }

})();




(function main() {

    $(document).ready(function () {
        ScrollAnimation.listen();
    });

})();
