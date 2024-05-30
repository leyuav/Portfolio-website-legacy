// Code for button 'move to the top'
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down N px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End of code

// Code for changing FAQ icon to 'up'
document.querySelectorAll('.accordion').forEach(function (accordion) {
  accordion.addEventListener('click', function () {
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-chevron-down')) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    } else {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    }
  });
});
// End of code

// Code for FAQ dropdown panel
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var answer = this.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
// End of code

// Code for hamburger menu
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navbarLinks = document.getElementById('navbar-links');

  hamburgerMenu.addEventListener('click', function() {
      if (navbarLinks.style.display === 'flex') {
          navbarLinks.style.display = 'none';
      } else {
          navbarLinks.style.display = 'flex';
      }
  });

  //Links appear back after shrinking and stretching window back
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1050) {
        navbarLinks.style.display = 'flex';
    } else {
        navbarLinks.style.display = 'none';
    }
});
});
// End of code
