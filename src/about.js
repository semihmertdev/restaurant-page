export function loadAbout() {
    const aboutDiv = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";

    const p1 = document.createElement("p");
    p1.textContent = "Mediterraneo Delight isn't just a restaurant; it's a culinary journey through the heart of the Mediterranean, right in the bustling streets of Istanbul. Established in 2005, we've been weaving together flavors, traditions, and warmth to create an experience that goes beyond just a meal.";

    const p2 = document.createElement("p");
    p2.textContent = "As a family-owned business, every dish we serve carries with it the essence of our heritage, the care of homemade recipes passed down through generations. But we're more than just a dining establishment; we're a sanctuary, a haven where families, friends, and food lovers alike gather to share in the joys of life and the pleasures of exceptional cuisine.";

    const p3 = document.createElement("p");
    p3.textContent = "Our concept is simple yet profound: to transport our guests to the sun-kissed shores of the Mediterranean with each bite, each sip, and each moment spent in our cozy ambiance. From the vibrant colors of our salads to the rich aromas of our seafood dishes, every aspect of Mediterraneo Delight is designed to evoke the spirit of the Mediterranean lifestyle.";

    const p4 = document.createElement("p");
    p4.textContent = "We're a team dedicated to excellence, to authenticity, and to creating memories that linger long after the plates have been cleared. With a commitment to using the freshest ingredients sourced locally and responsibly, we ensure that every dish reflects the seasonality and bounty of the land and sea."

    const p5 = document.createElement("p");
    p5.textContent = "So, whether you're seeking a taste of nostalgia, a culinary adventure, or simply a warm and inviting atmosphere to unwind, Mediterraneo Delight welcomes you with open arms. Come join us, and let's embark on a journey of flavors, stories, and shared moments that celebrate the beauty of life and the richness of the Mediterranean tradition."

    aboutDiv.appendChild(h1);
    aboutDiv.appendChild(p1);
    aboutDiv.appendChild(p2);
    aboutDiv.appendChild(p3);
    aboutDiv.appendChild(p4);
    aboutDiv.appendChild(p5);

    aboutDiv.classList.add("about-container"); 

    return aboutDiv;
}
