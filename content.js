document.addEventListener('DOMContentLoaded', function() {
  var $body = document.querySelector('body');

  chrome.storage.sync.get(['status'], function(result) {
    if (result.status == 'on') {
      $body.classList.add('darkdocs');
    }
  });

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command == 'on') {
      $body.classList.add('darkdocs');
    } else {
      $body.classList.remove('darkdocs');
    }
  });
});