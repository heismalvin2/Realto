document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".neighborhood-search-form");
    const searchInput = document.querySelector(".search-input");
    
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        
        const states = document.querySelectorAll(".state");
        let found = false;
        
        states.forEach(state => {
            const stateName = state.querySelector("h3").innerText.toLowerCase();
            if (stateName.includes(query)) {
                state.scrollIntoView({ behavior: "smooth" });
                found = true;
            }
        });

        if (!found) {
            alert("State not found. Please try again.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const viewDetailsBtns = document.querySelectorAll(".view-details");

    viewDetailsBtns.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const propertyDetails = this.nextElementSibling;
            propertyDetails.classList.toggle("hidden"); // Show/Hide details
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
