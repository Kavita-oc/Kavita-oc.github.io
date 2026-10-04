// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the nav link of the section currently in view
const links = document.querySelectorAll("nav div a");
const sections = document.querySelectorAll("section[id]");

function setActive() {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", setActive);
setActive();
