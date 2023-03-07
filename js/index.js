const swiper = new Swiper('.reason__slider', {
    slidesPerView: 3,
    spaceBetween: 133,
    initialSlide: 1,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        280: {
            spaceBetween: 0,
            centeredSlides: true,
            initialSlide: 1,
        },
        992: {
                spaceBetween: 133,
                centeredSlides: false,
                initialSlide: 1,
            }
        },
    on: {
        resize(evt) {
            if (this.width < 992) {
                this.activeIndex = 1
            }
        }
    }

});
console.log('script2');
console.log('script3!');