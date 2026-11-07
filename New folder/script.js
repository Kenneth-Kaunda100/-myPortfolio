 
const typing = document.getElementById("typing");

const words = [ "Frontend Developer", "Backend Developer","Mobile Developer"];

let wordIndex = 0;    
let charIndex = 0;    
let deleting = false;

function typeEffect() {
    const word = words[wordIndex];

    if (deleting) {
        charIndex--;
    } 
    else {
        charIndex++;
 }

    typing.textContent = word.substring(0, charIndex);

 
    if (!deleting && charIndex === word.length) {
          deleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }
 
    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex++;
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


 
const tag = document.getElementById("tag");

function swing() {
    tag.classList.add("swing");
}

tag.addEventListener("animationend", function () {
    tag.classList.remove("swing");
});

   tag.addEventListener("mouseenter", swing);
tag.addEventListener("click", swing);

 
const sections = document.querySelectorAll("section");

sections.forEach(function (section) {
 
    if (section.id !== "home") {
        section.classList.add("hidden");
    }
});

function revealSections() {
    sections.forEach(function (section) {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

 
const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.className = "top-btn";
topButton.style.display = "none";
document.body.appendChild(topButton);

topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


 
const navLinks = document.querySelectorAll(".nav-links a");

function highlightMenu() {
    let current = "";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}


 
window.addEventListener("scroll", function () {
    revealSections();
    highlightMenu();

     if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

revealSections();


 
const myEmail = "youremail@example.com";   

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = "Portfolio message from " + name;
    const body = message + "\n\nFrom: " + name + " (" + email + ")";

    window.location.href =
        "mailto:" + myEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
});
