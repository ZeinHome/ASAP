jQuery(document).on('click', '.site-nav__link', function () {
  jQuery('.site-nav__link')
    .closest('.menu')
    .removeClass('is-open')
    .on('click', '.header__btn')
    .closest('.menu')
    .show();
});
