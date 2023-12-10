// ==UserScript==
// @name         Sygeman
// @namespace    http://tampermonkey.net/
// @version      2023-12-10
// @description  try to take over the world!
// @author       You
// @match        https://music.yandex.ru/home
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @grant        none
// ==/UserScript==
(function () {
  "use strict";
  setInterval(() => {
    const meta = navigator.mediaSession.metadata;
    const data = {
      title: meta?.title || meta?.album,
      imageUrl: meta?.artwork[meta?.artwork.length - 1]?.src,
      artist: meta?.artist,
    };

    fetch("http://localhost:5644/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: data }),
    }).then();
  }, 1000);
})();
