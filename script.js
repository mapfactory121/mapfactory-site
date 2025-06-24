// script.js

// تشغيل صوت عند الضغط
function playSound() {
  const sound = new Audio("https://cdn.pixabay.com/download/audio/2023/03/23/audio_6c01fe75ba.mp3?filename=ui-click-136746.mp3");
  sound.volume = 0.4;
  sound.play();
}

// تبديل اللغة بين العربية والإنجليزية
function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const currentLang = document.documentElement.lang || 'ar';
  const newLang = currentLang === 'ar' ? 'en' : 'ar';

  document.documentElement.lang = newLang;
  document.body.dir = newLang === 'ar' ? 'rtl' : 'ltr';

  elements.forEach(el => {
    const newText = el.getAttribute(`data-${newLang}`);
    if (newText) el.textContent = newText;
  });

  playSound();
}

// تشغيل تلقائي للصوت عند إرسال النموذج
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", playSound);
}
