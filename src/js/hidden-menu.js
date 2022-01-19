$('.scrollto a').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top,
    }, {
        duration: 370, // по умолчанию «400»
        easing: 'linear', // по умолчанию «swing»
    }, );
    $('.site-nav__link')
        .closest('.menu')
        .removeClass('is-open')
        .on('click', '.header__btn')
        .closest('.menu')
        .show();
    return false;
});