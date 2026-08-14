/* =====================================================
   MOBILE MENU
===================================================== */

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");


if (menuIcon) {

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("show");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks = document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

    });

});



/* =====================================================
   ACTIVE NAVBAR
===================================================== */

const sections = document.querySelectorAll("section");


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



/* =====================================================
   AI MOUSE FOLLOW EFFECT
===================================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");

const cursorDot =
    document.querySelector(".cursor-dot");


document.addEventListener("mousemove", (event) => {

    if (cursorGlow) {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }


    if (cursorDot) {

        cursorDot.style.left =
            event.clientX + "px";

        cursorDot.style.top =
            event.clientY + "px";

    }

});



/* =====================================================
   TYPING ANIMATION
===================================================== */

const roles = [

    "AI & Data Science Student",

    "Aspiring Data Analyst",

    "Python Enthusiast",

    "Machine Learning Explorer",

    "AI Solution Builder"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


const typingText =
    document.querySelector(".typing-text");


function typeEffect() {

    if (!typingText) {

        return;

    }


    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        if (
            charIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;

        }

    }

    else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1)
                % roles.length;

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 45 : 85

    );

}


typeEffect();



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (
            elementTop <
            windowHeight - 80
        ) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);



/* =====================================================
   PROJECT IMAGE TILT EFFECT
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

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
                ((y - centerY) /
                centerY) * -2;


            const rotateY =
                ((x - centerX) /
                centerX) * 2;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});



/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

const buttons =
    document.querySelectorAll(
        ".btn, .contact-btn"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            const ripple =
                document.createElement("span");


            ripple.classList.add(
                "ripple"
            );


            this.appendChild(ripple);


            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});
