document.addEventListener("DOMContentLoaded", function(event) {
  // Your code to run since DOM is loaded and ready
  var $body = document.querySelector("body");
  chrome.storage.sync.get(["status"], function(result) {
    if (result.status == "on") {
      //IE 9+
      if ($body.classList) {
        $body.classList.add("darkdocs");
      } else {
        $body.className += " " + className;
      }
    }
  });
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command == "on") {
      //IE 9+
      if ($body.classList) {
        $body.classList.add("darkdocs");
      } else {
        $body.className += " " + className;
      }
    } else {
      // IE 8+
      if ($body.classList) {
        $body.classList.remove(className);
      } else {
        $body.className = $body.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
      }
    }
  });
});
