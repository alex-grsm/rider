// import $ from 'jquery';
import Swiper from '/node_modules/swiper/swiper-bundle.min.mjs';

const downloadSwiper = () => {
    const swiper = new Swiper('.downloadSwiper', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          }
        }
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
    });


    const elements = document.querySelectorAll('.downloadSwiper__item-descr > span');

    elements.forEach(function(el) {
        const words = el.textContent.split(' ');
        el.innerHTML = words.join('<br>');
    });
};


export default downloadSwiper;