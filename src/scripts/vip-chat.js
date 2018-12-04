$(function() {

    $('.select-js').on('click', function (e) {
        e.preventDefault();
        $('.vip-chat').each(function() {
            $(this).toggleClass('is-active', $(this).hasClass('select-method'));
        });
        if ($('.select-method').hasClass('is-active')) {
            $('body').addClass('has-overlay');
            $('.select-method').parent('.vip-chat-overlay').addClass('is-active');

        }
        return false;
    });

    $('.close-js', $('.vip-chat')).on('click', function(e) {
        e.preventDefault();
        $('.vip-chat').each(function() {
            $(this).toggleClass('is-active', !$(this).hasClass('select-method'));
        });
        $('body').removeClass('has-overlay');
        $('.vip-chat-overlay').removeClass('is-active');
        return false;
    });
});
