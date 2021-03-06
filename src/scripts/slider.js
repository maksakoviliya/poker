$(function () {

    $('.slider').each(function () {
        let $slider = $(this),
            $current = 0,
            $slideble = false;

        $slider.on({
            slidePrev: function () {
                $slider.trigger('slideTo', $current - 1);
            },
            slideNext: function () {
                $slider.trigger('slideTo', $current + 1);
            },
            slideTo: function ($e, $num) {
                let $container = $('.slider-container', $slider);
                $current = $slideble
                    ? Math.max(Math.min($num, $container.children('div').length - 1), 0)
                    : 0;
                $container.css('transform', 'translate3D(' + (-$current) + '00%, 0, 0)');
                $('.slider-progress > i:nth-child(' + ($current + 1) + ')', $slider)
                    .addClass('is-active')
                    .siblings()
                    .removeClass('is-active');
            }
        });

        $('.slider-container', $slider).swipe({
            swipeLeft: function () {
                $slider.trigger('slideNext');
            },
            swipeRight: function () {
                $slider.trigger('slidePrev');
            }
        });

        $('.slider-progress > i', $slider).on('click', function() {
            $slider.trigger('slideTo', $(this).index());
        });

        $(window).on('resize', function() {
            if ($(this).width() < 480) {
                $slideble = true;
                $slider.trigger('slideTo', $current);
            } else {
                $slideble = false;
                $slider.trigger('slideTo', 0);
            }
        }).trigger('resize');


    });
});
