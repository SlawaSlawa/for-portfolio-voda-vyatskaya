let catalogData = []
const catalogSwiperSlider = () => {
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
}
const getCatalog = async () => {
    const URL = 'https://voda-vyatskaya-7a164-default-rtdb.firebaseio.com/.json'
    catalogData = []

    await fetch(URL)
        .then(response => response.json())
        .then(json => {
            catalogData = json.map(item => item)
        })
}
const renderCatalog = (type) => {
    const catalogSlider = document.querySelector('.catalog-slider')
    catalogSlider.textContent = ''
    
    const filteredCatalog = catalogData.filter(item => item.type === type)

    if (filteredCatalog.length) {
        const catalogWrapper = document.createElement('div')
        catalogWrapper.classList.add('swiper-wrapper', 'catalog__wrapper')
        catalogSlider.append(catalogWrapper)

        filteredCatalog.forEach(item => {
            const {img, price, title} = item

            const slide = `
                    <div class="catalog__item swiper-slide">
                        <picture class="catalog__item-img">
                            <img
                                src="${img}"
                                alt="${title}"
                            />
                        </picture>
                        <h3 class="catalog__item-title">${title}</h3>
                        <div class="catalog__price-block">
                            <span class="catalog__item-price"
                                >${price}₽</span
                            >
                            <div
                                class="counter-block counter-block--catalog"
                            >
                                <button
                                    class="btn-counter btn-counter--catalog btn-counter--minus"
                                >
                                    -
                                </button>
                                <span class="quantity quantity--catalog"
                                    >1</span
                                >
                                <button
                                    class="btn-counter btn-counter--catalog btn-counter--plus"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <a class="btn-send btn-send--catalog" href="#hero">
                            заказать
                        </a>
                    </div>
        `
        catalogWrapper.insertAdjacentHTML('beforeend', slide)
        })

        catalogSwiperSlider()
    } else {
        catalogSlider.innerHTML = '<h2 class="error-title">По вашему запросу ничего не найдено</h2>'
    }
}
const catalogTabs = () => {
    const catalogNavigationItems = document.querySelectorAll('.catalog__navigation-item')

    catalogNavigationItems.forEach(tab => {
        tab.addEventListener('click', (evt) => {
            const target = evt.target
            
            catalogNavigationItems.forEach(item => {
                item.classList.remove('catalog__navigation-item--active')
            })

            target.classList.add('catalog__navigation-item--active')
            renderCatalog(target.dataset.type)
        })
    })
}

catalogTabs()
const disableScroll = () => {
    const fixBlocks = document.querySelectorAll('.fix-block')
    const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = paddingOffset

    if (fixBlocks.length) {
        fixBlocks.forEach(block => {
            block.style.paddingRight = paddingOffset
        })
    }
}

const enableScroll = () => {
    const fixBlocks = document.querySelectorAll('.fix-block')

    document.body.style.overflow = ''
    document.body.style.paddingRight = ''

    if (fixBlocks.length) {
        fixBlocks.forEach(block => {
            block.style.paddingRight = ''
        })
    }
}
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
const headerToggleBg = () => {
    const headerEl = document.querySelector('.header')
    const pageHeight = document.documentElement.scrollHeight

    const toggleOrShowBg = () => {
        if (document.documentElement.clientWidth > 768 &&
            window.pageYOffset > pageHeight * 1 / 7
            ) {
                headerEl.style.backgroundColor = '#ffffff'
        } else {
            headerEl.style.backgroundColor = ''
        }

        if (window.pageYOffset > pageHeight * 3 / 4) {
            headerEl.style.display = 'none'
        } else {
            headerEl.style.display = ''
        }
    }

    window.addEventListener('scroll', toggleOrShowBg)
}

headerToggleBg()
handleBurger = () => {
    const burgerBtn = document.querySelector('.burger-btn')
    const headerNav = document.querySelector('#headerNav')

    const openOrCloseBurger = () => {
        if (burgerBtn.classList.contains('burger-btn--active')) {
            burgerBtn.classList.remove('burger-btn--active')
            headerNav.classList.remove('nav--active')
        } else {
            burgerBtn.classList.add('burger-btn--active')
            headerNav.classList.add('nav--active')
        }
    }

    burgerBtn.addEventListener('click', openOrCloseBurger)
}

handleBurger()
const overlayEl = document.querySelector('.overlay')

