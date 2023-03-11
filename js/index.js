const swiperReason = new Swiper('.reason__slider', {
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
const swiperCatalog = new Swiper('.catalog-slider', {
    slidesPerView: 4,
    spaceBetween: 29,
    initialSlide: 0,
    centeredSlides: false,
    
    breakpoints: {
        280: {
            spaceBetween: 18,
            slidesPerView: 1.3,
            centeredSlides: true,
            initialSlide: 1,
        },
        300: {
            spaceBetween: 18,
            slidesPerView: 1.4,
            centeredSlides: true,
            initialSlide: 1,
        },
        320: {
            spaceBetween: 18,
            slidesPerView: 1.5,
            centeredSlides: true,
            initialSlide: 1,
        },
        390: {
            spaceBetween: 22,
            slidesPerView: 1.7,
            centeredSlides: true,
            initialSlide: 1,
        },
        600: {
            spaceBetween: 22,
            slidesPerView: 2.3,
            centeredSlides: true,
            initialSlide: 1,
        },
        800: {
            spaceBetween: 22,
            slidesPerView: 3.3,
            centeredSlides: true,
            initialSlide: 1,
        },
        976: {
                spaceBetween: 29,
                slidesPerView: 4,
                centeredSlides: false,
                initialSlide: 0,
            }
        },
        on: {
            resize(evt) {
                if (this.width < 976) {
                    this.activeIndex = 1
                }
            }
        }
});
const catalogNavigationSlider = new Swiper('.catalog__navigation-slider', {
    slidesPerView: 4,
    spaceBetween: 24,
    initialSlide: 0,
    
    breakpoints: {
        280: {
            spaceBetween: 22,
            slidesPerView: 2,
            centeredSlides: true,
            centeredSlidesBounds: true,
        },
        520: {
            spaceBetween: 22,
            slidesPerView: 3,
            centeredSlides: true,
            initialSlide: 0,
            centeredSlidesBounds: true,
        },
        700: {
            spaceBetween: 22,
            slidesPerView: 4,
            centeredSlides: false,
            centeredSlidesBounds: false,
        },
        },
});