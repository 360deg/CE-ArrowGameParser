chrome.runtime.onMessage.addListener((request, sender, response) => {
    if (request.action === 'parseTableData') {
        chrome.scripting.executeScript({
            target: { tabId: request.tabId },
            files: ["content.js"]
        });
    }
});
