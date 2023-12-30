,
"default_icon": {
"16": "icon16.png",
"48": "icon48.png",
"128": "icon128.png"
}

<!DOCTYPE html>
<html>
  <head>
    <title>Custom YouTube Speed</title>
    <script src="popup.js"></script>
  </head>
  <body>
    <label for="speedInput">Custom Speed:</label>
    <input type="number" id="speedInput" step="0.1" value="1.0" />
    <button onclick="setSpeed()">Set Speed</button>
  </body>
</html>
