// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Language toggle
function toggleLanguage() {
  const allElements = document.querySelectorAll('[data-en]');
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = newLang;
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

  allElements.forEach(el => {
    el.textContent = el.getAttribute(`data-${newLang}`);
  });
}

// Sound effect on submit
function playSound() {
  const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_252650ec04.mp3?filename=click-124467.mp3');
  audio.play();
}

// Optional visual effect
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = 1;
  }, 100);
});
