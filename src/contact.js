export function loadContact() {
    const contactDiv = document.createElement("div");
    const contactInfoDiv = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us";

    const address = document.createElement("p");
    address.textContent = "Sample St. Mediterranean Ave. No: 34, Istanbul";

    const phone = document.createElement("p");
    const phoneStrong = document.createElement("strong");
    phoneStrong.textContent = "Phone: ";
    phone.appendChild(phoneStrong);
    phone.appendChild(document.createTextNode("(0212) 123 45 67"));

    const email = document.createElement("p");
    const emailStrong = document.createElement("strong");
    emailStrong.textContent = "Email: ";
    email.appendChild(emailStrong);
    email.appendChild(document.createTextNode("info@mediterraneodelight.com"));

    const workingHours = document.createElement("p");
    const hoursStrong = document.createElement("strong");
    hoursStrong.textContent = "Working Hours: ";
    workingHours.appendChild(hoursStrong);
    workingHours.appendChild(document.createTextNode("Monday-Saturday: 12:00 - 23:00, Sunday: Closed"));

    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850540662!2d28.847372832265084!3d41.005463242972844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1717945283794!5m2!1str!2str";
    map.width = "600";
    map.height = "450";
    map.style.border = "0";
    map.allowfullscreen = "";
    map.loading = "lazy";
    map.referrerpolicy = "no-referrer-when-downgrade";
    map.title = "Mediterraneo Delight Location";

    contactInfoDiv.appendChild(address);
    contactInfoDiv.appendChild(phone);
    contactInfoDiv.appendChild(email);
    contactInfoDiv.appendChild(workingHours);

    contactDiv.appendChild(h1);
    contactDiv.appendChild(contactInfoDiv);
    contactDiv.appendChild(map);

    contactDiv.classList.add("contact-container");

    return contactDiv;
}
