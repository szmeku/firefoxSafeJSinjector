var elt = document.createElement("script");
browser.runtime.sendMessage({name: 'code'}, (response) => {
  elt.textContent = response.code;
  document.head.appendChild(elt);
});
