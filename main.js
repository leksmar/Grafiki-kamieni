// ==UserScript==
// @name         GRAFIKI KAMIENI
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://*.margonem.pl/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

!function() {
    let config = {};

    async function loadConfig() {
        try {
            const response = await fetch("https://raw.githubusercontent.com/leksmar/Grafiki-kamieni/main/config.js");
            if (!response.ok) throw new Error("Failed to load config");
            const scriptContent = await response.text();
            eval(scriptContent);
            console.log("Config loaded:", config);
        } catch (error) {
            console.error("Error loading config:", error);
        }
    }

    const NI = typeof window.Engine != "undefined";

    function loadItemImage(url) {
        const $newImg = document.createElement("img");
        $newImg.src = url;
        $newImg.classList.add("priw8-item-overlay");
        return new Promise(resolve => {
            $newImg.addEventListener("load", () => {
                let w = $newImg.width, h = $newImg.height;
                if (h > 32) {
                    w = w * (32 / h);
                    h = 32;
                }
                if (w > 32) {
                    h = h * (32 / w);
                    w = 32;
                }
                const offset = (32 - w) / 2;
                $newImg.width = w;
                $newImg.height = h;
                $newImg.style.left = `${offset}px`;
                $newImg.style.display = "block";

                resolve($newImg);
            });
        });
    }

    async function appendItemOverlay(id, url) {
        if (NI) {
            const $it = document.querySelector(`.item-id-${id}`);
            if ($it) {
                $it.classList.add("priw8-item-small-icon");
                const $newImg = await loadItemImage(url);
                $newImg.style.position = "absolute";
                $newImg.zIndex = 1;
                const $canv = $it.querySelector("canvas");
                $canv.parentElement.appendChild($newImg);
                console.log(`Appended image to item ${id}:`, url);
            } else {
                console.warn(`Item not found: ${id}`);
            }
        } else {
            g.loadQueue.push({
                fun: async () => {
                    const $it = document.querySelector(`#item${id}`);
                    if ($it) {
                        $it.classList.add("priw8-item-small-icon");
                        const $newImg = await loadItemImage(url);

                        const $img = $it.querySelector("img");
                        if ($img) {
                            $img.parentElement.appendChild($newImg);
                            console.log(`Appended image to item ${id}:`, url);
                        } else {
                            console.warn(`Image element not found for item ${id}`);
                        }
                    } else {
                        console.warn(`Item not found: ${id}`);
                    }
                }
            });
        }
    }

    function onItem(items) {
        for (const id in items) {
            const it = items[id];
            const tp = getItemTp(it);
            const tpMap = getTpMap(tp);
            const entry = config[tp] ?? config[tpMap];
            if (entry) {
                appendItemOverlay(id, entry);
            } else {
                console.warn(`No config entry found for item ${id} with tp ${tp}`);
            }
        }
    }

    function init() {
        const org = NI ? window.Engine.communication.parseJSON : window.parseInput;
        const override = function(data) {
            const res = org.apply(this, arguments);
            if (data.item) {
                onItem(data.item);
            }
            return res;
        }
        if (NI)
            window.Engine.communication.parseJSON = override;
        else
            window.parseInput = override;

        const css = `
            /* SI */
            .priw8-item-small-icon img:not(.priw8-item-overlay) {
                width: 20px;
                height: 20px;
                top: 12px;
                z-index: 1;
            }

            /* NI */
            .priw8-item-small-icon canvas.canvas-icon {
                width: 20px;
                height: 20px;
                top: 12px;
                z-index: 1;
            }
            .priw8-item-small-icon .amount, .priw8-item-small-icon .cooldown {
                z-index: 2;
            }
        `;

        const $style = document.createElement("style");
        $style.innerHTML = css;
        document.head.appendChild($style);
    }

    function parseStats(stats) {
        if (!stats)
            return {};

        const spl = stats.split(";");
        const res = {};
        for (const entry of spl) {
            const pair = entry.split("=");
            res[pair[0]] = pair[1] ?? "true";
        }
        return res;
    }

    function getItemStats(it) {
        return it._cachedStats ?? parseStats(it.stat);
    }

    function getItemTp(it) {
        const stats = getItemStats(it);
        if (stats.teleport || stats.custom_teleport && stats.custom_teleport != "true") {
            return stats.teleport ?? stats.custom_teleport;
        }
        return "";
    }

    function getTpMap(tp) {
        return tp.split(",")[0];
    }

    function getLocationItems(loc) {
        return NI ? Engine.items.fetchLocationItems(loc).map(it => it) : Object.values(g.item).filter(it => it.loc == loc);
    }

    window.listStones = function() {
        getLocationItems("g").forEach(it => {
            const stats = getItemStats(it);

            const tp = getItemTp(it);

            if (tp != "") {
                const tpMap = getTpMap(tp);
                window.log(`${it.name} (${stats.opis}): ${tpMap} (${tp})`);
            }
        });
    }

    loadConfig().then(init).catch(error => console.error("Failed to load config:", error));
}();