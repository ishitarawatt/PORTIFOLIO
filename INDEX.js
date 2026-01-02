/* Typing Animation */
const text = "Frontend Developer | Web Developer | OutriX Intern";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

/* Modal */
function openModal(title, desc) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
