// import $ from 'jquery';
import Swiper from '/node_modules/swiper/swiper-bundle.min.mjs';
import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "/node_modules/simplelightbox/dist/simple-lightbox.min.js";

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

    let swiperMainGallery = new SimpleLightbox('#productSwiperMain a', {
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
        const previousSlide = productSwiperMainVideo.slides[productSwiperMainVideo.previousIndex];
        const iframe = previousSlide.querySelector('iframe');
    
        if (iframe) {
            const temp = iframe.src;
            iframe.src = '';      // Сбрасываем `src`, чтобы остановить видео
            iframe.src = temp;     // Восстанавливаем `src`, чтобы iframe оставался на месте
        }
    });
};


export default productSwiper;