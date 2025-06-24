// Play click sound
function playSound() {
  const sound = new Audio("https://cdn.pixabay.com/download/audio/2023/03/23/audio_6c01fe75ba.mp3?filename=ui-click-136746.mp3");
  sound.volume = 0.3;
  sound.play();
}

// Scroll to section with smooth animation
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    playSound();
  }
}

// Toggle language
let currentLang = 'en';
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  playSound();
}

// Background ambient sound (looped)
window.addEventListener("DOMContentLoaded", () => {
  const bgAudio = new Audio("https://cdn.pixabay.com/download/audio/2023/05/04/audio_18f2cb0e1c.mp3?filename=ambient-soft-145038.mp3");
  bgAudio.volume = 0.08;
  bgAudio.loop = true;
  bgAudio.play().catch(() => {
    // autoplay policy
    console.warn("User interaction needed to start background audio.");
  });
});
