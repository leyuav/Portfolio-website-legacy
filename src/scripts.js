document.addEventListener("DOMContentLoaded", function () {
  // Move to the top button functionality
  const mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    mybutton.style.display = window.scrollY > 1500 ? "flex" : "none";
  };

  mybutton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // FAQ icon and panel toggle functionality
  document.querySelectorAll(".accordion").forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
      this.parentElement.classList.toggle("active");

      const icon = this.querySelector("i");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");

      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Hamburger menu functionality
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarLinks = document.getElementById("navbar-links");

  hamburgerMenu.addEventListener("click", function () {
    if (navbarLinks.style.display === "flex") {
      navbarLinks.style.display = "none";
      hamburgerMenu.innerHTML = "&#9776;";
      this.classList.remove("cross");
    } else {
      navbarLinks.style.display = "flex";
      hamburgerMenu.innerHTML = "&#10005;";
      this.classList.add("cross");
    }
  });

  window.addEventListener("resize", function () {
    navbarLinks.style.display = window.innerWidth > 1050 ? "flex" : "none";
  });

  // Project-boxes temporary alert
  const projectBoxes = document.querySelectorAll(".project-box");

  // Loop through all project boxes except the first and third
  projectBoxes.forEach((box, index) => {
    if (index !== 0 && index !== 1 && index !== 2 && index !== 3 && index !== 4) {
      box.addEventListener("click", function (event) {
        alert("Not available. Work in progress.");
        event.preventDefault(); // Prevent the default action of the <a> link
      });
    }
  });
});
