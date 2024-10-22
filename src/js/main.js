// import _ from "lodash";
import Swiper from '/node_modules/swiper/swiper-bundle.min.mjs';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
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
      

    console.log('da');
});