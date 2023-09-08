chrome.browserAction.onClick.addListener(function() {
    chrome.tabs.create({ url: "https://mycustombrowser.netlify.app/" });
  });
  