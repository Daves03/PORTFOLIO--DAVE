// Toggle menu function for opening and closing the fullscreen menu
function toggleMenu() {
  const menu = document.getElementById('fullscreenMenu');
  menu.classList.toggle('open');
}

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll('.fullscreen-menu ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('fullscreenMenu');
    menu.classList.remove('open'); // Close the menu
  });
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate the offset scroll position
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 68; // adjust 60px for sticky header height

            // Smooth scroll with offset
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

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

function toggleDetails(element) {
    const portfolioItem = element.closest('.portfolio-item');
    portfolioItem.classList.toggle('expand');
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
}

