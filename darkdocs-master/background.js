// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({status: 'on'}, function() { });
});

function updateDarkdocs() {
  chrome.storage.sync.get('status', function(data) {
    var current = data.status;

    if (current == 'off') {
      current = 'on';
    } else {
      current = 'off';
    }

    chrome.browserAction.setIcon({path: 'icon' + (current == 'off' ? 'off' : '') + '.png'});

    chrome.storage.sync.set({ status: current }, function() { });

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, { command: current }, function(response) {});
    });
  });
};

chrome.browserAction.onClicked.addListener(updateDarkdocs);