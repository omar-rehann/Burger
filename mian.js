let menu = document.querySelector(".toggle i");
let links = document.querySelector(".link");
let alllink = document.querySelectorAll(".some");
menu.onclick = function() {
    links.classList.toggle("active")
    if (links.classList.contains("active")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-x");
    } else {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-x");
    }
}

alllink.forEach(link => {
    link.addEventListener('click', function() {
        alllink.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
const move = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
move.reveal(".landing", { delay: 100, origin: "left" })
move.reveal(".recipe", { delay: 100, origin: "left" })
move.reveal(".popular", { delay: 100, origin: "left" })
move.reveal(".Delivery", { delay: 100, origin: "left" })
move.reveal(".concat", { delay: 100, origin: "left" })
move.reveal(".footer ", { delay: 100, origin: "left" })