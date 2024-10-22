// import $ from 'jquery';

const submenuMenu = () => {
    $('.submenu__item').on('click', function (e) {
        e.stopPropagation(); // Останавливаем всплытие события клика
        const $submenuMenu = $(this).next('.submenu__menu');

        // Если уже активен, то сворачиваем обратно
        if ($submenuMenu.hasClass('submenu__menu--active')) {
            $submenuMenu.removeClass('submenu__menu--active animate__animated animate__fadeIn');
            $(this).removeClass('submenu__item--active'); // Убираем класс активности для самого элемента
            $('.hero__slider').removeClass('hero__slider--hide');
        } else {
            // Сначала убираем активные классы со всех элементов
            $('.submenu__menu').removeClass('submenu__menu--active animate__animated animate__fadeIn');
            $('.submenu__item').removeClass('submenu__item--active'); // Убираем активный класс со всех элементов
            $('.hero__slider').addClass('hero__slider--hide');

            // Активируем выбранный элемент
            $submenuMenu.addClass('submenu__menu--active animate__animated animate__fadeIn');
            $(this).addClass('submenu__item--active'); // Добавляем активный класс для нажатого элемента
        }
    });

    // Событие клика вне меню
    $(document).on('click', function () {
        // Снимаем активные классы при клике вне блоков меню
        $('.submenu__menu').removeClass('submenu__menu--active animate__animated animate__fadeIn');
        $('.submenu__item').removeClass('submenu__item--active'); // Убираем активный класс для всех элементов
        $('.hero__slider').removeClass('hero__slider--hide');
    });

    // Закрытие при нажатии клавиши Esc
    document.addEventListener('keyup', function (e) {
        // Снимаем активные классы при клике вне блоков меню
        $('.submenu__menu').removeClass('submenu__menu--active animate__animated animate__fadeIn');
        $('.submenu__item').removeClass('submenu__item--active'); // Убираем активный класс для всех элементов
        $('.hero__slider').removeClass('hero__slider--hide');
    });

};


export default submenuMenu;