const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger__nav');
const burgerClose = document.querySelector('.burger__close');
const burgerOpen = document.querySelector('.burger__open');
const burgerItems = document.querySelectorAll('.burger__item a');

// Функция для открытия меню с плавной анимацией
function openBurgerMenu() {
    burger.style.display = 'block';
    burger.style.transform = 'translateX(0)'; // Добавляем анимацию
    document.body.style.overflow = 'hidden';
}

// Функция для закрытия меню с плавной анимацией
function closeBurgerMenu() {
    burger.style.transform = 'translateX(100%)'; // Добавляем анимацию
    burger.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Добавляем обработчик события на элемент с классом burger
burger.addEventListener('click', (event) => {
    if (event.target.classList.contains('burger') && !event.target.classList.contains('burger__nav')) {
        closeBurgerMenu();
    }
});

// Добавляем обработчик события на элемент с классом burger__close
burgerClose.addEventListener('click', () => {
    closeBurgerMenu();
});

// Добавляем обработчик события на элемент с классом burger__open
burgerOpen.addEventListener('click', () => {
    openBurgerMenu();
});

// Добавляем обработчик события на ссылки внутри burger__item
burgerItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeBurgerMenu();
    });
});