// ================= MOBILE MENU =================

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("show");

    });

}


// Close mobile menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

    });

});


// ================= TYPING ANIMATION =================

const typingText = document.getElementById("typing-text");

const roles = [
    "AI & Data Science Student",
    "Aspiring Data Analyst",
    "Python Enthusiast",
    "Machine Learning Learner",
    "AI Project Builder"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );
}

typeEffect();


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

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


// ================= ACTIVE NAVBAR =================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ================= CURSOR GLOW =================

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});


// ================= ANIMATED COUNTERS =================

const counters =
    document.querySelectorAll(".counter");


let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const target =
            parseFloat(
                counter.dataset.target
            );

        let current = 0;

        const increment =
            target / 80;


        const updateCounter = () => {

            current += increment;

            if (current < target) {

                if (target % 1 !== 0) {

                    counter.textContent =
                        current.toFixed(2);

                } else {

                    counter.textContent =
                        Math.floor(current) + "+";

                }

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                if (target % 1 !== 0) {

                    counter.textContent =
                        target.toFixed(2);

                } else {

                    counter.textContent =
                        target + "+";

                }

            }

        };

        updateCounter();

    });

}


// Counter observer

const statsSection =
    document.querySelector(".stats-section");


const counterObserver =
    new IntersectionObserver(
        entries => {

            if (entries[0].isIntersecting) {

                startCounters();

            }

        },
        {
            threshold: 0.3
        }
    );


if (statsSection) {

    counterObserver.observe(
        statsSection
    );

}


// ================= 3D PROJECT CARD =================

const tiltCards =
    document.querySelectorAll(".tilt-card");


tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// ================= CONSOLE MESSAGE =================

console.log(
    "%c Welcome to RokeshSri's AI Portfolio 🚀 ",
    "color:#4de8ff;font-size:16px;font-weight:bold;"
);

console.log(
    "Built with HTML, CSS, JavaScript & AI-inspired animations."
);