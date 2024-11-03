// ==UserScript==
// @name         Audio Button with Sliding Sound Effects Menu
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add an audio button with a sliding dropdown of sound effects
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Define sound effects with URLs
    const soundEffects = {
        "Click Sound": "https://www.soundjay.com/button/sounds/button-16.mp3",
        "Alert Sound": "https://www.soundjay.com/button/sounds/beep-01a.mp3",
        "Ding Sound": "https://www.soundjay.com/button/sounds/ding-03.mp3"
    };

    // Create audio button
    const audioButton = document.createElement("img");
    audioButton.src = "https://github.com/matvey-koz/sound-effects/blob/main/audio-icon.png?raw=true";
    audioButton.style.position = "fixed";
    audioButton.style.width = "30px";
    audioButton.style.top = "10px";
    audioButton.style.right = "10px";
    audioButton.style.zIndex = "99";
    audioButton.style.cursor = "pointer";

    // Create dropdown for sound effects
    const dropdown = document.createElement("div");
    dropdown.style.position = "fixed";
    dropdown.style.top = "-200px"; // Start off-screen
    dropdown.style.right = "10px";
    dropdown.style.backgroundColor = "#f9f9f9";
    dropdown.style.boxShadow = "0px 8px 16px rgba(0,0,0,0.2)";
    dropdown.style.borderRadius = "5px";
    dropdown.style.transition = "top 0.3s ease"; // Slide-in transition
    dropdown.style.zIndex = "100";
    dropdown.style.paddingTop = "10px";
    dropdown.style.paddingBottom = "10px";

    // Add sound options to dropdown
    for (const [name, url] of Object.entries(soundEffects)) {
        const soundOption = document.createElement("div");
        soundOption.textContent = name;
        soundOption.style.padding = "10px";
        soundOption.style.cursor = "pointer";
        soundOption.style.color = "#007bff";
        soundOption.addEventListener("click", () => {
            playSound(url);
            toggleDropdown(); // Hide dropdown after selection
        });
        dropdown.appendChild(soundOption);
    }

    // Append dropdown to body
    document.body.appendChild(dropdown);

    // Toggle dropdown visibility and position
    let isDropdownVisible = false;
    audioButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click event from bubbling up
        toggleDropdown();
    });

    function toggleDropdown() {
        isDropdownVisible = !isDropdownVisible;
        dropdown.style.top = isDropdownVisible ? "60px" : "-200px"; // Slide down from the top
    }

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!audioButton.contains(event.target) && isDropdownVisible) {
            toggleDropdown();
        }
    });

    // Function to play sound
    function playSound(url) {
        const audio = new Audio(url);
        audio.play();
    }

    // Append button to body
    document.body.appendChild(audioButton);
})();