const sendData = async (data) => {
    const URL = 'https://jsonplaceholder.typicode.com/posts'

    const preloaderEl = document.createElement('div')
    preloaderEl.classList.add('loader')
    overlayEl.append(preloaderEl)

    disableScroll()
    overlayEl.style.display = 'block'

    await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
            title: data.name || 'Not name',
            phone: data.phone,
            userId: Date.now(),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })

    overlayEl.textContent = ''
    overlayEl.style.display = ''
    enableScroll()

    renderInfoWindow()
}
const handleMinForm = () => {
    const form = document.querySelector('.hero__form')

    form.addEventListener('submit', async (evt) => {
        evt.preventDefault()
        const phone = form.querySelector('.hero__input').value
        const data = {phone: phone}
        await sendData(data);
        form.reset()
    })
}

handleMinForm()
const renderInfoWindow = () => {
    disableScroll()
    overlayEl.style.display = 'block'

    const infoEl = document.createElement('div')
    infoEl.classList.add('info-msg')
    const infoText = document.createElement('h2')
    infoText.textContent = 'Ваша заявка принята! Скоро с Вами свяжется наш оперетор!'
    infoEl.append(infoText)
    overlayEl.append(infoEl)

    setTimeout(() => {
        overlayEl.textContent = ''
        overlayEl.style.display = ''
        enableScroll()
    }, 2000)
}
const calculator = () => {
    const whereLabels = document.querySelectorAll('.calculator__question-where')
    const radiosWhere = document.querySelectorAll('.calculator__item-radio-where')
    const cookingLabels = document.querySelectorAll('.calculator__question-cooking')
    const radiosCooking = document.querySelectorAll('.calculator__item-radio-cooking')
    const counterHumans = document.getElementById('counterHumans')
    const counterDays = document.getElementById('counterDays')
    const calculatorInfoCount = document.querySelector('.calculator__info-count')
    const calculatorInfoPrice = document.querySelector('.calculator__info-price')

    const PRICE = 30
    const NORM_FOR_A_PERSON = 3
    const NORM_FOR_COOCING = 3

    const data = {where: '', question: '', humans: 1, days: 1}

    const renderInfo = () => {
        let litres = 0
        let price = 0

        if (data.question === 'with cooking') {
            litres = (NORM_FOR_A_PERSON + NORM_FOR_COOCING) * data.humans * data.days
        } else {
            litres = NORM_FOR_A_PERSON * data.humans * data.days
        }

        price = litres * PRICE

        calculatorInfoCount.textContent = litres
        calculatorInfoPrice.textContent = price
    }

    radiosWhere.forEach(radioBtn => {
        radioBtn.addEventListener('click', (evt) => {
            evt.stopPropagation()
        })
    })

    whereLabels.forEach(label => {
        label.addEventListener('click', () => {
            whereLabels.forEach(item => {
                item.classList.remove('calculator__question-label--active')
            })

            if (!label.classList.contains('calculator__question-label--active')) {
                label.classList.add('calculator__question-label--active')
                data.where = label.querySelector('input').value
            }
        })
        renderInfo()
    })

    radiosCooking.forEach(radioBtn => {
        radioBtn.addEventListener('click', (evt) => {
            evt.stopPropagation()
        })
    })

    cookingLabels.forEach(label => {
        label.addEventListener('click', () => {
            cookingLabels.forEach(item => {
                item.classList.remove('calculator__question-label--active')
            })

            if (!label.classList.contains('calculator__question-label--active')) {
                label.classList.add('calculator__question-label--active')
                data.question = label.querySelector('input').value
            }

            renderInfo()
        })
    })

    counterHumans.querySelector('.btn-counter--minus').addEventListener('click', () => {
        if (data.humans > 1) {
            data.humans--
        }
        counterHumans.querySelector('.counter__number').textContent = data.humans
        renderInfo()
    })

    counterHumans.querySelector('.btn-counter--plus').addEventListener('click', () => {
        data.humans++
        counterHumans.querySelector('.counter__number').textContent = data.humans
        renderInfo()
    })

    counterDays.querySelector('.btn-counter--minus').addEventListener('click', () => {
        if (data.days > 1) {
            data.days--
        }
        counterDays.querySelector('.counter__number').textContent = data.days
        renderInfo()
    })

    counterDays.querySelector('.btn-counter--plus').addEventListener('click', () => {
        data.days++
        counterDays.querySelector('.counter__number').textContent = data.days
        renderInfo()
    })

    renderInfo()
}

calculator()
const init = async() => {
    await getCatalog()
    renderCatalog('water')
    scrollToSections({
        behavior: 'smooth',
        block: 'start',
        inline: 'center'
    }, '.btn-send')
}

init()