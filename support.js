document.addEventListener('DOMContentLoaded', function() {
    const supportBtn = document.getElementById('support-btn');
    const supportOverlay = document.getElementById('support-overlay');
    const closeBtn = document.getElementById('close-btn');

    // Open the overlay when the "Contact Us" button is clicked
    supportBtn.addEventListener('click', function() {
        supportOverlay.classList.add('open');
    });

    // Close the overlay with rotation effect when the close button is clicked
    closeBtn.addEventListener('click', function() {
        closeBtn.classList.add('rotate'); // Add rotation class first
        
        // Delay the removal of the overlay to allow the rotation to complete
        setTimeout(function() {
            supportOverlay.classList.remove('open');
            closeBtn.classList.remove('rotate'); // Optionally remove rotation class
        }, 100); // Match this delay with the CSS transition time (100ms for the rotation)
    });

    // Optional: Close the overlay when clicking outside of it
    supportOverlay.addEventListener('click', (event) => {
        if (event.target === supportOverlay) {
            closeBtn.classList.add('rotate');
            setTimeout(function() {
                supportOverlay.classList.remove('open');
                closeBtn.classList.remove('rotate'); // Optionally remove rotation class
            }, 100);
        }
    });
});
