let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const reveals = document.querySelectorAll(".reveal");
const typingElement = document.getElementById("typing");

const texts = [
    "Web Developer",
    "UI UX Enthusiast",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1200);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeLoop, isDeleting ? 40 : 70);
}

typeLoop();


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});


hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll < lastScrollTop) {
        // scroll ke atas
        navbar.style.top = "0";
    } else {
        // scroll ke bawah
        navbar.style.top = "-80px";
    }

    lastScrollTop = currentScroll;
});

