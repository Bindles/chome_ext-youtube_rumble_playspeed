document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("setSpeedButton").addEventListener("click", setSpeed);
  document.getElementById("logHiButton").addEventListener("click", logHi);
});

function setSpeed() {
  const speed = document.getElementById("speedInput").value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
  });
}

function logHi() {
  console.log("Hi");
}
