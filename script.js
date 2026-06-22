// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});

// Back to top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

topBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

// Scroll reveal animation (FIXED - single version only)
const sections = document.querySelectorAll("section");

const reveal = () => {
sections.forEach(sec => {
const windowHeight = window.innerHeight;
const revealTop = sec.getBoundingClientRect().top;

if (revealTop < windowHeight - 100) {
sec.classList.add("show");
}
});
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);