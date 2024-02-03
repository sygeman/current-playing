chrome.runtime.onMessage.addListener((request, _sender, senderResponse) => {
  if (request.type === 'MEDIA') {
    fetch('https://cp.sgmn.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: request?.data }),
    })
      .then(() => {
        console.log(request.data)
        senderResponse(true)
      })
      .catch((err) => {
        console.log(err)
        senderResponse(false)
      })
  }
})
