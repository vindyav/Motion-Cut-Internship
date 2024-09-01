let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const thumbnails = document.getElementsByClassName("thumbnail");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    thumbnails[slideIndex-1].className += " active";
}

let autoSlideInterval = setInterval(() => plusSlides(1), 5000);


function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.prev').addEventListener('click', stopAutoSlide);
document.querySelector('.next').addEventListener('click', stopAutoSlide);
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => thumbnail.addEventListener('click', stopAutoSlide));
