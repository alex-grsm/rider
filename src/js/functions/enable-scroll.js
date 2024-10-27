export const enableScroll = () => {

    const windowEl = window;
    const documentEl = document;
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    const fixBlocks = documentEl.querySelectorAll('.fixed-block');
    const pagePosition = parseInt(bodyEl.dataset.position, 10); // Используем bodyEl напрямую

    // Убираем отступы для фиксированных блоков
    fixBlocks.forEach(el => { 
        el.style.paddingRight = '0px'; 
    });

    // Убираем отступ справа для body
    bodyEl.style.paddingRight = '0px';

    // Возвращаем body в обычное состояние
    bodyEl.style.top = 'auto';
    bodyEl.classList.remove('dis-scroll');

    // Восстанавливаем позицию прокрутки
    windowEl.scroll({
        top: pagePosition,
        left: 0
    });

    // Убираем сохранённое значение позиции прокрутки
    bodyEl.removeAttribute('data-position');

    // Включаем плавный скроллинг
    htmlEl.style.scrollBehavior = 'smooth';
}