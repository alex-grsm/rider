export const disableScroll = () => {
    const windowEl = window;
    const documentEl = document;
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    const fixBlocks = documentEl.querySelectorAll('.fixed-block');
    const pagePosition = windowEl.scrollY;
    const paddingOffset = `${(windowEl.innerWidth - bodyEl.offsetWidth)}px`;

    // Отключаем плавный скроллинг
    htmlEl.style.scrollBehavior = 'none';

    // Устанавливаем отступы для фиксированных блоков
    fixBlocks.forEach(el => { 
        el.style.paddingRight = paddingOffset; 
    });

    // Добавляем отступ справа для body
    bodyEl.style.paddingRight = paddingOffset;

    // Отключаем прокрутку страницы
    bodyEl.classList.add('dis-scroll');

    // Сохраняем текущую позицию прокрутки в data-атрибут
    bodyEl.dataset.position = pagePosition;

    // Фиксируем страницу на текущей позиции
    bodyEl.style.top = `-${pagePosition}px`;
}