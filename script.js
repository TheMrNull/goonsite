function showForm(formId){
    document.querySelectorAll(".form_box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}


// Countdown code inside a function to avoid conflicts
function startCountdown() {
  const targetDate = new Date("2025-06-30T08:40:00").getTime();
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