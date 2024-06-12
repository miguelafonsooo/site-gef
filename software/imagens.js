let currentIndex = 0;
const slidesToShow = 3; // Número de imagens a serem mostradas por vez
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    currentIndex = index;
    slides.style.transition = "transform 0.4s ease-in-out";
    slides.style.transform = `translateX(${-currentIndex * 300}px)`;
}

document.querySelector('.prev').addEventListener('click', function() {
    currentIndex -= slidesToShow;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', function() {
    currentIndex += slidesToShow;
    if (currentIndex >= totalSlides) {
        currentIndex = totalSlides - slidesToShow;
    }
    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
