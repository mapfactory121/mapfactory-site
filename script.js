// Modal logic
const orderBtn = document.getElementById('orderBtn');
const orderModal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const orderForm = document.getElementById('orderForm');
const formMsg = document.getElementById('formMsg');

// Open modal
orderBtn.onclick = function() {
  orderModal.style.display = 'flex';
  formMsg.textContent = '';
  orderForm.reset();
};

// Close modal
closeModal.onclick = function() {
  orderModal.style.display = 'none';
};

// Close modal when clicking outside content
window.onclick = function(event) {
  if (event.target === orderModal) {
    orderModal.style.display = 'none';
  }
};

// Optional: Show a message after form submit (Formspree will redirect by default)
orderForm.onsubmit = function(e) {
  formMsg.textContent = 'Sending...';
};
