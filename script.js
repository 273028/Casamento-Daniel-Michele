const intro = document.getElementById('intro');
const skipIntro = document.getElementById('skipIntro');
const body = document.body;

function closeIntro() {
  intro.classList.add('is-hidden');
  body.classList.remove('is-locked');
  window.setTimeout(() => intro.remove(), 900);
}

body.classList.add('is-locked');
const introSeen = sessionStorage.getItem('dm-intro-seen');
if (introSeen) {
  closeIntro();
} else {
  window.setTimeout(() => {
    sessionStorage.setItem('dm-intro-seen', 'true');
    closeIntro();
  }, 3200);
}
skipIntro.addEventListener('click', () => {
  sessionStorage.setItem('dm-intro-seen', 'true');
  closeIntro();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const weddingDate = new Date('2027-11-27T12:00:00-03:00').getTime();
const fields = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function pad(value, length = 2) {
  return String(value).padStart(length, '0');
}

function updateCountdown() {
  const distance = Math.max(0, weddingDate - Date.now());
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  fields.days.textContent = pad(days, 3);
  fields.hours.textContent = pad(hours);
  fields.minutes.textContent = pad(minutes);
  fields.seconds.textContent = pad(seconds);
}
updateCountdown();
window.setInterval(updateCountdown, 1000);

const musicButton = document.getElementById('musicButton');
const music = document.getElementById('weddingMusic');
const musicNote = document.getElementById('musicNote');
const musicIcon = musicButton.querySelector('.music-button__icon');
const musicStrong = musicButton.querySelector('strong');

musicButton.addEventListener('click', async () => {
  if (!music.paused) {
    music.pause();
    musicButton.setAttribute('aria-pressed', 'false');
    musicIcon.textContent = '▶';
    musicStrong.textContent = 'Ouvir “Nossos Caminhos”';
    return;
  }

  try {
    await music.play();
    musicButton.setAttribute('aria-pressed', 'true');
    musicIcon.textContent = 'Ⅱ';
    musicStrong.textContent = 'Pausar nossa música';
    musicNote.hidden = true;
  } catch (error) {
    musicNote.hidden = false;
  }
});
