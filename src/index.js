import './styles.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import { loadAbout } from './about.js';

document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector("#content");

    function clearContent() {
        contentDiv.innerHTML = '';
    }

    function switchTab(tab) {
        clearContent();
        let newContent;
        if (tab === "home") {
            newContent = loadHome();
        } else if (tab === "menu") {
            newContent = loadMenu();
        } else if (tab === "contact") {
            newContent = loadContact();
        } else if (tab === "about") { 
            newContent = loadAbout();
        }
        contentDiv.appendChild(newContent);
    }

    switchTab("home");

    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const tab = button.getAttribute("data-tab");
            switchTab(tab);
        });
    });
});
