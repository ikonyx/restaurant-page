import "./styles.css";
import homePage from "./components/Homepage.js";
import menuPage  from "./components/Menupage.js";

homePage();

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener('click', switchToMenu);

function switchToMenu() {
    document.querySelector('#content').innerHTML = "";
    menuPage();
}

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener('click', switchToHome);

function switchToHome() {
    document.querySelector('#content').innerHTML = "";
    homePage();
}
