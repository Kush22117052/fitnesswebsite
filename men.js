// Full-screen image modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("full-image");
const closeBtn = document.getElementsByClassName("close")[0];
const productImages = document.querySelectorAll(".product-img");

// Open the modal when image is clicked
productImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.getAttribute("data-full");
    });
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// Get the payment modal element
const paymentModal = document.getElementById("payment-modal");

// Get the close button for the payment modal
const closePaymentButton = document.querySelector(".close-payment");

// Get all buy buttons
const buyButtons = document.querySelectorAll(".buy-btn");

// When any buy button is clicked, show the payment modal
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        paymentModal.style.display = "block";
    });
});

// When the close button is clicked, hide the modal
closePaymentButton.addEventListener('click', () => {
    paymentModal.style.display = "none";
});

// Close the modal if clicked outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target == paymentModal) {
        paymentModal.style.display = "none";
    }
});

