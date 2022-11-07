export const reviewsSwiper = () => {
    if (document.querySelector('.reviews__swiper')) {
        const swiperReviews = new Swiper('.reviews__swiper', {
            slidesPerView: 'auto',
            slidesPerGroup: 3,
            spaceBetween: 40,
            loop: true,
        });
    };
};