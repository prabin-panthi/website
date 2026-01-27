const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

const home_btn = document.getElementById('home-btn');
const contact_btn = document.getElementById('contact-btn');

function menu_toggle() {
    navMenu.classList.toggle('menu-open');
    if (navMenu.classList.contains('menu-open')) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

menuToggle.addEventListener('click', menu_toggle);
home_btn.addEventListener('click', menu_toggle);
contact_btn.addEventListener('click', menu_toggle);

let all = document.getElementById("all");
let web = document.getElementById("web");
let ml = document.getElementById("ml");
let dl = document.getElementById("dl");
let c = document.getElementById("c");
let tiles = Array.from(document.getElementsByClassName("tile"))

all.classList.add("active");

let btnIds = [all, web, ml, dl, c];

function webfunc() {
    tiles.forEach(tile => {
        if (!tile.classList.contains("web")) {
            tile.classList.add("hidden");
        }
        else {
            tile.classList.remove("hidden");
        }
    })
}

function mlfunc() {
    tiles.forEach(tile => {
        if (!tile.classList.contains("ml")) {
            tile.classList.add("hidden");
        }
        else {
            tile.classList.remove("hidden");
        }
    })
}

function dlfunc() {
    tiles.forEach(tile => {
        if (!tile.classList.contains("dl")) {
            tile.classList.add("hidden");
        }
        else {
            tile.classList.remove("hidden");
        }
    })
}

function cfunc() {
    tiles.forEach(tile => {
        if (!tile.classList.contains("c")) {
            tile.classList.add("hidden");
        }
        else {
            tile.classList.remove("hidden");
        }
    })
}

function allfunc() {
    tiles.forEach(tile => {
        tile.classList.remove("hidden");
    })
}

btnIds.forEach(btn => {
    btn.addEventListener("click", () => {
        btnIds.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        if (btn.id === "web") webfunc();
        else if (btn.id === "ml") mlfunc();
        else if (btn.id === "dl") dlfunc();
        else if (btn.id === "c") cfunc();
        else allfunc();
    });
});