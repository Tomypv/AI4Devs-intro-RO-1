// Función para invertir una cadena de texto
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Elementos del DOM
const inputText = document.getElementById('inputText');
const reversedText = document.getElementById('reversedText');

// SIGUIENTE NIVEL (Opcional):
// 1. Mostrar botón solo cuando hay más de 3 caracteres
// 2. Inversión en tiempo real sin depender del botón

inputText.addEventListener('input', () => {
    
    // Actualizar el texto invertido en tiempo real
    const originalText = inputText.value;
    const reversed = reverseString(originalText);
    reversedText.textContent = reversed;
});
