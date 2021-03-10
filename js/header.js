$(function () {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('.container').css({
                'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
            })
        } else {
            header.removeClass('header_fixed');
            $('.container').css({
                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
            })
        }
    });
});
