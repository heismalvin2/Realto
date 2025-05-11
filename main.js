document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".partner-slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const slideWidth = slides[0].clientWidth;

    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
});


document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector(".hero-content");

    // Fade-in animation
    heroSection.style.opacity = "0";
    heroSection.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroSection.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroSection.style.opacity = "1";
        heroSection.style.transform = "translateY(0)";
    }, 300);
});


document.querySelector('.toggle-text').addEventListener('click', function(event) {
    event.preventDefault();
    let extraText = document.querySelector('.extra-text');
    let linkText = document.querySelector('.toggle-text');

    if (extraText.style.display === "none") {
        extraText.style.display = "inline";
        linkText.innerHTML = "Show Less ↑";
    } else {
        extraText.style.display = "none";
        linkText.innerHTML = "Read More →";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
