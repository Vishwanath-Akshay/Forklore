document.addEventListener('DOMContentLoaded', () => {
    const hoverElements = document.querySelectorAll('.hover-text');
    const imagePopup = document.getElementById('image-popup');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', (event) => {
            const imageUrl = event.target.getAttribute('data-image');
            imagePopup.innerHTML = `<img src="${imageUrl}" alt="Popup Image">`;
            imagePopup.style.display = 'block';
            imagePopup.style.left = `${event.pageX + 10}px`;
            imagePopup.style.top = `${event.pageY + 10}px`;
        });

        element.addEventListener('mousemove', (event) => {
            imagePopup.style.left = `${event.pageX + 10}px`;
            imagePopup.style.top = `${event.pageY + 10}px`;
        });

        element.addEventListener('mouseleave', () => {
            imagePopup.style.display = 'none';
        });
    });
});
