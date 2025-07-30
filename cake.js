let candlesLeft = 5;

function burnCandle(el) {
  if (el.classList.contains("burned")) return;

  el.classList.add("burned");
  candlesLeft--;

  if (candlesLeft === 0) {
    setTimeout(() => {
      document.getElementById("popup").classList.remove("hidden");
    }, 500);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".candle").forEach(candle => {
    candle.addEventListener("mouseenter", () => burnCandle(candle));
    candle.addEventListener("click", () => burnCandle(candle));
  });
});

// // Automatically play birthday music after any click (first time only)
// window.addEventListener('click', () => {
//   const bgMusic = document.getElementById('birthdayMusic');
//   if (bgMusic && bgMusic.paused) {
//     bgMusic.play().catch(() => {
//       console.log("Autoplay blocked, user needs to click again.");
//     });
//   }
// }, { once: true });
