// navbar start
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY === 0) {
    header.style.backgroundColor = "#5d5cdb";
  } else {
    header.style.backgroundColor = "#5c5cdb6e";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function checkScreenWidth() {
    if (window.innerWidth < 1024) {
      let menulist = document.getElementById("menu-list");
      menulist.style.height = "0px";
      menulist.style.padding = "0px";
      let togglebtn = document.getElementById("togglemenu");
      let menuIsOpen = false;

      function togglemenu() {
        if (menuIsOpen == false) {
          menulist.style.padding = "1.2rem 0";
          menulist.style.height = "14.5rem";
          menuIsOpen = true;
        } else {
          menulist.style.height = "0px";
          menulist.style.padding = "0px";
          menuIsOpen = false;
        }
      }

      togglebtn.addEventListener("click", togglemenu);
      menulist.addEventListener("click", togglemenu);
    }
  }
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
});
// navbar end

// navbar active start
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function changeActiveLink() {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
});
// navbar active end

// asking start
document.addEventListener("DOMContentLoaded", function () {
  const prompt = document.querySelector(".prompt");
  setTimeout(() => {
    prompt.style.transform = "translate(-50%, -50%) scale(1)";
    prompt.style.opacity = "1";
    console.log("test");
  }, 1200);
});

const nameForm = document.getElementById("name-form");
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const prompt = document.querySelector(".prompt");

  let urName = event.target.urName.value;
  document.getElementById("urName").textContent = urName;

  if (urName == "") {
    prompt.style.transform = "translate(-50%, -50%) scale(1)";
  } else {
    prompt.style.transform = "translate(-50%, -50%) scale(0)";
  }

  urName = event.target.urName.value;
  document.getElementById("urName").textContent = urName;
});
// asking end

// banner slide start
const banner = document.querySelector(".banner");
const images = ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.jpg"];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  banner.style.backgroundImage = `url(${images[currentIndex]})`;
}, 3000);
// banner slide end

// form start
document.querySelector("#message-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const name = document.querySelector("input[name='nama']").value;
  const birth = document.querySelector("input[name='birth']").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const message = document.querySelector("textarea[name='message']").value;

  document.querySelector("#nama").textContent = name;
  document.querySelector("#birth").textContent = birth;
  document.querySelector("#gender").textContent = gender;
  document.querySelector("#pesan").textContent = message;
});
// form end
