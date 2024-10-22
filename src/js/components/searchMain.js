
import { throttle } from '../functions/throttle';
const searchMain = () => {

    const searchBox = $('#search-box__input');
    const searchButton = $('#btnSearch');
    const inputField = $('#inputSearch');
    const searchResult = $('#searchResult');

    // Тогглинг активного состояния поля поиска и кнопки
    searchButton.on('click', function () {
        searchBox.toggleClass('search-box__input--active animate__animated animate__fadeIn animate__faster');
        searchButton.toggleClass('btn-search--active');

        // Если поле активно, ставим фокус
        if (searchBox.hasClass('search-box__input--active')) {
            inputField.focus();
        }
    });

    // Функция для обработки изменения ввода
    const handleInput = function () {
        const inputLength = $(this).val().length; // Получаем длину текста

        if (inputLength > 2) {
            searchResult.addClass('search-result--active'); // Показываем результаты
        } else {
            searchResult.removeClass('search-result--active'); // Скрываем результаты
        }
    };

    // Используем тротлинг для обработки ввода
    inputField.on('input', throttle(handleInput, 250)); // Задержка 250ms

    // Закрытие поиска при клике вне его области
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#search-box__input, #btnSearch').length) {
            searchBox.removeClass('search-box__input--active animate__animated animate__fadeIn animate__faster');
            searchButton.removeClass('btn-search--active');
            searchResult.removeClass('search-result--active'); // Скрываем результаты при закрытии поиска
        }
    });

    // Останавливаем всплытие клика внутри поля поиска или кнопки
    searchBox.add(searchButton).on('click', function (e) {
        e.stopPropagation();
    });
}

export default searchMain;