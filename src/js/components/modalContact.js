// import $ from 'jquery';

const modalContact = () => {

    $('#openModalContact').on('click', function () {
        const modal = $('#contact-modal');
        if (modal.hasClass('contact-modal--active')) {
            // Если модальное окно активно, скрываем его
            modal.removeClass('contact-modal--active animate__animated animate__fadeIn animate__faster');
        } else {
            // Если не активно, показываем его
            modal.addClass('contact-modal--active animate__animated animate__fadeIn animate__faster');
        }
    });
    
    $('#close-contact').on('click', function () {
        $('#contact-modal').removeClass('contact-modal--active animate__animated animate__fadeIn animate__faster');
    });
    
    // Закрытие модального окна при клике вне его
    $(document).on('click', function (e) {
        const modal = $('#contact-modal');
        
        // Проверяем, был ли клик за пределами модального окна и его контента
        if (!$(e.target).closest('#contact-modal, #openModalContact').length && modal.hasClass('contact-modal--active')) {
            modal.removeClass('contact-modal--active animate__animated animate__fadeIn animate__faster');
        }
    });
    
    // Останавливаем всплытие события клика, чтобы клик внутри модального окна не закрывал его
    $('#contact-modal').on('click', function (e) {
        e.stopPropagation();
    });
};


export default modalContact;