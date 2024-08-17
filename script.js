const firstWords = "I'm taking a ride with my best friend";
const secondWords = "I hope he never lets me down again";
const thirdWords = "He knows where he's taking me";
const fourthWords = "Taking me where I want to be";
const fifthWords = "I'm taking a ride with my best friend";

// Функция для отображения текста
function displayText(text, delay) {
    setTimeout(() => {
        const textContainer = document.getElementById('textContainer');
        textContainer.textContent = text;
    }, delay);
}

// Запуск воспроизведения видео
document.getElementById('playButton').addEventListener('click', () => {
    const video = document.getElementById('myVideo');
    video.muted = false; // Убедитесь, что звук включен
    video.play().catch(error => {
        console.log('Playback failed:', error);
    });
    // Убираем кнопку после воспроизведения
    document.getElementById('playButton').style.display = 'none';
});

// Настройка задержек для отображения текста
displayText(firstWords, 1000);    // Показываем через 1 секунду
displayText(secondWords, 9500);   // Показываем через 9.5 секунды
displayText(thirdWords, 18500);   // Показываем через 18.5 секунд
displayText(fourthWords, 23000);  // Показываем через 23 секунды
displayText(fifthWords, 27500);   // Показываем через 27.5 секунд