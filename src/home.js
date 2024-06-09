export function loadHome() {
    const homeDiv = document.createElement("div");


    const p = document.createElement("p");
    p.textContent = "Experience the Mediterranean's Melange of Flavors! ";


    homeDiv.appendChild(p);

    homeDiv.classList.add("home-container"); 

    return homeDiv;
}
