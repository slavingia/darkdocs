$(document).ready(function() {
  var $body = $('body');

  chrome.storage.sync.get(['status'], function(result) {
    if (result.status == 'on') {
      $body.addClass('darkdocs');
    }
  });

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.command == 'on') {
      $body.addClass('darkdocs');
    } else {
      $body.removeClass('darkdocs');
    }
  });
});