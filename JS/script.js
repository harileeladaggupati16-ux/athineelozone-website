/* ATHINEEL OZONE script.js */
/* Sticky Navbar */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* Active Menu */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }
    });
});

/* Counter Animation */
const counters = document.querySelectorAll(".counter-section h2");
let counterStarted = false;
window.addEventListener("scroll", () => {
    const counterSection = document.querySelector(".counter-section");
    if (!counterSection) return;
    if (
        window.scrollY >
        counterSection.offsetTop - window.innerHeight + 100 &&
        !counterStarted
    ) {
        counterStarted = true;
        counters.forEach(counter => {
            const text = counter.innerText;
            const number = parseInt(text);
            const suffix = text.replace(number, "");
            let count = 0;
            const speed = Math.ceil(number / 80);
            const update = () => {
                count += speed;
                
                if (count < number) {
                    counter.innerText = count + suffix;
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = number + suffix;
                }
            };
            update();
        });
    }
});

/* Scroll Top Button */
const scrollBtn = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

/* Fade Up Animation */
const fadeElements = document.querySelectorAll(
    ".product-card,.feature-box,.industry-card,.icon-box,.blog-card"
);
const observer = new IntersectionObserver(
(entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("fade-up");
    }
});
},

{
    threshold: 0.2
});
fadeElements.forEach(el => observer.observe(el));

/* FAQ Toggle Icon */
const faqButtons = document.querySelectorAll(".accordion-button");
faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        faqButtons.forEach(btn => {
            btn.classList.remove("opened");
        });
        
        button.classList.add("opened");
    });
});

/* Customer Logo Auto Animation */
const logos = document.querySelectorAll(".customers img");
let currentLogo = 0;
if (logos.length > 0) {
    setInterval(() => {
        logos.forEach(img => {
            img.style.opacity = ".4";
            img.style.transform = "scale(1)";
        });
        logos[currentLogo].style.opacity = "1";
        logos[currentLogo].style.transform = "scale(1.15)";
        currentLogo++;
        if (currentLogo >= logos.length) {
            currentLogo = 0;
        }
    }, 2000);
}

/* Hero Image Floating */
const heroImage = document.querySelector(".hero-image");
if (heroImage) {
    window.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;
        heroImage.style.transform = `translate(${x}px, ${y}px)`;
    });
}

/* Preloader (Optional) */
window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

/* Console Message */
console.log("Athineel Ozone Website Loaded Successfully");