import { disableScroll } from '../functions/disable-scroll.js';
import { enableScroll } from '../functions/enable-scroll.js';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    menu?.classList.toggle('animate__animated');
    menu?.classList.toggle('animate__fadeIn');
    menu?.classList.toggle('animate__faster');

    if (menu?.classList.contains('menu--active')) {
        overlay.classList.add('is-active');
      burger?.setAttribute('aria-expanded', 'true');
    //   burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
        overlay.classList.remove('is-active');
      burger?.setAttribute('aria-expanded', 'false');
    //   burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    // burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    overlay.classList.remove('is-active');
    menu.classList.remove('animate__animated');
    menu.classList.remove('animate__fadeIn');
    menu.classList.remove('animate__faster');
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
    //   burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      overlay.classList.remove('is-active');
      menu.classList.remove('animate__animated');
      menu.classList.remove('animate__fadeIn');
      menu.classList.remove('animate__faster');
      enableScroll();
    });
  });
})();