// ==UserScript==
// @name         Audio Button with Sliding Sound Effects Menu
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Add an audio button with a sliding dropdown of sound effects
// @match        https://replace-with-actual-website-link.com/
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve(`Script loaded: ${url}`);
            script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
            document.head.appendChild(script); // You can also use document.body
        });
    }

    loadScript("https://raw.githubusercontent.com/matvey-koz/sound-effects/refs/heads/main/main.js");
})();
