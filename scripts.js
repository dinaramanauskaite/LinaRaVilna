document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form was submitted!');
});
