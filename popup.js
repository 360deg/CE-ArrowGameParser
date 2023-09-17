document.querySelector('#parse').addEventListener('click', () => {
    console.log("popup");
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.runtime.sendMessage({
            action: "parseTableData",
            tabId: tabs[0].id
        });
    });
});
