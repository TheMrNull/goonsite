function showForm(formId){
    document.querySelectorAll(".form_box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}


// Countdown code inside a function to avoid conflicts
function startCountdown() {
  const targetDate = new Date("2025-07-02T07:50:00").getTime();
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      countdownElement.textContent = "Countdown Complete!";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Call the function when the page loads or when appropriate
window.addEventListener('DOMContentLoaded', startCountdown);


const images = document.querySelectorAll('.image');
const memes = document.querySelectorAll('.meme');

function getRandomPosition(side) {
  const container = document.querySelector('.memes');
  const screenW = container.offsetWidth;
  const screenH = container.offsetHeight;
  const offset = 50;
  let x, y;

  switch (side) {
    case 'left':
      x = -offset;
      y = Math.random() * (screenH - 100);
      break;
    case 'right':
      x = screenW - 100 + offset;
      y = Math.random() * (screenH - 100);
      break;
    case 'top':
      x = Math.random() * (screenW - 100);
      y = -offset;
      break;
    case 'bottom':
      x = Math.random() * (screenW - 100);
      y = screenH - 100 + offset;
      break;
  }

  return { x, y };
}

function moveImageRandomly(image) {
  const sides = ['left', 'right', 'top', 'bottom'];
  const randomSide = sides[Math.floor(Math.random() * sides.length)];
  const startPos = getRandomPosition(randomSide);

  const endPos = {
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 100)
  };

  image.style.left = `${startPos.x}px`;
  image.style.top = `${startPos.y}px`;

  setTimeout(() => {
    image.style.left = `${endPos.x}px`;
    image.style.top = `${endPos.y}px`;
  }, 100);
}

function moveMemeRandomly(meme) {
  const sides = ['left', 'right', 'top', 'bottom'];
  const randomSide = sides[Math.floor(Math.random() * sides.length)];
  const startPos = getRandomPosition(randomSide);

  const container = document.querySelector('.memes');
  // Allow images to move up to 50% outside the container
  const outX = container.offsetWidth;
  const outY = container.offsetHeight;
  const extra = 200; // how far outside they can go

  // Randomly choose a position, possibly outside the container
  const endPos = {
    x: (Math.random() - 0.25) * (outX + extra), // -25% to 75% of container width
    y: (Math.random() - 0.25) * (outY + extra)  // -25% to 75% of container height
  };

  meme.style.left = `${startPos.x}px`;
  meme.style.top = `${startPos.y}px`;

  setTimeout(() => {
    meme.style.left = `${endPos.x}px`;
    meme.style.top = `${endPos.y}px`;
  }, 50); // move almost immediately
}

function startMovement() {
  images.forEach(image => {
    moveImageRandomly(image);
    setInterval(() => moveImageRandomly(image), 4000);
  });
}

function startMemeMovement() {
  memes.forEach(meme => {
    moveMemeRandomly(meme);
    setInterval(() => moveMemeRandomly(meme), 400); // move every 0.4 seconds (very fast)
  });
}

window.onload = () => {
  startMovement();
  startMemeMovement();
};