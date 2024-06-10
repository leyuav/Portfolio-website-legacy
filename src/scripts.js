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
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
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
    if (index !== 0 && index !== 2 && index !== 4) {
      box.addEventListener("click", function (event) {
        alert("Not available. Work in progress.");
        event.preventDefault(); // Prevent the default action of the <a> link
      });
    }
  });
});

// Test Support Live Chat window
window.__lc = window.__lc || {};
window.__lc.license = 14352783;
window.__lc.integration_name = "manual_channels";

(function (n, t, c) {
  function i(n) {
    return e._h ? e._h.apply(null, n) : e._q.push(n);
  }

  var e = {
    _q: [],
    _h: null,
    _v: "2.0",
    on: function () {
      i(["on", c.call(arguments)]);
    },
    once: function () {
      i(["once", c.call(arguments)]);
    },
    off: function () {
      i(["off", c.call(arguments)]);
    },
    get: function () {
      if (!e._h)
        throw new Error("[LiveChatWidget] You can't use getters before load.");
      return i(["get", c.call(arguments)]);
    },
    call: function () {
      i(["call", c.call(arguments)]);
    },
    init: function () {
      var n = t.createElement("script");
      n.async = true;
      n.type = "text/javascript";
      n.src = "https://cdn.livechatinc.com/tracking.js";
      t.head.appendChild(n);
    },
  };

  !n.__lc.asyncInit && e.init();
  n.LiveChatWidget = n.LiveChatWidget || e;
})(window, document, [].slice);
