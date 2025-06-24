// Play sound on submit or interaction
function playSound() {
  const sound = new Audio("https://cdn.pixabay.com/download/audio/2023/03/23/audio_6c01fe75ba.mp3?filename=ui-click-136746.mp3");
  sound.volume = 0.4;
  sound.play();
}

// Toggle language between English and Arabic
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const currentLang = document.documentElement.lang || 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';

  document.documentElement.lang = newLang;
  document.body.dir = newLang === 'ar' ? 'rtl' : 'ltr';

  elements.forEach(el => {
    const newText = el.getAttribute(`data-${newLang}`);
    if (newText) el.textContent = newText;
  });

  playSound();
}
