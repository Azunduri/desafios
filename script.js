const flor = document.getElementById('flor');
let angulo = 0;

function animarFlor() {
  angulo += 1;
  flor.style.transform = `rotate(${angulo}deg)`;
  requestAnimationFrame(animarFlor);
}

animarFlor();
