$(function() {

    $('.main-nav-open, .main-nav-close').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('main-nav-opened', $(this).hasClass('main-nav-open'));
        return false;
    });

    $(document).on('scroll', function () {
        $('body').toggleClass('compact-header', $(this).scrollTop() > $('header.full').height());
    }).trigger('scroll');
});
