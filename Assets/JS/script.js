document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links > li");

  // Toggle hamburger menu
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  // Accordion functionality for mobile dropdowns
  navItems.forEach(item => {
      item.addEventListener("click", () => {
          if (window.innerWidth <= 810) { // Only for mobile screens
              item.classList.toggle("expanded"); // Toggle the expanded class to show/hide the dropdown
          }
      });
  });
});



  
    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Form was submitted!');
  });
  
  