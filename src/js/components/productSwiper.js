// import $ from 'jquery';
import Swiper from '/node_modules/swiper/swiper-bundle.min.mjs';
import SimpleLightbox from "simplelightbox";

const productSwiper = () => {
    const productSwiperThumbs = new Swiper('#productSwiperThumbs', {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        navigation: {
            nextEl: '#productSwiperThumbs .swiper-button-next',
            prevEl: '#productSwiperThumbs .swiper-button-prev',
        },
    });
    const productSwiperMain = new Swiper('#productSwiperMain', {
        thumbs: {
            swiper: productSwiperThumbs,
        },
        navigation: {
            nextEl: '#productSwiperMain .swiper-button-next',
            prevEl: '#productSwiperMain .swiper-button-prev',
        },
    });

    let swiperMainGallery = new SimpleLightbox('.swiperMainGallery a', {
        history: false,
    });

    /******** Video Swiper */
    const productSwiperThumbsVideo = new Swiper('#productSwiperThumbsVideo', {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        navigation: {
            nextEl: '#productSwiperThumbsVideo .swiper-button-next',
            prevEl: '#productSwiperThumbsVideo .swiper-button-prev',
        },
    });
    const productSwiperMainVideo = new Swiper('#productSwiperMainVideo', {
        thumbs: {
            swiper: productSwiperThumbsVideo,
        },
        navigation: {
            nextEl: '#productSwiperMainVideo .swiper-button-next',
            prevEl: '#productSwiperMainVideo .swiper-button-prev',
        },
    });

    productSwiperMainVideo.on('slideChange', function () {
        const iframes = document.querySelectorAll('#productSwiperMainVideo .swiper-slide iframe');

        iframes.forEach((iframe) => {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    });
};


export default productSwiper;