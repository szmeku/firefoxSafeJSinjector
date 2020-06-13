$(document).ready(function() {

    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.name == 'code') {
            browser.storage.sync.get({
                code: ''
            }, (items) => {
                sendResponse({
                    code: items.code
                });
            });
        }
        return true;
    });

    browser.browserAction.onClicked.addListener((activeTab) => {
        var newURL = browser.runtime.getURL("options.html");
        browser.tabs.create({
            url: newURL
        });
    });
});
