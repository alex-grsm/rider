// import $ from 'jquery';

const langDropDown = () => {
  const selected = $('.selected');
  const dropdown = $('.dropdown-list');
  const optionList = $('.dropdown-list li');

  selected.on('click', function (e) {
    e.stopPropagation(); // Останавливаем всплытие события, чтобы не закрыть меню при клике на него
    dropdown.toggleClass('active');
    selected.toggleClass('active');

    if (dropdown.hasClass('active') && selected.hasClass('active')) {
      optionList.on('click', function () {
        if (optionList.hasClass('active')) {
          $(this).siblings().removeClass('active');
        } else {
          $(this).addClass('active');
        }
        dropdown.removeClass('active');
        selected.removeClass('active');
        selected.children('span').html($(this).html());
      });
    }
  });

  // Закрытие при клике вне блока
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.selected, .dropdown-list').length) {
      dropdown.removeClass('active');
      selected.removeClass('active');
    }
  });

  // Закрытие при нажатии клавиши Esc
  document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) { // 27 — это код клавиши Esc
      selected.removeClass('active');
      dropdown.removeClass('active');
    }
  });
};


export default langDropDown;