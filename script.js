/* ================================
   LOADER
================================ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);

});


/* ================================
   MENU MOBILE
================================ */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fecha o menu ao clicar em um link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ================================
   HEADER AO ROLAR
================================ */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================================
   ANIMAÇÕES REVEAL
================================ */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================================
   CONTADORES
================================ */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const duration = 1800;

        const increment = target / (duration / 16);

        function updateCounter() {

            current += increment;

            if (current < target) {

                counter.textContent =
                    Math.floor(current).toLocaleString("pt-BR");

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target.toLocaleString("pt-BR") + "+";

            }

        }

        updateCounter();

    });

}


/* Detecta quando os números aparecem */

const numbersSection = document.querySelector(".numbers");

const numberObserver = new IntersectionObserver(

    entries => {

        if (entries[0].isIntersecting) {

            startCounters();

            numberObserver.disconnect();

        }

    },

    {
        threshold: 0.3
    }

);

numberObserver.observe(numbersSection);


/* ================================
   PARALLAX HERO
================================ */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (window.innerWidth > 800) {

        const scrollPosition = window.scrollY;

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.35}px`;

    }

});


/* ================================
   ANIMAÇÃO DOS CARDS
================================ */

const cards = document.querySelectorAll(".treatment-card");

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================================
   ANO AUTOMÁTICO
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================================
   SCROLL SUAVE
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* ================================
   EFEITO NO BOTÃO WHATSAPP
================================ */

const whatsapp = document.querySelector(".whatsapp");

whatsapp.addEventListener("mouseenter", () => {

    whatsapp.style.transform = "scale(1.15)";

});

whatsapp.addEventListener("mouseleave", () => {

    whatsapp.style.transform = "scale(1)";

});
