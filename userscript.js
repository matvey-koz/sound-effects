// ==UserScript==
// @name         Audio Button with Sliding Sound Effects Menu
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Add an audio button with a sliding dropdown of sound effects
// @match        https://replace-with-actual-website-link.com/
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Define sound effects with URLs
    const soundEffects = {
        "💥Vine Boom": "https://www.myinstants.com/media/sounds/vine-boom.mp3",
        "⚠️Alert Sound": "https://www.myinstants.com//media/sounds/tindeck_1.mp3",
        "🔙Get Out!": "https://www.myinstants.com/media/sounds/tuco-get-out.mp3",
        "😏Rizz Sound": "https://www.myinstants.com/media/sounds/rizz-sound-effect.mp3",
        "🎻Sad Violin": "https://www.myinstants.com/media/sounds/tf_nemesis.mp3",
        "🧐Amongus Sus": "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3",
        "😑Bruh": "https://www.myinstants.com/media/sounds/movie_1.mp3",
    };

    

    const startingPositionPopup = Object.keys(soundEffects).length * -53 + "px";

    // Create audio button
    const audioButton = document.createElement("img");
    audioButton.src = "https://github.com/matvey-koz/sound-effects/blob/main/audio-icon.png?raw=true";
    audioButton.style.position = "fixed";
    audioButton.style.width = "30px";
    audioButton.style.top = "10px";
    audioButton.style.right = "10px";
    audioButton.style.zIndex = "99";
    audioButton.style.cursor = "pointer";
    audioButton.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    audioButton.style.borderRadius = "99px";

    // Create dropdown for sound effects
    const dropdown = document.createElement("div");
    dropdown.style.position = "fixed";
    dropdown.style.top = startingPositionPopup; // Start off-screen
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
        soundOption.style.color = "#414141";
        soundOption.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click event from closing the dropdown
            playSound(url);
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
        dropdown.style.top = isDropdownVisible ? "60px" : startingPositionPopup; // Slide down from the top
    }

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!audioButton.contains(event.target) && !dropdown.contains(event.target) && isDropdownVisible) {
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
