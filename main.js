// ==UserScript==
// @name         Kamyki
// @namespace    hello
// @version      0.24
// @description  try to take over the world!
// @author       Priw8 edited by leksmar
// @match        *.margonem.pl/
// @match        *.margonem.com/
// @icon         https://micc.garmory-cdn.cloud/obrazki/itemy/neu/kamien3.gif
// @grant        none
// ==/UserScript==

(function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/leksmar/Grafiki-kamieni@main/config.js';
    script.onload = () => console.log('Skrypt załadowany!');
    script.onerror = () => console.error('Błąd ładowania skryptu!');
    document.head.appendChild(script);
})();
