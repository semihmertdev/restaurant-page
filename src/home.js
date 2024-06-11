export function loadHome() {
    const homeDiv = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = "Experience the Mediterranean's Melange of Flavors!";

    homeDiv.appendChild(p);
    homeDiv.classList.add("home-container");

    const socialMediaDiv = document.createElement("div");
    socialMediaDiv.classList.add("social-media");

    const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com";
    instagramLink.target = "_blank";
    const instagramIcon = document.createElement("i");
    instagramIcon.classList.add("fab", "fa-instagram", "fa-2x");
    instagramLink.appendChild(instagramIcon);

    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com";
    facebookLink.target = "_blank";
    const facebookIcon = document.createElement("i");
    facebookIcon.classList.add("fab", "fa-facebook", "fa-2x");
    facebookLink.appendChild(facebookIcon);

    const twitterLink = document.createElement("a");
    twitterLink.href = "https://www.twitter.com";
    twitterLink.target = "_blank";
    const twitterIcon = document.createElement("i");
    twitterIcon.classList.add("fab", "fa-twitter", "fa-2x");
    twitterLink.appendChild(twitterIcon);

    socialMediaDiv.appendChild(instagramLink);
    socialMediaDiv.appendChild(facebookLink);
    socialMediaDiv.appendChild(twitterLink);

    homeDiv.appendChild(socialMediaDiv);

    return homeDiv;
}
