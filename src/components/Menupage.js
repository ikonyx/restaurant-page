import homepageImg from "../assets/Baratie.jpg";

function menuPage() {

    const dishes = [
    // Starters
    { name: "East Blue Shrimp Cocktail", price: "₿1,200", description: "Fresh shrimp served with spicy citrus cocktail sauce.", category: "Starters" },
    { name: "Zeff’s Garlic Bread", price: "₿600", description: "Toasted sourdough brushed with garlic and herbs.", category: "Starters" },
    { name: "All Blue Ceviche", price: "₿1,500", description: "Mixed seafood marinated in lime, chili, and herbs.", category: "Starters" },
    { name: "Gyoza of the Grand Line", price: "₿900", description: "Crispy dumplings filled with shrimp and seasoned chicken.", category: "Starters" },

    // Mains
    { name: "Sanji’s Seafood Pasta", price: "₿2,800", description: "Linguine in creamy saffron sauce with seafood.", category: "Mains" },
    { name: "Red Line Grilled Tuna Steak", price: "₿3,200", description: "Sesame-crusted tuna with wasabi mashed potatoes.", category: "Mains" },
    { name: "Zoro’s Triple-Meat Platter", price: "₿3,600", description: "Grilled steak, chicken, and lamb with smoky glaze.", category: "Mains" },
    { name: "Baratie Bouillabaisse", price: "₿3,000", description: "Classic French seafood stew with crusty bread.", category: "Mains" },

    // Specials of the Sea
    { name: "Mermaid’s Treasure Sushi Platter", price: "₿3,400", description: "Assorted nigiri and rolls from every sea.", category: "Specials of the Sea" },
    { name: "Devil Fruit Salad", price: "₿1,000", description: "Exotic fruit medley tossed in a honey-lime vinaigrette.", category: "Specials of the Sea" },
    { name: "Kraken Calamari Rings", price: "₿1,300", description: "Fried calamari served with spicy lemon aioli.", category: "Specials of the Sea" },

    // From Across the Seas
    { name: "Palestinian Musakhan Rolls", price: "₿1,700", description: "Chicken, sumac, and onion in warm taboon bread.", category: "From Across the Seas" },
    { name: "Moroccan Spiced Fish Tagine", price: "₿2,600", description: "White fish in chermoula with olives and couscous.", category: "From Across the Seas" },
    { name: "Wano-style Oden", price: "₿1,900", description: "A hearty stew of fish cakes, tofu, and vegetables in dashi broth.", category: "From Across the Seas" },
    { name: "Grand Line Tacos del Mar", price: "₿1,600", description: "Fish tacos with pineapple slaw and chipotle mayo.", category: "From Across the Seas" },
    { name: "Sea King's Thai Green Curry", price: "₿2,700", description: "Spicy seafood curry with basil and sticky rice.", category: "From Across the Seas" },

    // Desserts
    { name: "Floating Island Cream Puff", price: "₿900", description: "Choux pastry filled with vanilla cream and caramel.", category: "Desserts" },
    { name: "Binks’ Sake Sorbet", price: "₿1,000", description: "Sake-infused fruit sorbet with fresh berries.", category: "Desserts" },
    { name: "Chocolate Log Pose", price: "₿1,100", description: "Rum-spiked chocolate cake roll with ganache.", category: "Desserts" },

    // Drinks
    { name: "Binks' Brew", price: "₿850", description: "House-made rum punch with citrus and spice.", category: "Drinks" },
    { name: "Sea King Smoothie", price: "₿700", description: "Blueberry-banana smoothie with protein pearls.", category: "Drinks" },
    { name: "Baratie Breeze", price: "₿650", description: "Mint, lime, and soda in a refreshing mocktail.", category: "Drinks" },
    { name: "Black Leg Espresso", price: "₿500", description: "Bold dark roast espresso with a smooth finish.", category: "Drinks" }
    ];


    const pageContent = document.querySelector('#content')
    const image = document.createElement('img');
    image.src = homepageImg;
    image.id = "homeImg";
    pageContent.appendChild(image);

    const menuContainer = document.createElement('div');
    menuContainer.id = "menuContainer";
    pageContent.appendChild(menuContainer);

    const menuHeader = document.createElement('div');
    menuHeader.id = "menuHeader";
    menuHeader.textContent = "Baratie Restaurant Menu"
    menuContainer.appendChild(menuHeader);

    const menuNav = document.createElement("div");
    menuNav.id = "menu-nav"
    menuContainer.appendChild(menuNav);

    const content = document.createElement("div");
    content.id = "dishes-content"
    menuContainer.appendChild(content);

    
    const categories = [...new Set(dishes.map(d => d.category))];

    function renderCategory(category) {
        content.innerHTML = ""; 

        const section = document.createElement("section");
        const heading = document.createElement("h2");
        heading.textContent = category;
        section.appendChild(heading);

        dishes.filter(d => d.category === category).forEach(dish => {
            const dishDiv = document.createElement("div");
            dishDiv.className = "dish";

        const title = document.createElement("h3");
        const nameText = document.createTextNode(dish.name);
        const priceSpan = document.createElement("span");
        priceSpan.textContent = dish.price;
        priceSpan.style.float = "right";

        title.appendChild(nameText);
        title.appendChild(priceSpan);

        const description = document.createElement("p");
        description.textContent = dish.description;

        dishDiv.appendChild(title);
        dishDiv.appendChild(description);
        section.appendChild(dishDiv);
    });

    content.appendChild(section);
    }


    categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", () => renderCategory(category));
    menuNav.appendChild(button);
    });

    renderCategory(categories[0]);
};

export default menuPage;