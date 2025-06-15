// Scroll reveal animations
ScrollReveal().reveal('section', {
  delay: 200,
  duration: 1000,
  reset: true,
  distance: '50px',
  origin: 'bottom'
});

// Form validation (basic)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully! (You can integrate EmailJS here.)");
});
