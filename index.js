let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].style.transform = 'translateX(0)';
}

setInterval(nextSlide, 3000); // Chuyển slide mỗi 3 giây
