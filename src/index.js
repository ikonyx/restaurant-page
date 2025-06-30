import "./styles.css";
import homePage from "./components/Homepage.js";
import menuPage  from "./components/Menupage.js";
import aboutPage from "./components/Aboutpage.js";

homePage();

function handleTabbing() {
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

    const aboutBtn = document.querySelector("#aboutBtn");
    aboutBtn.addEventListener('click', switchToAbout);

    function switchToAbout() {
        document.querySelector('#content').innerHTML = "";
        aboutPage();
    }

}

handleTabbing();

