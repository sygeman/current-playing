
setInterval(() => {
  const meta = navigator.mediaSession.metadata
  const data = {
    title: meta?.title || meta?.album,
    imageUrl: meta?.artwork[meta?.artwork.length - 1]?.src,
    artist: meta?.artist,
  }

  chrome.runtime.sendMessage({ type: 'MEDIA', data }, (response) => {
    console.log(response)
  })
}, 3000)
