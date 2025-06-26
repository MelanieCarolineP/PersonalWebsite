
function initializeEventListeners() {
    var menuIcon = document.getElementById("menu-icon");
    menuIcon.addEventListener('click', toggleMenu); 
}
function toggleMenu() {
    var menu = document.getElementById("menu-screen");
    var menuIcon = document.getElementById("menu-icon");
    if (menu.style.display == "block") {
        menu.style.display = "none";
        menuIcon.style.fill = "var(--light-accent)";
    } else {
        menu.style.display = "block";
        menuIcon.style.fill = "var(--contrast-font)";
    }
}