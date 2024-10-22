// import _ from "lodash";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import getHeaderHeight from './functions/header-height';
import langDropDown from './components/langdropdown';
import submenuMenu from './components/submenuMenu';
import modalContact from './components/modalContact';
import Swiper from '/node_modules/swiper/swiper-bundle.min.mjs';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    getHeaderHeight();
    langDropDown();
    submenuMenu();
    modalContact();


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
    
    

    


    // console.log($('body'));
});