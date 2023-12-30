// content.js
console.log("Custom YouTube Speed extension loaded.");

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "setSpeed") {
    console.log("SETTTTT");

    const speed = request.speed;
    document.querySelector("video").playbackRate = parseFloat(speed);
  }
});
