const mapExists = document.querySelector('.map');
if (mapExists) {
    const wrapMap = document.querySelector('.map');
    const mapTitle = document.createElement('div');

    mapTitle.className = 'mapTitle';
    mapTitle.textContent = 'Для активации карты нажмите по ней';

    wrapMap.appendChild(mapTitle);

    wrapMap.onclick = function () {
        this.children[0].removeAttribute('style');
        mapTitle.parentElement.removeChild(mapTitle);
    };

    // При движении мыши в области карты
    wrapMap.onmousemove = function (event) {
        // Показываем подсказку
        mapTitle.style.display = 'block';
        // Двигаем подсказку вместе с мышкой пользователя
        if (event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
        if (event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
    };

    // При уходе указателя мыши с области карты
    wrapMap.onmouseleave = function () {
        // Прячем подсказку
        mapTitle.style.display = 'none';
    };
} else {
}