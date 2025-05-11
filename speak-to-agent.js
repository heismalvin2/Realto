document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".contact-form-box form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Replace form with confirmation message
        document.querySelector(".contact-form-box").innerHTML = `
            <h2>Request Submitted!</h2>
            <p>Your request for inquiry on our properties has been submitted. You will receive a mail from one of our agents shortly.</p>
            <p>Thank you for reaching out!</p>
        `;
    });
});
