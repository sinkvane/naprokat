const toggleButtons = document.querySelectorAll('.tabs__item');
const tabContents = document.querySelectorAll('.tabs__info');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Переключаем состояние таба с плавным изменением высоты
        if (tabContents[index].style.height === '0px' || tabContents[index].style.height === '') {
            tabContents[index].style.height = tabContents[index].scrollHeight + 10 + 'px';
            tabContents[index].style.paddingTop = 1 + 'rem';// Показываем таб
        } else {
            tabContents[index].style.height = '0px';
            tabContents[index].style.paddingTop = 0;
        }
    });
});