import objectWithImages from './data.js';

const pixelContainer = document.getElementById('pixel-container');
const buttonsContainer = document.getElementById('buttons');

// Función para renderizar un arreglo binario en píxeles
function renderPixels(pattern) {
    pixelContainer.innerHTML = '';
    pattern.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        row.forEach(pixel => {
            const pixelElement = document.createElement('div');
            pixelElement.classList.add('pixel', pixel === 1 ? 'black' : 'white');
            rowElement.appendChild(pixelElement);
        });
        pixelContainer.appendChild(rowElement);
    });
}

// Agrega botones y configura eventos
objectWithImages.images.forEach((pattern, index) => {
    const button = document.createElement('button');
    button.textContent = `Patrón ${index + 1}`;
    button.addEventListener('click', () => {
        renderPixels(pattern);
    });
    buttonsContainer.appendChild(button);
});

// Muestra el primer patrón al cargar la página
renderPixels(objectWithImages.images[0]);