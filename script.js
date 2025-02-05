document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    toggleBtn.addEventListener("click", () => {
        if (sidebar.style.transform === "translateX(0px)") {
            sidebar.style.transform = "translateX(-100%)";
        } else {
            sidebar.style.transform = "translateX(0px)";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    toggleBtn.addEventListener("click", () => {
        if (sidebar.style.transform === "translateX(0px)") {
            sidebar.style.transform = "translateX(-100%)";
        } else {
            sidebar.style.transform = "translateX(0px)";
        }
    });

    // Typing Animation
    const text = "Simple Blog";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Speed of typing
        }
    }

    typeEffect();
});
