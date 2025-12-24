document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('open');
    const resetBtn = document.getElementById('reset');

    // Toggle open state when envelope is clicked
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    // Open envelope button
    openBtn.addEventListener('click', () => {
        envelope.classList.add('open');
    });

    // Reset/close envelope button
    resetBtn.addEventListener('click', () => {
        envelope.classList.remove('open');
    });
});
