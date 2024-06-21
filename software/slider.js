let currentSlide = 0;
let isTransitioning = false;
const slideWidth = document.querySelector('.slide').offsetWidth;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (isTransitioning) return;

    isTransitioning = true;
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * slideWidth}px)`;

    slides.addEventListener('transitionend', function handleTransitionEnd() {
        currentSlide = index;
        isTransitioning = false;
        slides.removeEventListener('transitionend', handleTransitionEnd);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});
