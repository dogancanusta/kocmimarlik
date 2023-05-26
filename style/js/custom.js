var slideIndex = 0;
showSlides();
var slides,dots;

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

      }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

function currentSlide(index) {
    if (index > slides.length) {index = 1}
    else if(index < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
        slides[index-1].style.display = "block";  
        dots[index-1].className += " active";
    }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("slide-item");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

const slider = document.getElementById("slider");
slider.addEventListener("input", function () {
  const frontImage = document.querySelector(".front-img")
  frontImage.style.clipPath = `polygon(0 0, ${this.value}% 0, ${this.value}% 100%, 0% 100%)`;
});

window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}