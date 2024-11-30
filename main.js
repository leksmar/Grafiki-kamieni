// ==UserScript==
// @name         GRAFIKI KAMIENI
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Load custom graphics for items
// @author       You
// @match        https://*.margonem.pl/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

(async function () {
    const configURL = "https://raw.githubusercontent.com/leksmar/Grafiki-kamieni/refs/heads/main/config.js";
    const NI = typeof window.Engine !== "undefined";

    async function loadConfig(url) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url,
                onload: response => {
                    try {
                        console.log("Config loaded successfully");
                        resolve(eval(response.responseText));
                    } catch (err) {
                        console.error("Error evaluating config:", err);
                        reject(err);
                    }
                },
                onerror: err => {
                    console.error("Error loading config:", err);
                    reject(err);
                },
            });
        });
    }

    function loadItemImage(url) {
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("priw8-item-overlay");
        return new Promise(resolve => {
            img.addEventListener("load", () => {
                let { width: w, height: h } = img;
                if (h > 32) { w *= 32 / h; h = 32; }
                if (w > 32) { h *= 32 / w; w = 32; }
                img.width = w;
                img.height = h;
                img.style.left = `${(32 - w) / 2}px`;
                img.style.display = "block";
                resolve(img);
            });
        });
    }

    async function appendItemOverlay(id, url) {
        const selector = NI ? `.item-id-${id}` : `#item${id}`;
        const item = document.querySelector(selector);
        if (item) {
            item.classList.add("priw8-item-small-icon");
            const img = await loadItemImage(url);
            const parent = NI ? item.querySelector("canvas").parentElement : item.querySelector("img").parentElement;
            parent.appendChild(img);
        } else {
            console.warn(`Item with id ${id} not found`);
        }
    }

    function onItem(items, config) {
        for (const id in items) {
            const item = items[id];
            const tp = getItemTp(item);
            const entry = config[tp] ?? config[getTpMap(tp)];
            if (entry) appendItemOverlay(id, entry);
        }
    }

    function init(config) {
        const parseFunc = NI ? window.Engine.communication.parseJSON : window.parseInput;
        const override = function (data) {
            const result = parseFunc.apply(this, arguments);
            if (data.item) onItem(data.item, config);
            return result;
        };
        if (NI) window.Engine.communication.parseJSON = override;
        else window.parseInput = override;

        const style = document.createElement("style");
        style.textContent = `
            .priw8-item-small-icon img:not(.priw8-item-overlay),
            .priw8-item-small-icon canvas.canvas-icon {
                width: 20px;
                height: 20px;
                top: 12px;
                z-index: 1;
            }
        `;
        document.head.appendChild(style);
    }

    try {
        const config = await loadConfig(configURL);
        init(config);
    } catch (err) {
        console.error("Failed to load config:", err);
    }
})();