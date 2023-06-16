const letters = document.querySelectorAll('.neochampy-title span');

function playAnimation() {
  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.2}s`;
    letter.classList.add('animate');
  });
}

playAnimation();
