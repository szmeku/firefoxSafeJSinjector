const injectCode = code => {
    const scriptEl = document.createElement("script");

    scriptEl.textContent = code;
    document.head.appendChild(scriptEl);
}

browser.storage.sync.get({code: ''}, storage => injectCode(storage.code));
