document.addEventListener("DOMContentLoaded", () => {
    // Form Submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Display confirmation message
        const contactForm = document.querySelector(".contact-form");
        contactForm.innerHTML = `
            <h2>Thank You!</h2>
            <p>Your message has been emailed to our team, and you will receive a response as soon as possible.</p>
            <p>We appreciate your patience!</p>
        `;
    });

    // Reveal Animations
    const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .zoom-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = "0.2s";
                entry.target.style.animationPlayState = "running";
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
