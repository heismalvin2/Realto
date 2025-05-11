document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const propertyType = document.getElementById("property-type");
    const priceRange = document.getElementById("price-range");
    const properties = document.querySelectorAll(".property-card");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const searchQuery = searchInput.value.trim().toLowerCase();
        const selectedType = propertyType.value.toLowerCase();
        const selectedPriceRange = priceRange.value;

        properties.forEach(property => {
            const location = property.getAttribute("data-location").toLowerCase();
            const type = property.getAttribute("data-type").toLowerCase();
            const price = parseInt(property.getAttribute("data-price"));

            let matchesSearch = searchQuery === "" || location.includes(searchQuery);
            let matchesType = selectedType === "" || type === selectedType;
            let matchesPrice = false;

            if (selectedPriceRange === "") {
                matchesPrice = true; // No price filter applied, show all prices
            } else if (selectedPriceRange === "100000000+") {
                matchesPrice = price >= 100000000; // Correctly filter 100M+
            } else {
                const [min, max] = selectedPriceRange.split("-").map(Number);
                matchesPrice = price >= min && (!max || price <= max);
            }

            // Show property only if ALL conditions match
            if (matchesSearch && matchesType && matchesPrice) {
                property.style.display = "block";
            } else {
                property.style.display = "none";
            }
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
