// ==UserScript==
// @name         Audio Button with Sliding Sound Effects Menu
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Add an audio button with a sliding dropdown of sound effects
// @match        https://replace-with-actual-website-link.com/
// @grant        none
// ==/UserScript==

(async function () {
    const url = "https://raw.githubusercontent.com/matvey-koz/sound-effects/main/main.js";
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const scriptContent = await response.text();
        eval(scriptContent); // Execute the script
        console.log(`Script loaded: ${url}`);
    } catch (error) {
        console.error(`Failed to load script: ${error.message}`);
    }
})();
