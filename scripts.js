document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  });

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form was submitted!');
});
