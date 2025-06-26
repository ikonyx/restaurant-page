import homepageImg from "../assets/Baratie.jpg";

function homePage() {
    
    const pageContent = document.querySelector('#content')
    const image = document.createElement('img');
    image.src = homepageImg;
    pageContent.appendChild(image);

    const textContainer = document.createElement('div');
    const header = document.createElement('div');
    header.textContent = "Fine Dining on the Open Sea";
    const text = document.createElement('div');
    text.textContent = "Step aboard the legendary floating restaurant where culinary excellence meets high-seas adventure. At Baratie, every dish is served with a touch of maritime magic and world-class flavor."
    pageContent.appendChild(textContainer);
    textContainer.appendChild(header);
    textContainer.appendChild(text);
    

}

export default homePage;

