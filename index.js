let slideIndex = 1;
showSlides(slideIndex);

// Hàm để chuyển đến slide tiếp theo
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hàm để chuyển đến slide cụ thể
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Hàm để hiển thị slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Kiểm tra và điều chỉnh slideIndex
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Ẩn tất cả các slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loại bỏ lớp "active" khỏi tất cả các dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Hiển thị slide hiện tại và đánh dấu dot tương ứng là active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Tự động chuyển slide sau mỗi 3 giây (3000 ms)
setInterval(function() {
  plusSlides(1); // Tự động chuyển sang slide tiếp theo
}, 3000); // 3000 ms = 3 giây
