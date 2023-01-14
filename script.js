let computerGuess = Math.floor(Math.random() * 11);
let inputValue = document.querySelector(".user-input");
let messageText = document.querySelector(".message");
let totalAttempts = document.querySelector(".total");

const playGame = (event) => {
  event.preventDefault();
  if (computerGuess == inputValue.value) {
    messageText.innerHTML = "You won the game";
    celebrate();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } else if (computerGuess > inputValue.value) {
    messageText.innerHTML = "Please enter the greater number";
  } else {
    messageText.innerHTML = "Please enter the lesser number";
  }
  totalAttempts.innerHTML = Number(totalAttempts.innerHTML) + 1;
};

function celebrate() {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
