document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('togglePractice');
    const practiceBox = document.getElementById('practiceBox');

    toggleButton.addEventListener('click', () => {
        practiceBox.classList.toggle('visible');
        toggleButton.textContent = practiceBox.classList.contains('visible')
            ? 'Hide Cosmic Symbol Ritual'
            : 'Reveal Cosmic Symbol Ritual';
    });
});
