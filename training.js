// Function to open the modal
function openModal(type) {
    const modal = document.getElementById("subscription-modal");
    modal.style.display = "block";

    // Optionally update modal content based on type
    const modalContent = modal.querySelector('.modal-content h2');
    modalContent.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Program Subscription`;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("subscription-modal");
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("subscription-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
