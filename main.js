// ==UserScript==
// @name         GRAFIKI KAMIENI
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://*.margonem.pl/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// @require      https://raw.githubusercontent.com/leksmar/Grafiki-kamieni/main/config.js
// @require      https://raw.githubusercontent.com/leksmar/Grafiki-kamieni/main/main.js
// ==/UserScript==

!function() {
    const NI = typeof window.Engine !== "undefined";

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
        const item = document.querySelector(NI ? `.item-id-${id}` : `#item${id}`);
        if (item) {
            item.classList.add("priw8-item-small-icon");
            const newImg = await loadItemImage(url);
            newImg.style.position = "absolute";
            newImg.zIndex = 1;
            const parent = NI ? item.querySelector("canvas").parentElement : item.querySelector("img").parentElement;
            parent.appendChild(newImg);
        }
    }

    function onItem(items) {
        for (const id in items) {
            const it = items[id];
            const tp = getItemTp(it);
            const entry = config[tp] ?? config[getTpMap(tp)];
            if (entry) appendItemOverlay(id, entry);
        }
    }

    function init() {
        const org = NI ? window.Engine.communication.parseJSON : window.parseInput;
        const override = function(data) {
            const res = org.apply(this, arguments);
            if (data.item) onItem(data.item);
            return res;
        };
        if (NI) window.Engine.communication.parseJSON = override;
        else window.parseInput = override;

        const css = `
            .priw8-item-small-icon img:not(.priw8-item-overlay), .priw8-item-small-icon canvas.canvas-icon {
                width: 20px; height: 20px; top: 12px; z-index: 1;
            }
            .priw8-item-small-icon .amount, .priw8-item-small-icon .cooldown { z-index: 2; }
        `;
        const style = document.createElement("style");
        style.innerHTML = css;
        document.head.appendChild(style);
    }

    function parseStats(stats) {
        if (!stats) return {};
        return stats.split(";").reduce((res, entry) => {
            const [key, value] = entry.split("=");
            res[key] = value ?? "true";
            return res;
        }, {});
    }

    function getItemStats(it) {
        return it._cachedStats ?? parseStats(it.stat);
    }

    function getItemTp(it) {
        const stats = getItemStats(it);
        return stats.teleport || (stats.custom_teleport && stats.custom_teleport !== "true") ? stats.teleport ?? stats.custom_teleport : "";
    }

    function getTpMap(tp) {
        return tp.split(",")[0];
    }

    function getLocationItems(loc) {
        return NI ? Engine.items.fetchLocationItems(loc) : Object.values(g.item).filter(it => it.loc === loc);
    }

    window.listStones = function() {
        getLocationItems("g").forEach(it => {
            const tp = getItemTp(it);
            if (tp) window.log(`${it.name} (${getItemStats(it).opis}): ${getTpMap(tp)} (${tp})`);
        });
    }

    init();
}();