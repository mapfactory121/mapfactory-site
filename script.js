// Scroll to section
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Language toggle
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const isEnglish = document.documentElement.lang === 'en';
  document.documentElement.lang = isEnglish ? 'ar' : 'en';
  document.body.dir = isEnglish ? 'rtl' : 'ltr';

  elements.forEach(el => {
    const newText = isEnglish ? el.dataset.ar : el.dataset.en;
    if (newText) el.textContent = newText;
  });
}

// Play sound on form submit
function playSound() {
  const audio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_49b55c5ba7.mp3');
  audio.volume = 0.5;
  audio.play();
}

// Optional: smooth fade-in animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button, h2, p, a, input, textarea').forEach(el => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s ease';
    setTimeout(() => el.style.opacity = 1, 100);
  });
});
