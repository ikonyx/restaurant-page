import aboutpageImg from "../assets/Baratie-exterior.jpg";

function aboutPage() {

    const pageContent = document.querySelector('#content')
    const aboutContent = document.createElement('div');
    aboutContent.id = "about-page";
    pageContent.appendChild(aboutContent);


    const aboutTxt = document.createElement('div');
    aboutTxt.id = "aboutTxt";
    aboutContent.appendChild(aboutTxt);

    const image = document.createElement('img');
    image.src = aboutpageImg;
    image.id = "aboutImg";
    aboutContent.appendChild(image);

    

    function createSection(title, paragraphs = []) {
      const section = document.createElement("section");

      const heading = document.createElement("h2");
      heading.textContent = title;
      section.appendChild(heading);

      paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.textContent = text;
        section.appendChild(p);
      });

    aboutTxt.appendChild(section);
    }

  createSection("A Restaurant Born from the Seas", [
    "Inspired by the legendary floating restaurant in One Piece, Baratie brings the spirit of the Grand Line to life, where food, culture, and adventure meet on every plate."
  ]);


  createSection("Flavors from Every Blue", [
    "From Wano-style Oden to East Blue shrimp cocktails, our menu is a journey through the world’s most flavorful seas, crafted for pirates, travelers, and food lovers alike."
  ]);

  createSection("Contact Us", [
    "📍 Floating at Dock 3, East Blue Bay",
    "📞 Call us: +111-111-1111",
    "📧 Email: contact@baratierestaurant.com",
  ]);
};


export default aboutPage;