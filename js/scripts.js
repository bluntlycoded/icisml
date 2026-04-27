// Toggle Mobile Menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
  }
  
  // Wait for the DOM to load before attaching event listeners
  document.addEventListener('DOMContentLoaded', function () {
    
    // Registration Form Handling
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
      registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you can add form validation and integration with backend services
        alert('Registration submitted successfully! We will contact you soon.');
        registrationForm.reset();
      });
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you can integrate with an email API or backend service for message handling
        alert('Your message has been sent successfully!');
        contactForm.reset();
      });
    }
  });
  