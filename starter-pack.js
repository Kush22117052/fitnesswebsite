document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const slidesContainer = document.querySelector('.slides-container');
    let currentIndex = 0;

    // Function to update slides
    function updateSlides() {
        // Move the container based on the current index
        slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
        
        // Update button visibility
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
    }

    // Next button event listener
    nextBtn.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlides();
        }
    });

    // Previous button event listener
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlides();
        }
    });

    // Initialize the first slide
    updateSlides();
});
