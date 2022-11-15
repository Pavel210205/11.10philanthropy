$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.menu__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});
