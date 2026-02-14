function goToQuestion() {
    document.getElementById("startScreen").classList.remove("active");
    document.getElementById("questionScreen").classList.add("active");
}

function authorize() {
    document.getElementById("questionScreen").classList.remove("active");
    document.getElementById("mainWebsite").classList.remove("hidden");
}

function notHer() {
    document.getElementById("funnyMessage").innerText =
        "Oops! This love journey is only for Miss Shabnam 💕";
}

function showSection(id) {
    const sections = document.querySelectorAll(".content");
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}
