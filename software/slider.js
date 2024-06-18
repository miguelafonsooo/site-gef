let currentSlide = 0;
let isTransitioning = false;

function showSlide(index, direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const maxIndex = totalSlides - 1;

    if (index > maxIndex) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = maxIndex;
    } else {
        currentSlide = index;
    }

    if (isTransitioning) return;

    isTransitioning = true;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.addEventListener('transitionend', function handleTransitionEnd() {
        if (currentSlide === maxIndex) {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(0)`;
            currentSlide = 0;
        } else if (currentSlide === 0 && direction === 'prev') {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(-${maxIndex * 100}%)`;
            currentSlide = maxIndex;
        }
        isTransitioning = false;
        slides.removeEventListener('transitionend', handleTransitionEnd);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1, 'next');
}

function prevSlide() {
    showSlide(currentSlide - 1, 'prev');
}
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});