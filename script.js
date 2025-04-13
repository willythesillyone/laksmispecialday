function blowOut() {
  const flame = document.getElementById('flame');
  if (flame) {
    flame.style.transition = 'opacity 0.5s ease-out';
    flame.style.opacity = 0;
    setTimeout(() => flame.style.display = 'none', 500);
  }
}

function relight() {
  const flame = document.getElementById('flame');
  if (flame) {
    flame.style.display = 'block';
    flame.style.opacity = 0;
    setTimeout(() => {
      flame.style.transition = 'opacity 0.5s ease-in';
      flame.style.opacity = 1;
    }, 50);
  }
}
