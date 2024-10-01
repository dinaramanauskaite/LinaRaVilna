document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const dropdownToggles = document.querySelectorAll(".nav-links > li");

  hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
  });


  // dropdownToggles.forEach((toggle) => {
  //     toggle.addEventListener("click", function () {
          
  //         const isExpanded = this.classList.contains("expanded");
  
  //         dropdownToggles.forEach((item) => item.classList.remove("expanded"));

  //         if (!isExpanded) {
  //             this.classList.add("expanded");
  //         }
  //     });
  // });
});

    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Form was submitted!');
  });
  
  