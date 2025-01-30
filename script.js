// script.js
document.addEventListener('DOMContentLoaded', () => {
    const colorBoxes = document.querySelectorAll('.color-box');
    const title = document.getElementById('title');

    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const color = box.dataset.color;
            const text = box.dataset.text;
            
            // Cambiar el color de fondo
            document.body.style.backgroundColor = color;
            
            // Cambiar el texto
            title.textContent = text;
            
            // Ajustar el color del texto según el fondo
            const brightness = getBrightness(color);
            title.style.color = brightness > 128 ? '#000000' : '#FFFFFF';
        });
    });
});

// Función para calcular el brillo del color
function getBrightness(color) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}