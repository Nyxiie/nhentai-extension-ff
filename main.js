search = function (word, tab) {
  var query = word.selectionText;
  browser.tabs.create({ url: "https://nhentai.to/g/" + query });
};

browser.contextMenus.create({
  id: "nhentai",
  title: "Show in nhentai",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(search);
console.log("yeet")