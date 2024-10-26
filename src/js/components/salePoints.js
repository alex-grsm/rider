// import $ from 'jquery';

const salePoints = () => {

    // Открытие/закрытие главного блока при клике на .sales-points__box
    $('.sales-points__box').on('click', function() {
        toggleSalePointsContent();
    });

    // Клик по элементу списка (l-item)
    $('.l-item').on('click', function() {
        const location = $(this).data('location');
        
        $('.sales-points__inner').addClass('sales-points__inner--open');
        $('.sales-points__content-result').addClass('sales-points__content-result--show animate__animated animate__fadeIn animate__faster');
        
        $('.l-item').removeClass('l-item--active');
        $(this).addClass('l-item--active');
        
        $('.result-item-wrap').removeClass('result-item-wrap--active');
        $('.result-item-wrap[data-location="' + location + '"]').addClass('result-item-wrap--active animate__animated animate__fadeIn');
    });

    // Закрытие по нажатию клавиши Esc
    $(document).on('keyup', function (e) {
        if (e.key === 'Escape') {
            closeSalePointsContent();
        }
    });

    // Закрытие при клике вне блока
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.sales-points__content, .sales-points__box').length) {
            closeSalePointsContent();
        }
    });

    // Функция для открытия/закрытия основного контента
    function toggleSalePointsContent() {
        const content = $('.sales-points__content');
        content.toggleClass('sales-points__content--active animate__animated animate__fadeIn animate__faster');
        
        // Сбрасываем все активные состояния
        if (!content.hasClass('sales-points__content--active')) {
            resetSalePointsContent();
        }
    }

    // Функция для закрытия
    function closeSalePointsContent() {
        $('.sales-points__content').removeClass('sales-points__content--active animate__animated animate__fadeIn animate__faster');
        resetSalePointsContent();
    }

    // Функция для сброса всех активных состояний
    function resetSalePointsContent() {
        $('.sales-points__content-result').removeClass('sales-points__content-result--show animate__animated animate__fadeIn');
        $('.l-item').removeClass('l-item--active');
        $('.result-item-wrap').removeClass('result-item-wrap--active');
        $('.sales-points__inner').removeClass('sales-points__inner--open');
    }
};

export default salePoints;