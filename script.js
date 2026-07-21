const opening = document.getElementById('opening');
const enterButton = document.getElementById('enterButton');
const topbar = document.getElementById('topbar');
const menuButton = document.getElementById('menuButton');
const menuPanel = document.getElementById('menuPanel');
const musicButton = document.getElementById('musicButton');

function enterSite() {
  opening.classList.add('is-hidden');
  document.body.classList.remove('is-locked');
  topbar.classList.add('is-visible');
  setTimeout(() => opening.remove(), 900);
}

enterButton.addEventListener('click', enterSite);

function toggleMenu(force) {
  const willOpen = typeof force === 'boolean' ? force : !menuPanel.classList.contains('is-open');
  menuPanel.classList.toggle('is-open', willOpen);
  menuPanel.setAttribute('aria-hidden', String(!willOpen));
  menuButton.setAttribute('aria-expanded', String(willOpen));
  document.body.classList.toggle('is-locked', willOpen);
}

menuButton.addEventListener('click', () => toggleMenu());
menuPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));

window.addEventListener('scroll', () => {
  topbar.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

const weddingDate = new Date('2027-11-27T12:00:00-03:00').getTime();
function updateCountdown() {
  const distance = Math.max(0, weddingDate - Date.now());
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);
  document.getElementById('days').textContent = String(days).padStart(3, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

musicButton.addEventListener('click', () => {
  const musicUrl = 'https://www.youtube.com/results?search_query=Nossos+Caminhos+Nelsinho+Correa';
  window.open(musicUrl, '_blank', 'noopener,noreferrer');
});
