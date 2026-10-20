const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formFeedback.textContent = "Your message has been submitted successfully!";
    formFeedback.style.color = "#ffffff";

    contactForm.reset();
});