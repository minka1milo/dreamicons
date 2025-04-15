document.querySelectorAll('.icon').forEach(icon => {
    const sound = new Audio(icon.getAttribute('data-sound'));
    icon.addEventListener('mouseenter', () => {
        sound.currentTime = 0;
        sound.play();
    });
});