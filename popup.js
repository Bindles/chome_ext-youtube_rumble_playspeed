document.addEventListener("DOMContentLoaded", function () {
  const speedInput = document.getElementById("speedInput");
  const setSpeedButton = document.getElementById("setSpeedButton");

  setSpeedButton.addEventListener("click", setSpeed);

  // Listen for changes in the currently active tab
  chrome.tabs.onActivated.addListener(function () {
    sendMessageToContentScript({ action: "getSpeed" }, updateSpeedInput);
  });

  // Listen for changes in the tab content
  chrome.tabs.onUpdated.addListener(function () {
    sendMessageToContentScript({ action: "getSpeed" }, updateSpeedInput);
  });

  // Initial update of the speed input
  sendMessageToContentScript({ action: "getSpeed" }, updateSpeedInput);

  function setSpeed() {
    const speed = speedInput.value;
    sendMessageToContentScript({ action: "setSpeed", speed: speed });
  }

  function updateSpeedInput(response) {
    const currentSpeed = response && response.speed ? response.speed : "";
    speedInput.value = currentSpeed;
    speedInput.placeholder = `Current Speed: ${currentSpeed || "N/A"}`;
  }

  function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      if (
        currentTab.url.includes("www.youtube.com") ||
        currentTab.url.includes("rumble.com")
      ) {
        chrome.tabs.sendMessage(currentTab.id, message, callback);
      }
    });
  }
});
