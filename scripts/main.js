const links = document.querySelectorAll(".mainNav__link");
const sections = document.querySelectorAll(".section");
const menuIcon = document.querySelector(".mainNav__icon");
const navLinks = document.querySelector(".mainNav__links");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("data-section");

    sections.forEach((sec) => sec.classList.remove("active"));

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    navLinks.classList.remove("active");
  });
});

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//Modal Pix
const modal = document.getElementById("pixModal");
const btn = document.getElementById("btnPix");
const span = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
