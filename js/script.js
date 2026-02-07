let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

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

