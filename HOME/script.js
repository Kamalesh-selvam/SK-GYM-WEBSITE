document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = "☰";
    menuToggle.style.cssText = "font-size: 2rem; background: none; border: none; color: white; cursor: pointer; display: none;";
    
    const nav = document.querySelector("nav");
    const navLinks = document.querySelector(".nav-links");
    
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    if (window.innerWidth < 768) {
        menuToggle.style.display = "block";
        nav.prepend(menuToggle);
    }

    // Swiper.js (Image Gallery)
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // Scroll effect
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});