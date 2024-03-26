const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
let prevScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
        // Прокрутка вниз: скрываем шапку
        header.style.transition = 'top 0.5s ease-in-out';
        header.style.top = '-100%';
    } else {
        // Прокрутка вверх: показываем шапку
        if (currentScrollY < 300) {
            header.classList.remove('header--fixed');
            // Если прокрутка больше 300 пикселей, применяем position: relative
            header.style.position = 'relative';
        } else {
            // В остальных случаях продолжаем работать по обычному скрипту
            header.style.transition = 'top 0.5s ease-in-out';
            header.style.top = '0%';
            header.classList.add('header--fixed');
        }
    }
    prevScrollY = currentScrollY;
});

new WOW().init();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: false,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 50,
    mousewheel: {
        invert: false,
    },
    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        468: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        320: {
            slidesPerView: 'auto',
            spaceBetween: 0,
        }
    }
});