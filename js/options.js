(function(){

    const codeForm = () => document.querySelector("#codeForm");
    const saveButton = () => document.querySelector("#saveButton");

    const loadCode = () => {
        browser.storage.sync.get({code: ''}, response =>{
            codeForm().value = response.code;
        })
    }

    const saveCode = () => browser.storage.sync.set({code: codeForm().value}, () => alert('code saved!'));

    window.onload = function(){

        loadCode();
        saveButton().onclick = saveCode;
    }
})();

