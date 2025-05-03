(function () {
    "use strict";

    const defaultMode = "dark"; // or "light"

    // Initial excluded domains.
    const initialExcludedDomains = [];

    // Light mode CSS.
    const lightCSS = `
        :root {
            color-scheme: light only !important;
        }
    `;

    // Dark mode CSS.
    const darkCSS = `
        :root {
            color-scheme: dark only !important;
        }
    `;

    // Apply style to the current page so.
    function applyStyle(excludedDomains) {
        const currentDomain = window.location.hostname;
        const isExcluded = excludedDomains.some((domain) =>
            currentDomain.includes(domain)
        );

        if (defaultMode === "dark") {
            if (isExcluded) {
                const style = document.createElement("style");
                style.textContent = lightCSS;
                document.head.appendChild(style);
            }
        } else if (defaultMode === "light") {
            if (isExcluded) {
                const style = document.createElement("style");
                style.textContent = darkCSS;
                document.head.appendChild(style);
            }
        }
    }

    // Load excluded domains from storage and apply style.
    chrome.storage.sync.get(["excludedDomains"], (result) => {
        let excludedDomains = result.excludedDomains || initialExcludedDomains;
        applyStyle(excludedDomains);
    });
})();
