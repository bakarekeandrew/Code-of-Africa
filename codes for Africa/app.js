document.querySelectorAll('.image-container-two img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        img.style.filter = 'brightness(10%)'; 
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
        img.style.filter = 'brightness(100%)'; 
    });
});


