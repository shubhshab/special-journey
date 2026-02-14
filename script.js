function goToQuestion() {
    document.getElementById("startScreen").classList.remove("active");
    document.getElementById("questionScreen").classList.add("active");
}

function authorize() {
    document.getElementById("questionScreen").classList.remove("active");
    document.getElementById("mainWebsite").classList.remove("hidden");

    startTyping();
    startHearts();
}

function notHer() {
    document.getElementById("funnyMessage").innerText =
        "Only my beautiful Shabnam can enter this love world 💕";
}

function showSection(id) {
    const sections = document.querySelectorAll(".content");
    sections.forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

/* Romantic Typing Effect */
function startTyping() {
    const text = "Mokku, from the moment you came into my life, everything changed beautifully...thank you sonnu 💖";
    let i = 0;
    const speed = 50;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typingText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

/* Falling Color Hearts */
function startHearts() {
    const container = document.querySelector(".hearts-container");

    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
