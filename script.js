  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".drop-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const progressItems = document.querySelectorAll(".progress-item");

    progressItems.forEach(item => {
        const percentage = parseInt(item.getAttribute("data-percentage"));
        const progressCircle = item.querySelector(".progress-circle");
        const percentageText = item.querySelector(".progress-percentage");
        
        let currentPercentage = 0;
        const incrementSpeed = 20; // Adjust this value to control speed

        const interval = setInterval(() => {
            if (currentPercentage < percentage) {
                currentPercentage++;
                percentageText.textContent = `${currentPercentage}%`;
                progressCircle.style.background = `conic-gradient(#678e1d ${currentPercentage * 3.6}deg, #333 ${currentPercentage * 3.6}deg)`;
            } else {
                clearInterval(interval);
            }
        }, incrementSpeed);
    });
});

const text = "Welcome to My Portfolio";
const speed = 100; // Speed in milliseconds
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("animatedText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
    }
}

typeText();
