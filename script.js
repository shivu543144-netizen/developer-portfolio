const contactForm = document.getElementById('contactForm');
const visitorName = document.getElementById('visitorName');
const successMsg = document.getElementById('formSuccessMsg');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameValue = visitorName.value;
    successMsg.innerText = "Thank you, " + nameValue + "! Your message was sent successfully. 🚀";
    contactForm.reset();
    setTimeout(function() {
        successMsg.innerText = "";
    }, 4000);
});