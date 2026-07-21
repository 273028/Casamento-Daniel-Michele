const weddingDate = new Date(
  document.querySelector(".countdown").dataset.weddingDate
);

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference <= 0) {
    document.querySelector(".countdown").innerHTML =
      "<p class='light'>Hoje é o nosso grande dia!</p>";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("copyPix").addEventListener("click", async () => {
  const pixKey = document.getElementById("pixKey").textContent.trim();
  const message = document.getElementById("copyMessage");

  if (pixKey === "ADICIONAR CHAVE PIX") {
    message.textContent = "Substitua o texto pela chave PIX antes de publicar.";
    return;
  }

  try {
    await navigator.clipboard.writeText(pixKey);
    message.textContent = "Chave PIX copiada!";
  } catch {
    message.textContent = "Não foi possível copiar automaticamente.";
  }
});
