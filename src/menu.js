export function loadMenu() {
    const menuDiv = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";

    const appetizers = document.createElement("div");
    appetizers.innerHTML = `
        <h2>Appetizers</h2>
        <ul>
            <li><strong>Meze Platter </strong> <br> Hummus, baba ghanoush, fresh minty yogurt eggplant, olive oil artichoke leaves, and homemade stuffed grape leaves served together. <span class="price">$12.99</span></li>
            <li><strong>Crispy Calamari </strong>  <br>  Lightly breaded calamari rings served with lemon slices and garlic mayonnaise. <span class="price">$10.99</span></li>
            <li><strong>Shrimp Casserole </strong>  <br> Shrimp marinated with tomatoes, onions, garlic, and fresh herbs, baked in the oven. <span class="price">$14.99</span></li>
        </ul>
    `;

    const salads = document.createElement("div");
    salads.innerHTML = `
        <h2>Salads</h2>
        <ul>
            <li><strong>Mediterranean Salad </strong>  <br>  Romaine lettuce, cucumber, tomatoes, black olives, feta cheese, capers, and fresh thyme served together. <span class="price">$8.99</span></li>
            <li><strong>Arugula and Parmesan Salad </strong>  <br>  Fresh arugula, parmesan cheese, cherry tomatoes, pine nuts, and balsamic dressing. <span class="price">$7.99</span></li>
            <li><strong>Seafood Salad </strong>  <br>  Shrimp, calamari, mussels, lettuce, shredded carrots, and lemon-tarragon dressing. <span class="price">$12.99</span></li>
        </ul>
    `;

    const mainCourses = document.createElement("div");
    mainCourses.innerHTML = `
        <h2>Main Courses</h2>
        <ul>
            <li><strong>Fish Casserole </strong>  <br>  Grilled sea bass served with oven-roasted vegetables and tomato sauce. <span class="price">$18.99</span></li>
            <li><strong>Lamb Ribs </strong>  <br>  Slow-cooked lamb ribs served with mashed potatoes and roasted vegetables. <span class="price">$20.99</span></li>
            <li><strong>Vegetable Paella </strong>  <br>  Shrimp, calamari, mussels, chicken pieces, chorizo sausage, peas, bell peppers, and tomatoes enriched saffron rice. <span class="price">$16.99</span></li>
        </ul>
    `;

    const vegetarianOptions = document.createElement("div");
    vegetarianOptions.innerHTML = `
        <h2>Vegetarian Options</h2>
        <ul>
            <li><strong>Mediterranean Vegetable Lasagna </strong>  <br>  Layers of spinach, zucchini, eggplant, mushrooms, and mozzarella cheese. <span class="price">$14.99</span></li>
            <li><strong>Chickpea Kebab </strong>  <br>  Grilled chickpea patties served with vegetable pilaf and fresh mint-yogurt sauce. <span class="price">$12.99</span></li>
            <li><strong>Quinoa and Kale Salad </strong>  <br>  Quinoa, cherry tomatoes, cucumber, green onions, fresh herbs, and lemon-olive oil dressing. <span class="price">$9.99</span></li>
        </ul>
    `;

    const desserts = document.createElement("div");
    desserts.innerHTML = `
        <h2>Desserts</h2>
        <ul>
            <li><strong>Baked Rice Pudding </strong>  <br>  Oven-baked rice pudding served with cinnamon and walnuts. <span class="price">$6.99</span></li>
            <li><strong>Orange Cheesecake </strong>  <br>  Orange-flavored cheesecake served with fresh orange slices and orange sauce. <span class="price">$8.99</span></li>
            <li><strong>Fruit Platter </strong>  <br>  Seasonal fruits served with fresh mint leaves and honey. <span class="price">$9.99</span></li>
        </ul>
    `;

    const drinks = document.createElement("div");
    drinks.innerHTML = `
        <h2>Drinks</h2>
        <ul>
            <li><strong>Wines </strong> <br>  Local and international white, red, and rosé wine options. <span class="price">$15.99</span></li>
            <li><strong>Cocktail Varieties </strong>  <br>  Classic and innovative cocktails such as Mojito, Pina Colada, Margarita. <span class="price">$10.99</span></li>
            <li><strong>Hot Beverages </strong>  <br>  Turkish coffee, brewed tea, and freshly squeezed fruit juices. <span class="price">$5.99</span></li>
        </ul>
    `;

    menuDiv.appendChild(h1);
    menuDiv.appendChild(appetizers);
    menuDiv.appendChild(salads);
    menuDiv.appendChild(mainCourses);
    menuDiv.appendChild(vegetarianOptions);
    menuDiv.appendChild(desserts);
    menuDiv.appendChild(drinks);

    menuDiv.classList.add("menu-container"); 

    return menuDiv;
}
