document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const post = this.parentElement;
            const fullText = post.querySelector(".full-text");

            if (fullText.style.display === "none" || fullText.style.display === "") {
                fullText.style.display = "block";
                this.textContent = "Show Less";
            } else {
                fullText.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});
