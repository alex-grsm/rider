// import $ from 'jquery';
import Swiper from '/node_modules/swiper/swiper-bundle.min.mjs';

const heroSwiper = () => {
    const swiper = new Swiper('.heroSwiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // loop: true,
    });
};


export default heroSwiper;