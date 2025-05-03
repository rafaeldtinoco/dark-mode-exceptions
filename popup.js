document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const statusDiv = document.getElementById("status");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const url = new URL(currentTab.url);
        const currentDomain = url.hostname;

        // Create action label element as a span instead of div
        const actionLabel = document.createElement("span");
        actionLabel.id = "actionLabel";
        actionLabel.style.fontWeight = "bold";
        actionLabel.style.marginRight = "5px"; // Use margin-right instead of margin-bottom
        actionLabel.style.display = "inline-block"; // Make it display inline with the button
        toggleButton.parentNode.insertBefore(actionLabel, toggleButton);

        // Function to update UI based on domain status
        function updateUI(excludedDomains) {
            const isExcluded = excludedDomains.includes(currentDomain);

            // Update button to show only domain name
            toggleButton.textContent = currentDomain;

            // Update action label to show "Include" or "Exclude"
            if (isExcluded) {
                actionLabel.textContent = "Dark Mode:";
                actionLabel.style.color = "#0d6ebd";
                toggleButton.className = "excluded";
            } else {
                actionLabel.textContent = "Light Mode:";
                actionLabel.style.color = "#2d8a30";
                toggleButton.className = "not-excluded";
            }
        }

        // Load excluded domains from storage.
        chrome.storage.sync.get(["excludedDomains"], (result) => {
            let excludedDomains = result.excludedDomains || ["x.com", "x.ai"];

            // Update UI initially
            updateUI(excludedDomains);

            // Toggle domain.
            toggleButton.addEventListener("click", () => {
                const isCurrentlyExcluded =
                    excludedDomains.includes(currentDomain);

                if (isCurrentlyExcluded) {
                    // Remove domain.
                    excludedDomains = excludedDomains.filter(
                        (domain) => domain !== currentDomain
                    );
                    statusDiv.textContent = `${currentDomain} is dark now`;
                } else {
                    // Add domain.
                    excludedDomains.push(currentDomain);
                    statusDiv.textContent = `${currentDomain} is light now`;
                }

                // Update UI immediately after change
                updateUI(excludedDomains);

                // Save updated domains.
                chrome.storage.sync.set({ excludedDomains }, () => {
                    // Reload the page to apply changes.
                    chrome.scripting.executeScript({
                        target: { tabId: currentTab.id },
                        function: () => window.location.reload(),
                    });
                });
            });
        });
    });
});
