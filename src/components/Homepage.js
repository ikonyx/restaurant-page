import homepageImg from "../assets/Baratie.jpg";

function homePage() {
    
    const pageContent = document.querySelector('#content')
    const image = document.createElement('img');
    image.src = homepageImg;
    image.id = "homeImg";
    pageContent.appendChild(image);

    const textContainer = document.createElement('div');
    textContainer.id = "txtContainer"
    const header = document.createElement('div');
    header.textContent = "Fine Dining on the Open Sea";
    header.id = "homeHeader";

    const text = document.createElement('div');
    text.textContent = "Step aboard the legendary floating restaurant where culinary excellence meets high-seas adventure. At Baratie, every dish is served with a touch of maritime magic and world-class flavor."
    text.id = "homeTxt"
    pageContent.appendChild(textContainer);
    textContainer.appendChild(header);
    textContainer.appendChild(text);
    

}

export default homePage;

