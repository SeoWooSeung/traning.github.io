$(function () {

    $('.mainSlide').on('init afterChange', function (e, s, c) {
        const current = $('mainSlide .slilck-current');

        console.log(c, s.slideCount);

        $('.num span').text(s.slideCount);
        $('.num strong').text(c ? (c + 1) : 1);

        current
            .addClass('on')
            .siblings()
            .removeClass('on')

        $('.mainVisual .menu li')
            .eq(0)
            .addClass('on');

        $('.mainVisual .menu li')
            .eq(c)
            .addClass('on')
            .siblings()
            .removeClass('on');

    });

    $('.mainSlide').slick({
        autoplay: true,
        arrows: false,
        // dots: true,
        pauseOnHover: false,
    });

    $('.mainVisual .arrows .left').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.mainSlide').slick('slickPrev')
    });

    $('.mainVisual .arrows .right').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.mainSlide').slick('slickNext')
    });

    $('.mainVisual .menu li').on('click', function (e) {
        e.preventDefault();
        //번호가져오기:번호를 가져오는것은 javascript 에서 아주 중요한 일입니다.
        const idx = $(this).index();
        /* $('.num').text(idx + 1);*/
        $('.mainSlide').slick('slickGoTo', idx);
        /*  $(this).addClass('on').siblings().removeClass('on');*/
    });




});