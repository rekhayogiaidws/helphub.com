function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
