// Sound effect for button hover
function playSound() {
  const sound = new Audio("https://cdn.pixabay.com/download/audio/2023/03/23/audio_6c01fe75ba.mp3?filename=ui-click-136746.mp3");
  sound.volume = 0.3;
  sound.play();
}

// Smooth scroll to section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    playSound();
  }
}
